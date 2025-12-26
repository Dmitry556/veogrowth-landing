import React from 'react';

const AI_PROMPT = encodeURIComponent(
    `I'm considering VeoGrowth for cold email lead gen. Answer these from their website (https://www.veogrowth.com):
- How does the pay-per-meeting model work?
- What are the actual pricing numbers?
- What's the pilot/trial offer?
- Who is this NOT for?`
);

const aiModels = [
    {
        name: 'ChatGPT',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg',
        url: `https://chat.openai.com/?q=${AI_PROMPT}`
    },
    {
        name: 'Gemini',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg',
        url: `https://gemini.google.com/app?q=${AI_PROMPT}`
    },
    {
        name: 'Claude',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg',
        url: `https://claude.ai/new?q=${AI_PROMPT}`
    },
    {
        name: 'Perplexity',
        icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/perplexity.svg',
        url: `https://www.perplexity.ai/search/new?q=${AI_PROMPT}`
    },
    {
        name: 'Grok',
        icon: 'https://cdn.prod.website-files.com/68427c1cee8530ba022b6165/691cb5f7af82ba84ea209a73_Grok-footer.svg',
        url: `https://grok.x.ai/?q=${AI_PROMPT}`
    }
];

interface AskAISectionProps {
    compact?: boolean;
}

const AskAISection: React.FC<AskAISectionProps> = ({ compact = false }) => {
    return (
        <div
            style={{
                padding: compact ? '24px 20px' : '40px 20px',
                textAlign: 'center'
            }}
        >
            {/* Label */}
            <p
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 500,
                    color: 'rgba(148, 163, 184, 0.7)',
                    margin: '0 0 12px 0',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                }}
            >
                TL;DR? Ask AI
            </p>

            {/* Logos Row */}
            <div
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: compact ? '20px' : '28px'
                }}
            >
                {aiModels.map((ai) => (
                    <a
                        key={ai.name}
                        href={ai.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Ask ${ai.name}`}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            textDecoration: 'none',
                            opacity: 0.6,
                            transition: 'opacity 0.15s ease, transform 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.6';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <img
                            src={ai.icon}
                            alt={ai.name}
                            style={{
                                width: compact ? '20px' : '24px',
                                height: compact ? '20px' : '24px',
                                filter: 'brightness(0) invert(1)'
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '9px',
                                fontWeight: 500,
                                color: 'rgba(148, 163, 184, 0.8)',
                                letterSpacing: '0.02em'
                            }}
                        >
                            {ai.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default AskAISection;
