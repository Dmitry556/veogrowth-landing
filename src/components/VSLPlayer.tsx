import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';

interface VSLPlayerProps {
  videoUrl: string;
  poster?: string;
  onVideoEnd?: () => void;
  onVideoProgress?: (progress: number) => void;
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ 
  videoUrl, 
  poster, 
  onVideoEnd, 
  onVideoProgress 
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        fill: true,
        preload: 'metadata',
        poster: poster || '',
        sources: [
          {
            src: videoUrl,
            type: 'video/mp4'
          },
          {
            src: `${videoUrl}.mp4`,
            type: 'video/mp4'
          },
          {
            src: `${videoUrl}.webm`,
            type: 'video/webm'
          }
        ],
        html5: {
          vhs: {
            overrideNative: !videojs.browser.IS_SAFARI
          }
        },
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        techOrder: ['html5'],
        // Custom styling
        className: 'vjs-matrix vjs-big-play-centered',
      });

      // Event listeners
      player.on('ended', () => {
        onVideoEnd?.();
      });

      player.on('timeupdate', () => {
        const currentTime = player.currentTime();
        const duration = player.duration();
        if (duration > 0) {
          const progress = (currentTime / duration) * 100;
          onVideoProgress?.(progress);
        }
      });

      player.on('error', (e: any) => {
        console.error('Video.js error:', e);
        // Show error message overlay
        const errorDiv = document.createElement('div');
        errorDiv.className = 'video-error-overlay';
        errorDiv.innerHTML = `
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            max-width: 400px;
            z-index: 1000;
          ">
            <h3 style="margin-bottom: 1rem;">Video Loading Issue</h3>
            <p style="margin-bottom: 1rem;">We're having trouble loading the video. Please try refreshing the page or contact us directly.</p>
            <button onclick="window.location.reload()" style="
              background: #3b82f6;
              color: white;
              border: none;
              padding: 0.5rem 1rem;
              border-radius: 4px;
              cursor: pointer;
            ">
              Refresh Page
            </button>
          </div>
        `;
        if (videoRef.current) {
          videoRef.current.appendChild(errorDiv);
        }
      });

      player.ready(() => {
        console.log('Video.js player is ready');
      });
    }

    // Cleanup function
    return () => {
      const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl, poster, onVideoEnd, onVideoProgress]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        ref={videoRef}
        className="video-container"
        style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0,
          overflow: 'hidden'
        }}
      />
      <style jsx global>{`
        .video-js {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .vjs-big-play-button {
          font-size: 3em;
          line-height: 1.5em;
          height: 1.5em;
          width: 3em;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          padding: 0;
          cursor: pointer;
          opacity: 1;
          border: 0.1em solid #fff;
          background-color: rgba(43, 51, 63, 0.7);
          border-radius: 50%;
          transition: all 0.4s;
          transform: translate(-50%, -50%);
        }

        .vjs-big-play-button:hover {
          background-color: rgba(43, 51, 63, 0.9);
          transform: translate(-50%, -50%) scale(1.1);
        }

        .vjs-control-bar {
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
        }

        .vjs-progress-control {
          height: 0.5em;
        }

        .vjs-play-progress {
          background: #3b82f6;
        }

        .vjs-load-progress {
          background: rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default VSLPlayer;