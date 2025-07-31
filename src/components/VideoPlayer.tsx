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
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

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
        preload: 'metadata', // Changed from 'auto' to 'metadata' for faster initial load
        poster: poster || '',
        sources: [
          {
            src: videoUrl,
            type: 'video/mp4'
          }
        ],
        playbackRates: [1],
        className: 'vjs-default-skin',
        controlBar: {
          pictureInPictureToggle: false,
          fullscreenToggle: false,
          playbackRates: false,
          volumePanel: {
            inline: false
          }
        },
        html5: {
          vhs: {
            enableLowInitialPlaylist: true, // Enable low initial playlist for faster start
            smoothQualityChange: true,
            overrideNative: true,
            withCredentials: false, // Disable credentials for faster loading
            handlePartialData: true // Handle partial data for progressive loading
          },
          nativeVideoTracks: false,
          nativeAudioTracks: false,
          nativeTextTracks: false
        },
        // Add buffer settings for better streaming
        techOrder: ['html5'],
        html5: {
          hlsjsConfig: {
            maxBufferLength: 10, // Reduce buffer size for faster start
            maxMaxBufferLength: 20,
            maxBufferSize: 60 * 1000 * 1000, // 60MB
            maxBufferHole: 0.1
          }
        }
      });

      player.ready(() => {
        console.log('Video player ready');
        // Load a better frame for poster (try 2-3 seconds in)
        player.one('loadeddata', () => {
          player.currentTime(2);
          player.pause();
        });
      });

      // Track if this is the first play (from poster) or user is scrubbing
      let hasPlayedBefore = false;
      
      // When user clicks play, reset to beginning only on first play
      player.on('play', () => {
        if (!hasPlayedBefore && player.currentTime() > 1) {
          // First play from poster - reset to start
          player.currentTime(0);
          hasPlayedBefore = true;
        }
      });
      
      // Mark as played when user starts watching
      player.on('playing', () => {
        hasPlayedBefore = true;
      });

      // Add loading timeout to prevent freeze
      let loadingTimeout: NodeJS.Timeout;
      
      player.on('loadstart', () => {
        console.log('Video loading started');
        setIsLoading(true);
        setHasError(false);
        loadingTimeout = setTimeout(() => {
          console.log('Video loading timeout - reloading');
          setHasError(true);
          player.src(videoUrl);
        }, 15000); // 15 second timeout for large files
      });

      // Optimize for slow connections
      player.on('progress', () => {
        const buffered = player.buffered();
        if (buffered.length > 0) {
          const bufferedEnd = buffered.end(buffered.length - 1);
          const duration = player.duration();
          if (bufferedEnd > 5 || bufferedEnd / duration > 0.1) {
            // Enough buffered to start playing smoothly
            setIsLoading(false);
          }
        }
      });
      
      player.on('loadeddata', () => {
        console.log('Video data loaded');
        setIsLoading(false);
        if (loadingTimeout) clearTimeout(loadingTimeout);
      });
      
      // Handle buffering during playback
      player.on('waiting', () => {
        console.log('Video buffering...');
        setIsLoading(true);
      });
      
      player.on('canplay', () => {
        console.log('Video can play');
        setIsLoading(false);
      });
      
      player.on('canplaythrough', () => {
        console.log('Video can play through');
        setIsLoading(false);
      });

      player.on('error', (e: any) => {
        console.error('Video error:', e);
        console.error('Video URL:', videoUrl);
        console.error('Player error details:', player.error());
        
        // Try to reload the video source after error
        setTimeout(() => {
          console.log('Retrying video load after error');
          player.src(videoUrl);
        }, 2000);
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
    <div className={`video-container ${className}`} style={{ position: 'relative' }}>
      <div ref={videoRef} />
      
      {/* Loading overlay when video is stuck */}
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          zIndex: 10
        }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{
              width: '32px',
              height: '32px',
              border: '3px solid rgba(255,255,255,0.3)',
              borderTop: '3px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 12px'
            }}></div>
            <div style={{ fontSize: '14px' }}>Loading video...</div>
          </div>
        </div>
      )}
      <style>{`
        .video-js {
          border-radius: 8px !important;
          overflow: hidden !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
        }
        
        .video-js.vjs-paused .vjs-tech {
          filter: blur(20px) !important;
          transform: scale(1.1) !important;
          transition: all 0.3s ease !important;
        }
        
        .video-js.vjs-playing .vjs-tech {
          filter: none !important;
          transform: scale(1) !important;
          transition: all 0.3s ease !important;
        }
        
        .vjs-big-play-button {
          background-color: rgba(255, 255, 255, 0.95) !important;
          border: none !important;
          border-radius: 50% !important;
          transition: all 0.2s ease !important;
          font-size: 3em !important;
          width: 2.2em !important;
          height: 2.2em !important;
          line-height: 2.2em !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
        }
        
        .vjs-big-play-button .vjs-icon-play {
          color: #000 !important;
        }
        
        .vjs-big-play-button:hover {
          background-color: rgba(255, 255, 255, 1) !important;
          transform: scale(1.05) !important;
        }
        
        .vjs-control-bar {
          background: rgba(0, 0, 0, 0.4) !important;
          backdrop-filter: blur(10px) !important;
          height: 3em !important;
        }
        
        .vjs-play-progress {
          background: rgba(255, 255, 255, 0.9) !important;
        }
        
        .vjs-load-progress {
          background: rgba(255, 255, 255, 0.2) !important;
        }
        
        .vjs-progress-control {
          height: 0.3em !important;
        }
        
        /* Hide unwanted controls */
        .vjs-fullscreen-control,
        .vjs-picture-in-picture-control,
        .vjs-playback-rates {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;