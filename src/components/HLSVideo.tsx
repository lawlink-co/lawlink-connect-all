import { useEffect, useRef } from "react";
import Hls from "hls.js";

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
      poster={poster}
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
