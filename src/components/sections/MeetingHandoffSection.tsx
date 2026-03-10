import React, { useState } from 'react';

const emails = [
  { src: '/emails/meeting-priya-vp-ops.png', alt: 'Meeting Booked — Priya Rajagopal, VP Ops' },
  { src: '/emails/meeting-dominic-vp-eng.png', alt: 'Meeting Booked — Dominic Fournier, VP Eng' },
  { src: '/emails/meeting-katelyn-partnerships.png', alt: 'Meeting Booked — Katelyn Morse, Head of Partnerships' },
];

const MeetingHandoffSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goLeft = () => setActiveIndex((prev) => (prev - 1 + 3) % 3);
  const goRight = () => setActiveIndex((prev) => (prev + 1) % 3);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .email-fan-container {
            position: relative;
            width: 100%;
            max-width: 640px;
            margin: 0 auto;
            perspective: 1200px;
          }

          .email-fan-stack {
            position: relative;
            width: 100%;
            cursor: pointer;
          }

          .email-fan-card {
            position: absolute;
            top: 0;
            left: 50%;
            width: 92%;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3);
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            transform-origin: bottom center;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .email-fan-card img {
            width: 100%;
            height: auto;
            display: block;
          }

          /* Back card (left) */
          .email-fan-card[data-position="back-left"] {
            transform: translateX(-58%) rotate(-6deg) scale(0.88);
            z-index: 1;
            filter: brightness(0.82);
          }

          /* Back card (right) */
          .email-fan-card[data-position="back-right"] {
            transform: translateX(-42%) rotate(6deg) scale(0.88);
            z-index: 1;
            filter: brightness(0.82);
          }

          /* Front card (active) */
          .email-fan-card[data-position="front"] {
            transform: translateX(-50%) rotate(0deg) scale(1);
            z-index: 3;
            filter: brightness(1);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4);
          }

          .email-fan-card[data-position="front"]:hover {
            transform: translateX(-50%) rotate(0deg) scale(1.02);
            box-shadow: 0 36px 90px rgba(0, 0, 0, 0.65), 0 10px 28px rgba(0, 0, 0, 0.45);
          }

          .email-fan-card[data-position="back-left"]:hover,
          .email-fan-card[data-position="back-right"]:hover {
            filter: brightness(0.9);
            z-index: 2;
          }

          /* Arrow buttons */
          .email-fan-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.15);
            background: rgba(10, 10, 10, 0.8);
            backdrop-filter: blur(8px);
            color: rgba(255, 255, 255, 0.7);
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            padding: 0;
          }

          .email-fan-arrow:hover {
            background: rgba(30, 30, 30, 0.9);
            border-color: rgba(94, 234, 212, 0.35);
            color: rgba(94, 234, 212, 0.9);
          }

          .email-fan-arrow-left {
            left: -52px;
          }

          .email-fan-arrow-right {
            right: -52px;
          }

          /* Navigation dots */
          .email-fan-dots {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 24px;
          }

          .email-fan-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            padding: 0;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .email-fan-dot.active {
            background: rgba(94, 234, 212, 0.7);
            box-shadow: 0 0 10px rgba(94, 234, 212, 0.3);
          }

          .email-fan-dot:hover:not(.active) {
            background: rgba(255, 255, 255, 0.4);
          }

          @media (max-width: 768px) {
            .email-fan-container {
              max-width: 100%;
              padding: 0 16px;
            }

            .email-fan-card {
              width: 88%;
              border-radius: 8px;
            }

            .email-fan-card[data-position="back-left"] {
              transform: translateX(-56%) rotate(-4deg) scale(0.9);
            }

            .email-fan-card[data-position="back-right"] {
              transform: translateX(-44%) rotate(4deg) scale(0.9);
            }

            .email-fan-arrow-left {
              left: -8px;
            }

            .email-fan-arrow-right {
              right: -8px;
            }

            .email-fan-arrow {
              width: 36px;
              height: 36px;
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .email-fan-card {
              width: 94%;
            }

            .email-fan-card[data-position="back-left"] {
              transform: translateX(-54%) rotate(-3deg) scale(0.92);
            }

            .email-fan-card[data-position="back-right"] {
              transform: translateX(-46%) rotate(3deg) scale(0.92);
            }

            .email-fan-arrow-left {
              left: -4px;
            }

            .email-fan-arrow-right {
              right: -4px;
            }

            .email-fan-arrow {
              width: 32px;
              height: 32px;
              font-size: 14px;
            }
          }
        `
      }} />

      <section style={{
        background: '#0a0a0a',
        padding: 'clamp(32px, 5vw, 48px) 0 clamp(56px, 9vw, 88px)',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)' }}>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 'clamp(22px, 3.2vw, 32px)',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            color: 'rgba(239, 246, 255, 0.92)',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto clamp(28px, 5vw, 40px)'
          }}>
            Your AE walks into every call knowing what most reps learn by the third meeting.
          </h2>

          {/* Fanned Stack */}
          <div className="email-fan-container">
            {/* Left arrow */}
            <button
              className="email-fan-arrow email-fan-arrow-left"
              onClick={goLeft}
              aria-label="Previous email"
              style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
            >
              ‹
            </button>

            {/* Right arrow */}
            <button
              className="email-fan-arrow email-fan-arrow-right"
              onClick={goRight}
              aria-label="Next email"
              style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
            >
              ›
            </button>

            <div
              className="email-fan-stack"
              style={{
                paddingBottom: '95%',
              }}
            >
              {emails.map((email, index) => {
                let position: string;
                if (index === activeIndex) {
                  position = 'front';
                } else if (index === (activeIndex + 1) % 3) {
                  position = 'back-right';
                } else {
                  position = 'back-left';
                }

                return (
                  <div
                    key={index}
                    className="email-fan-card"
                    data-position={position}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={email.src}
                      alt={email.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div className="email-fan-dots">
              {emails.map((_, index) => (
                <button
                  key={index}
                  className={`email-fan-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View email ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetingHandoffSection;
