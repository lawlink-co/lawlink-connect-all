import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSVideoProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

const HLSVideo = ({
  src,
  fallbackSrc,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: HLSVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if source is HLS (.m3u8)
    const isHLS = src.endsWith(".m3u8");

    if (isHLS && Hls.isSupported()) {
      // Use hls.js for browsers that don't natively support HLS
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        startLevel: -1, // Auto-select quality based on bandwidth
      });

      hlsRef.current = hls;
      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch(() => {
            // Autoplay blocked, that's okay
          });
        }
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal && fallbackSrc) {
          // Fall back to MP4 if HLS fails
          hls.destroy();
          video.src = fallbackSrc;
          if (autoPlay) {
            video.play().catch(() => {});
          }
        }
      });

      return () => {
        hls.destroy();
        hlsRef.current = null;
      };
    } else if (isHLS && video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari supports HLS natively
      video.src = src;
      if (autoPlay) {
        video.play().catch(() => {});
      }
    } else if (fallbackSrc) {
      // Use fallback MP4 for non-HLS sources or if HLS not supported
      video.src = fallbackSrc;
      if (autoPlay) {
        video.play().catch(() => {});
      }
    } else {
      // Direct source
      video.src = src;
      if (autoPlay) {
        video.play().catch(() => {});
      }
    }
  }, [src, fallbackSrc, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default HLSVideo;
