import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, poster, className = '' }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        preload: 'metadata',
        poster: poster || '',
        sources: [
          {
            src: videoUrl,
            type: 'video/mp4'
          }
        ],
        playbackRates: [0.75, 1, 1.25, 1.5],
        className: 'vjs-default-skin',
      });

      player.ready(() => {
        console.log('Video player ready');
      });

      player.on('error', (e: any) => {
        console.error('Video error:', e);
      });
    }

    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl, poster]);

  return (
    <div className={`video-container ${className}`}>
      <div ref={videoRef} />
      <style jsx global>{`
        .video-js {
          border-radius: 12px;
          overflow: hidden;
        }
        
        .vjs-big-play-button {
          background-color: rgba(79, 70, 229, 0.8) !important;
          border: 2px solid rgba(255, 255, 255, 0.8) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        
        .vjs-big-play-button:hover {
          background-color: rgba(79, 70, 229, 1) !important;
          transform: scale(1.1) !important;
        }
        
        .vjs-control-bar {
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%) !important;
        }
        
        .vjs-play-progress {
          background: linear-gradient(90deg, #8b5cf6, #3b82f6) !important;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;