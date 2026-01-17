import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * HLSVideo Component
 * 
 * VIDEO ENCODING REQUIREMENTS:
 * All UI videos must be encoded with the following specifications for optimal
 * mobile playback and cross-browser compatibility:
 * 
 * - Codec: H.264 (baseline or main profile)
 * - Resolution: Max 720p (1280x720)
 * - Bitrate: 1–3 Mbps target
 * - Container: MP4 for fallback, HLS (.m3u8) for adaptive streaming
 * 
 * These settings ensure smooth playback on mobile devices without requiring
 * runtime transcoding or client-side processing.
 * 
 * LAZY LOADING:
 * Videos use IntersectionObserver for lazy loading. They only begin loading
 * when near the viewport and pause when scrolled out of view to conserve
 * network and CPU resources.
 * 
 * MOBILE BEHAVIOR:
 * On mobile devices, autoplay is disabled to reduce CPU, memory usage, and
 * playback contention. Users must tap to play. Native video controls are
 * shown on mobile for tap-to-play functionality.
 * 
 * FFmpeg encoding example:
 * ffmpeg -i input.mov -c:v libx264 -profile:v main -level 3.1 \
 *   -vf "scale=-2:720" -b:v 2M -maxrate 3M -bufsize 6M \
 *   -c:a aac -b:a 128k output.mp4
 */
interface HLSVideoProps {
  src: string;
  fallbackSrc?: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const HLSVideo = ({
  src,
  fallbackSrc,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: HLSVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const isMobile = useIsMobile();

  // On mobile, disable autoplay to reduce CPU/memory usage
  const shouldAutoPlay = autoPlay && !isMobile;

  // IntersectionObserver for lazy loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!hasLoaded) {
              setHasLoaded(true);
            }
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded]);

  // Handle video loading and playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasLoaded) return;

    const isHLS = src.endsWith(".m3u8");

    if (isHLS && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        startLevel: -1,
      });

      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (shouldAutoPlay && isVisible) {
          video.play().catch(() => {});
        }
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal && fallbackSrc) {
          hls.destroy();
          video.src = fallbackSrc;
          if (shouldAutoPlay && isVisible) {
            video.play().catch(() => {});
          }
        }
      });

      return () => {
        hls.destroy();
        hlsRef.current = null;
      };
    } else if (isHLS && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (fallbackSrc) {
      video.src = fallbackSrc;
    } else {
      video.src = src;
    }
  }, [src, fallbackSrc, hasLoaded, shouldAutoPlay, isVisible]);

  // Handle play/pause based on visibility (desktop only)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasLoaded) return;

    // Only auto-manage playback on desktop
    if (isMobile) return;

    if (isVisible && shouldAutoPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, hasLoaded, shouldAutoPlay, isMobile]);

  return (
    <div ref={containerRef} className={className}>
      {hasLoaded ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload="metadata"
          controls={isMobile}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        poster && (
          <img
            src={poster}
            alt=""
            className="w-full h-full object-cover"
          />
        )
      )}
    </div>
  );
};

export default HLSVideo;
