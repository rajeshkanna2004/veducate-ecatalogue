'use client';

import { useEffect, useRef, useState } from 'react';

export default function AutoPlayVideo({ className, src, style, eager = false }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: '450px 0px' });

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch(() => {});
    };
    const markBuffering = () => setIsBuffering(true);
    const markPlaying = () => setIsBuffering(false);

    playVideo();
    video.addEventListener('canplay', playVideo);
    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('waiting', markBuffering);
    video.addEventListener('stalled', markBuffering);
    video.addEventListener('playing', markPlaying);
    video.addEventListener('canplaythrough', markPlaying);

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        playVideo();
      } else {
        video.pause();
      }
    }, { threshold: 0.08 });

    visibilityObserver.observe(video);

    return () => {
      video.removeEventListener('canplay', playVideo);
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('waiting', markBuffering);
      video.removeEventListener('stalled', markBuffering);
      video.removeEventListener('playing', markPlaying);
      video.removeEventListener('canplaythrough', markPlaying);
      visibilityObserver.disconnect();
    };
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={`${className || ''} autoplay-video${isBuffering ? ' is-buffering' : ''}`}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? 'auto' : 'metadata'}
      style={style}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
