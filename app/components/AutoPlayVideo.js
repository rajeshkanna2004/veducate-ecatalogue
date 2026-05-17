'use client';

import { memo, useEffect, useRef } from 'react';

function AutoPlayVideo({ className, src, style, eager = false, label }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return undefined;

    let hasLoaded = false;
    let isVisible = false;
    let loadObserver;
    let visibilityObserver;
    let idleId;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = eager ? 'auto' : 'metadata';

    const play = () => {
      if (!hasLoaded || !isVisible || document.hidden) return;
      const promise = video.play();
      if (promise) promise.catch(() => {});
    };

    const pause = () => {
      if (!video.paused) video.pause();
    };

    const loadVideo = () => {
      if (hasLoaded) return;
      hasLoaded = true;
      video.src = src;
      video.load();
      video.classList.add('is-loading');
    };

    const queueLoad = () => {
      if (eager) {
        loadVideo();
        return;
      }

      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(loadVideo, { timeout: 900 });
      } else {
        window.requestAnimationFrame(loadVideo);
      }
    };

    const markReady = () => {
      video.classList.remove('is-loading', 'is-buffering');
      video.classList.add('is-ready');
      if (isVisible) play();
      else pause();
    };

    const markBuffering = () => {
      if (hasLoaded) video.classList.add('is-buffering');
    };

    const handleVisibilityChange = () => {
      if (document.hidden) pause();
      else play();
    };

    video.addEventListener('loadeddata', markReady, { passive: true });
    video.addEventListener('canplay', markReady, { passive: true });
    video.addEventListener('playing', markReady, { passive: true });
    video.addEventListener('waiting', markBuffering);
    video.addEventListener('stalled', markBuffering);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    loadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        queueLoad();
        loadObserver.disconnect();
      }
    }, { rootMargin: '650px 0px', threshold: 0.01 });

    visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting && entry.intersectionRatio > 0.12;
      if (isVisible) play();
      else pause();
    }, { rootMargin: '120px 0px', threshold: [0, 0.12, 0.35] });

    loadObserver.observe(video);
    visibilityObserver.observe(video);
    queueLoad();

    return () => {
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId);
      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', markReady);
      video.removeEventListener('playing', markReady);
      video.removeEventListener('waiting', markBuffering);
      video.removeEventListener('stalled', markBuffering);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      loadObserver.disconnect();
      visibilityObserver.disconnect();
      pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [src, eager]);

  return (
    <video
      ref={videoRef}
      className={`${className || ''} autoplay-video`}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? 'auto' : 'metadata'}
      disablePictureInPicture
      disableRemotePlayback
      aria-label={label}
      style={{ ...style, pointerEvents: 'none' }}
    />
  );
}

export default memo(AutoPlayVideo);
