'use client';

import { useEffect, useRef } from 'react';

export default function AutoPlayVideo({ className, src, style }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();
    video.addEventListener('canplay', playVideo);
    video.addEventListener('loadeddata', playVideo);

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      style={style}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
