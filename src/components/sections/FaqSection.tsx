import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

type FaqContent =
  | { type: 'paragraph'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'ordered-list'; items: string[] };

type FaqItem = {
  question: string;
  answer: FaqContent[];
};

type FaqSectionData = {
  title: string;
  items: FaqItem[];
};

const faqSections: FaqSectionData[] = [
  {
    title: 'About The Pilot',
    items: [
      {
        question: 'What exactly is included in the free pilot?',
        answer: [
          {
            type: 'paragraph',
            content:
              `We build a target list of 1,000-3,000 qualified prospects, set up the infrastructure, write and launch cold email campaigns, handle all replies, and book the first 2 meetings on your calendar. You pay nothing. There's no contract, no commitment, no hidden setup fees.`
          }
        ]
      },
      {
        question: 'How long does the pilot take?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Typically 3-14 business days from our scoping call to your first booked meeting. Some markets move faster, some slower. We'll give you realistic timelines based on your specific situation.`
          }
        ]
      },
      {
        question: 'What do you need from me to get started?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Mainly context: who you're targeting, what you're selling, your current messaging, and your ICP. After our scoping call, we'll build the strategy and show you the exact list and emails before we send anything. You'll review, give feedback, and greenlight it.`
          }
        ]
      },
      {
        question: 'How much of my time does this require?',
        answer: [
          {
            type: 'paragraph',
            content:
              `30-minute scoping call upfront. 5-10 minutes to review the campaign strategy doc. Then just showing up to the meetings we book. That's it.`
          }
        ]
      },
      {
        question: "What if the pilot doesn't work?",
        answer: [
          {
            type: 'paragraph',
            content:
              `You paid nothing, so you're out zero dollars. We'll tell you honestly why it didn't work (wrong market, offer needs work, TAM too small, etc.) and whether it makes sense to try a different approach or if cold email just isn't the right channel for you.`
          }
        ]
      }
    ]
  },
  {
    title: 'About Pricing & Payment',
    items: [
      {
        question: 'How much do you charge per meeting after the pilot?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Between $200-$600 per qualified meeting, depending on your deal size and customer LTV. <strong>The price is fixed once we set it.</strong>`
          },
          {
            type: 'paragraph',
            content:
              `Here's how we think about pricing: we're only valuable if we're a profitable acquisition channel for you long-term. So we work backwards from your unit economics.`
          },
          {
            type: 'paragraph',
            content:
              `If your average customer LTV is $50K and you close 20% of qualified meetings, each meeting is worth ~$10K to you. Paying us $400 per meeting means your CAC is $2,000 per customer - a 25:1 LTV:CAC ratio. That's a profitable channel you can scale.`
          },
          {
            type: 'paragraph',
            content:
              `We price to fit inside your economics, not based on our effort or how "complex" your market is.`
          },
          {
            type: 'paragraph',
            content:
              `On the scoping call, we'll look at your ACV, typical sales cycle, and close rates to arrive at a per-meeting price that makes this a channel you'd want to scale, not barely tolerate.`
          },
          {
            type: 'paragraph',
            content: `No variable billing or surprises month to month.`
          }
        ]
      },
      {
        question: 'Are there any other fees? Setup, monthly, platform fees?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Yes, there's a one-time setup fee to cover the data costs, infrastructure setup, and campaign development work.`
          },
          {
            type: 'paragraph',
            content: `This covers:`
          },
          {
            type: 'list',
            items: [
              'Building your full TAM list from multiple data sources',
              'Setting up sending infrastructure and mailboxes',
              'Creating the campaign strategy and email copy',
              'All the upfront work before the first email goes out'
            ]
          },
          {
            type: 'paragraph',
            content:
              `After that: no monthly retainers, no platform fees, no contracts. Just pay-per-meeting.`
          },
          {
            type: 'paragraph',
            content:
              `The setup fee is determined during the scoping call based on your TAM size and complexity. We'll give you the exact number before you commit to anything. The estimate is that it's between $1-2K.`
          }
        ]
      },
      {
        question: 'How does billing work?',
        answer: [
          {
            type: 'paragraph',
            content:
              `First 5 paid meetings (after the 2 free pilot meetings): we bill you after each qualified meeting shows up. This builds trust - you see the meeting quality before paying for the next one.`
          },
          {
            type: 'paragraph',
            content:
              `After that, we switch to prepaid meeting packages. You buy credits upfront (like a 5-meeting or 15-meeting package), and we deduct one credit each time a qualified meeting shows up.`
          },
          {
            type: 'paragraph',
            content:
              `Why prepaid? It's simpler operationally for both sides and lets us focus on booking meetings instead of invoicing every few days. You're not prepaying for "effort" or "campaigns" - you're prepaying for meetings, and credits only get used when meetings actually happen.`
          },
          {
            type: 'paragraph',
            content:
              `Credits don't expire on a calendar date - they expire as qualified meetings show up. If you buy a 5-meeting package, those 5 credits last until 5 qualified meetings happen, whether that takes 2 months or 6 months.`
          }
        ]
      },
      {
        question: "What if the meetings don't convert to customers?",
        answer: [
          {
            type: 'paragraph',
            content:
              `You still pay for the meeting if it was qualified (showed up, matches ICP, has the problem, has authority/budget). We book meetings. Your team closes them. If meetings consistently aren't converting, that's usually a sign of a deeper problem with the offer, pricing, or sales process - not the quality of the meeting.`
          }
        ]
      },
      {
        question: 'Do you offer refunds if a meeting turns out to be unqualified?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Yes. If someone shows up but clearly doesn't match your ICP (wrong company size, wrong role, no budget/authority), we don't count it. We'll define "qualified" together before we start so there's no confusion.`
          }
        ]
      }
    ]
  },
  {
    title: 'About The Process',
    items: [
      {
        question: 'Do I need to provide my own email domains or infrastructure?',
        answer: [
          {
            type: 'paragraph',
            content:
              `No. We use our own proprietary Microsoft 365 infrastructure. You don't need to worry about domains, mailboxes, warmup, or deliverability. We handle all of that.`
          }
        ]
      },
      {
        question: "Will this hurt my main domain's deliverability?",
        answer: [
          {
            type: 'paragraph',
            content:
              `No. We never send from your main company domain. We use completely separate sending infrastructure that has zero impact on your primary domain reputation.`
          }
        ]
      },
      {
        question: 'Do you integrate with my CRM?',
        answer: [
          {
            type: 'paragraph',
            content:
              `We can sync meeting data to your CRM if you want (works with HubSpot, Salesforce, Pipedrive, etc.). But it's not required. At minimum, meetings just get booked directly on your calendar with context in the invite.`
          }
        ]
      },
      {
        question: 'Who handles the replies?',
        answer: [
          {
            type: 'paragraph',
            content:
              `We do. When someone replies positively, we handle the conversation: answering questions, addressing objections, suggesting times, confirming the meeting. You only get involved once it's a confirmed meeting on your calendar.`
          }
        ]
      },
      {
        question: 'What if someone replies and wants to talk immediately?',
        answer: [
          {
            type: 'paragraph',
            content:
              `We coordinate with you. If someone's in-market and ready to talk now, we'll get you a time slot ASAP. Most of the time though, we're scheduling 1-2 weeks out.`
          }
        ]
      }
    ]
  },
  {
    title: 'About Quality & Results',
    items: [
      {
        question: 'What exactly counts as a "qualified meeting"?',
        answer: [
          {
            type: 'paragraph',
            content: `We'll define this together before the pilot starts, but generally:`
          },
          {
            type: 'list',
            items: [
              'They showed up to the scheduled call',
              'They match your ICP (company size, industry, role)',
              'They have the problem you solve',
              'They have budget/authority to make a buying decision'
            ]
          }
        ]
      },
      {
        question: 'What if the meeting quality is low?',
        answer: [
          {
            type: 'paragraph',
            content:
              `If meetings are consistently low quality, something's wrong with the targeting or qualification. We'll fix it. Either we tighten the ICP filters, adjust the messaging, or we tell you honestly that cold email might not be the right fit for your market.`
          }
        ]
      },
      {
        question: "What's your typical meeting-to-customer conversion rate?",
        answer: [
          {
            type: 'paragraph',
            content:
              `This varies wildly by product, sales cycle, and deal size. We can't control your close rate. What we can tell you: if meetings are qualified and your sales process is solid, you should see similar conversion rates to other pipeline sources. If you're closing 20% of your inbound demos, expect similar from cold outbound meetings.`
          }
        ]
      },
      {
        question: 'How many meetings can you realistically book per month?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Depends entirely on your TAM size, offer strength, and market responsiveness. Smaller TAMs (10K-30K companies) might generate 5-15 meetings/month. Larger TAMs (50K+ companies) can generate 20-50+ meetings/month. We'll give you realistic projections based on your specific situation.`
          }
        ]
      }
    ]
  },
  {
    title: 'Comparison Questions',
    items: [
      {
        question: 'How is this different from hiring an SDR?',
        answer: [
          {
            type: 'paragraph',
            content:
              `An SDR costs $60K-$80K/year + benefits + management time, and they might book 10-20 meetings per month if they're good. With us, you pay zero until we book a meeting, then pay per meeting with no salary, no management overhead, no ramp time. Also: we bring the infrastructure, data sources, and expertise. An SDR needs all of that provided.`
          }
        ]
      },
      {
        question: 'How is this different from other cold email agencies?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Most agencies charge $5K-$15K/month retainer with 3-6 month minimums, whether they book meetings or not. We charge zero upfront and only get paid when we book qualified meetings. Also: most agencies stop at the reply. We handle reply management and book the actual meeting.`
          }
        ]
      },
      {
        question: 'Why not just use AI tools like Instantly or Smartlead myself?',
        answer: [
          {
            type: 'paragraph',
            content:
              `You can. But you'll need to: build your own TAM list, set up sending infrastructure, write the emails, monitor deliverability, handle replies, and book meetings. If you have the time and expertise, great. Most people don't, or they'd rather focus on closing deals than managing cold email operations.`
          }
        ]
      },
      {
        question: "What if I've tried cold email before and it didn't work?",
        answer: [
          {
            type: 'paragraph',
            content:
              'Most failed cold email attempts fail for one of three reasons:'
          },
          {
            type: 'ordered-list',
            items: [
              'Wrong offer (asking for demos instead of leading with value)',
              'Bad targeting (spray and pray vs qualified accounts)',
              'Infrastructure problems (landing in spam, burned domains)'
            ]
          },
          {
            type: 'paragraph',
            content:
              `On the scoping call, we'll diagnose what went wrong and whether it's fixable. Sometimes cold email genuinely isn't the right channel. We'll tell you if that's the case.`
          }
        ]
      }
    ]
  },
  {
    title: 'Market Fit Questions',
    items: [
      {
        question: 'My TAM is only 5,000-10,000 companies. Will this work?',
        answer: [
          {
            type: 'paragraph',
            content:
              `No. The unit economics don't support it.`
          },
          {
            type: 'paragraph',
            content:
              `Our model requires a large TAM (30,000+ reachable accounts minimum) to generate meetings consistently at scale. With 5K-10K companies, you'd burn through your entire market in a few months and have nowhere left to prospect.`
          },
          {
            type: 'paragraph',
            content:
              `For smaller TAMs, you need high-touch ABM, warm intros, events, or partnerships - not scaled cold email. We'll tell you on the scoping call if your market is too small.`
          }
        ]
      },
      {
        question: 'I sell to enterprise (Fortune 500). Can you do this?',
        answer: [
          {
            type: 'paragraph',
            content:
              `No. Enterprise cold email doesn't work at scale because the TAM is too small and sales cycles are too long. If your entire TAM is 500 companies, cold email isn't the right channel. You need warm intros, events, partnerships, and high-touch ABM.`
          }
        ]
      },
      {
        question: 'My product is technical/complex. Can cold email work?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Yes, if we lead with the right offer. Complex products need front-end offers that don't require the prospect to understand the full solution upfront. Instead of "let me demo our platform," we offer audits, insights, or specific deliverables that prove value before asking for time.`
          }
        ]
      },
      {
        question: "I'm in a regulated industry (finance, healthcare, etc.). Is this compliant?",
        answer: [
          {
            type: 'paragraph',
            content:
              `Yes. We follow CAN-SPAM, GDPR, and standard compliance practices. Every email includes clear unsubscribe links, accurate sender information, and we never purchase lists or contact people who've opted out. If you have specific compliance requirements, we'll work within them.`
          }
        ]
      },
      {
        question: 'Do you work with agencies/service businesses or only product companies?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Both. The model works for any B2B business with a large enough TAM and a clear value proposition. We've worked with SaaS companies, professional services, marketing agencies, and B2B service providers.`
          }
        ]
      }
    ]
  },
  {
    title: 'Risk & Commitment',
    items: [
      {
        question: 'Is there a contract or minimum commitment?',
        answer: [
          {
            type: 'paragraph',
            content: `No long-term contract. You can stop anytime after the pilot.`
          },
          {
            type: 'paragraph',
            content:
              'The only money at risk is the one-time setup fee and any unused prepaid meeting credits. No notice period, no termination fees.'
          }
        ]
      },
      {
        question: 'Who owns the data and lists you build?',
        answer: [
          {
            type: 'paragraph',
            content:
              `You do. If we build a 50,000-company TAM list for you, that's yours. If we part ways, you keep everything.`
          }
        ]
      },
      {
        question: 'Do you sign NDAs?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Yes, if needed. Most clients don't require it, but we're happy to sign standard NDAs before sharing any proprietary information about your product or business.`
          }
        ]
      },
      {
        question: 'What if my offer or positioning changes mid-campaign?',
        answer: [
          {
            type: 'paragraph',
            content:
              `We pause, rewrite the campaigns, and relaunch. Happens all the time. We'd rather do it right than keep sending emails for an outdated offer.`
          }
        ]
      },
      {
        question: 'Can I see examples of emails before you send them?',
        answer: [
          {
            type: 'paragraph',
            content:
              `Yes. During the pilot scoping process, you'll review the full campaign strategy including the exact email copy and personalized examples to real prospects. Nothing gets sent without your approval.`
          }
        ]
      }
    ]
  }
];

const FaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndexes(prev => (prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]));
  };

  let globalFaqIndex = -1;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .faq-card {
              transition: border-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease;
            }
            .faq-card:hover {
              border-color: rgba(94, 234, 212, 0.28);
              transform: translateY(-1px);
            }
            .faq-answer {
              display: grid;
              grid-template-rows: 0fr;
              opacity: 0;
              transition: grid-template-rows 0.16s ease, opacity 0.16s ease;
              overflow: hidden;
              will-change: grid-template-rows, opacity;
            }
            .faq-answer.open {
              grid-template-rows: 1fr;
              opacity: 1;
            }
            .faq-answer__content {
              overflow: hidden;
              padding: 0 clamp(18px, 5.6vw, 32px);
              transition: padding 0.16s ease;
            }
            .faq-answer.open .faq-answer__content {
              padding: 18px clamp(18px, 5.6vw, 32px) 24px;
            }
          `
        }}
      />
      <section
        id="faq"
        style={{
          background: 'linear-gradient(180deg, #04080d 0%, #050b11 48%, #061015 100%)',
          padding: 'clamp(48px, 9vw, 72px) 0 clamp(72px, 12vw, 120px)',
          borderTop: '1px solid rgba(45, 212, 191, 0.06)',
          borderBottom: '1px solid rgba(45, 212, 191, 0.08)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 6vw, 40px)' }}>
          <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto clamp(40px, 10vw, 72px)' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(15, 23, 42, 0.52)',
                border: '1px solid rgba(45, 212, 191, 0.28)',
                borderRadius: '999px',
                padding: '10px 22px',
                marginBottom: '44px',
                fontSize: '12px',
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: 'rgba(209, 250, 229, 0.85)',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase'
              }}
            >
              Common Questions
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: 'clamp(32px, 6vw, 54px)',
                fontWeight: '400',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                marginBottom: '20px',
                color: 'rgba(239, 246, 255, 0.96)'
              }}
            >
              Frequently Asked Questions
            </h2>

            {/* TL;DR Ask AI Row */}
            <div style={{ marginBottom: '36px' }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgba(226, 232, 240, 0.9)',
                  margin: '0 0 16px 0',
                  letterSpacing: '0.04em',
                  textShadow: '0 0 12px rgba(255, 255, 255, 0.1)'
                }}
              >
                TL;DR? Let AI summarize for you
              </p>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '32px'
                }}
              >
                {[
                  { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg', getUrl: (p: string) => `https://chatgpt.com/?prompt=${p}` },
                  { name: 'Gemini', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg', getUrl: (p: string) => `https://www.google.com/search?udm=50&aep=11&q=${p}` },
                  { name: 'Claude', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/claude.svg', getUrl: (p: string) => `https://claude.ai/new?q=${p}` },
                  { name: 'Perplexity', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/perplexity.svg', getUrl: (p: string) => `https://www.perplexity.ai/search/new?q=${p}` },
                  { name: 'Grok', icon: 'https://cdn.prod.website-files.com/68427c1cee8530ba022b6165/691cb5f7af82ba84ea209a73_Grok-footer.svg', getUrl: (p: string) => `https://grok.com/?q=${p}` }
                ].map((ai) => (
                  <a
                    key={ai.name}
                    href={ai.getUrl(encodeURIComponent("I'm considering VeoGrowth for cold email lead gen. Answer these from their website (https://www.veogrowth.com):\n- How does the pay-per-meeting model work?\n- What are the actual pricing numbers?\n- What's the pilot/trial offer?\n- Who is this NOT for?"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ask ${ai.name}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      opacity: 0.85,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.filter = 'none';
                    }}
                  >
                    <img
                      src={ai.icon}
                      alt={ai.name}
                      style={{
                        width: '32px',
                        height: '32px',
                        filter: ai.name === 'Grok' ? 'none' : 'brightness(0) invert(1)'
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '11px',
                        fontWeight: 500,
                        color: '#ffffff',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {ai.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3.6vw, 22px)' }}>
              {faqSections.map((section) => (
                <React.Fragment key={section.title}>
                  <div style={{ margin: '20px 0 4px' }}>
                    <h3
                      style={{
                        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                        fontSize: 'clamp(18px, 3.6vw, 22px)',
                        fontWeight: 600,
                        letterSpacing: '-0.012em',
                        color: '#f8fafc',
                        textTransform: 'none',
                        margin: 0
                      }}
                    >
                      {section.title}
                    </h3>
                    <div
                      style={{
                        marginTop: '6px',
                        width: '48px',
                        height: '2px',
                        background: 'linear-gradient(90deg, rgba(94, 234, 212, 0.9), transparent)'
                      }}
                    />
                  </div>

                  {section.items.map((faq) => {
                    globalFaqIndex += 1;
                    const currentIndex = globalFaqIndex;
                    const isOpen = openIndexes.includes(currentIndex);

                    return (
                      <div
                        key={faq.question}
                        className={`faq-card ${isOpen ? 'open' : ''}`}
                        style={{
                          background: 'linear-gradient(135deg, rgba(11, 21, 28, 0.88) 0%, rgba(6, 18, 24, 0.86) 100%)',
                          border: isOpen ? '1px solid rgba(94, 234, 212, 0.24)' : '1px solid rgba(45, 212, 191, 0.12)',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: isOpen ? '0 18px 36px rgba(2, 8, 12, 0.42)' : '0 8px 24px rgba(2, 8, 12, 0.3)'
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(currentIndex)}
                          style={{
                            width: '100%',
                            padding: 'clamp(14px, 4.2vw, 20px) clamp(14px, 4.2vw, 24px)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'transform 0.18s ease'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                              fontSize: 'clamp(19px, 5vw, 22px)',
                              fontWeight: 600,
                              color: '#ffffff',
                              letterSpacing: '-0.012em',
                              flex: '1',
                              marginRight: '24px',
                              WebkitFontSmoothing: 'antialiased'
                            }}
                          >
                            {faq.question}
                          </span>
                          <div
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              background: 'rgba(94, 234, 212, 0.16)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 6px 14px rgba(2, 40, 36, 0.35)'
                            }}
                          >
                            {isOpen ? (
                              <Minus style={{ width: '12px', height: '12px', color: '#f8fafc' }} />
                            ) : (
                              <Plus style={{ width: '12px', height: '12px', color: '#f8fafc' }} />
                            )}
                          </div>
                        </button>

                        <div
                          className={`faq-answer ${isOpen ? 'open' : ''}`}
                          style={{
                            borderTop: '1px solid rgba(45, 212, 191, 0.12)',
                            marginTop: '-1px'
                          }}
                        >
                          <div
                            className="faq-answer__content"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '16px'
                            }}
                          >
                            {faq.answer.map((entry, lineIndex) => {
                              if (entry.type === 'paragraph') {
                                return (
                                  <p
                                    key={lineIndex}
                                    style={{
                                      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                                      fontSize: 'clamp(17px, 4.8vw, 20px)',
                                      color: '#fbfdff',
                                      lineHeight: 1.75,
                                      margin: 0,
                                      letterSpacing: '-0.006em',
                                      WebkitFontSmoothing: 'antialiased'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: entry.content }}
                                  />
                                );
                              }

                              if (entry.type === 'list') {
                                return (
                                  <ul
                                    key={lineIndex}
                                    style={{
                                      margin: 0,
                                      paddingLeft: '20px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '10px'
                                    }}
                                  >
                                    {entry.items.map((item, bulletIndex) => (
                                      <li
                                        key={bulletIndex}
                                        style={{
                                          fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                                          fontSize: 'clamp(17px, 4.8vw, 20px)',
                                          color: '#fbfdff',
                                          lineHeight: 1.75,
                                          letterSpacing: '-0.006em',
                                          WebkitFontSmoothing: 'antialiased'
                                        }}
                                      >
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                );
                              }

                              return (
                                <ol
                                  key={lineIndex}
                                  style={{
                                    margin: 0,
                                    paddingLeft: '24px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                  }}
                                >
                                  {entry.items.map((item, bulletIndex) => (
                                    <li
                                      key={bulletIndex}
                                      style={{
                                        fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                                        fontSize: 'clamp(17px, 4.8vw, 20px)',
                                        color: '#fbfdff',
                                        lineHeight: 1.75,
                                        letterSpacing: '-0.006em',
                                        WebkitFontSmoothing: 'antialiased'
                                      }}
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ol>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>

            <div
              style={{
                marginTop: 'clamp(28px, 6vw, 44px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'center'
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: 'clamp(17px, 4.6vw, 20px)',
                  color: '#fbfdff',
                  margin: 0,
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                Book a scoping call and we'll answer everything specific to your business.
              </p>
              <button
                type="button"
                onClick={() => window.open('https://calendly.com/veogrowth/discovery', '_blank')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: '1px solid rgba(94, 234, 212, 0.35)',
                  background: 'transparent',
                  color: '#e6f8f3',
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontSize: 'clamp(14px, 3.2vw, 17px)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 0 0 rgba(6, 95, 70, 0)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease',
                  width: 'fit-content',
                  maxWidth: '320px'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.transform = 'translateY(-1px)';
                  target.style.boxShadow = '0 10px 24px rgba(6, 95, 70, 0.25)';
                  target.style.background = 'linear-gradient(135deg, rgba(15, 118, 110, 0.18), rgba(13, 148, 136, 0.18))';
                  target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 0 0 rgba(6, 95, 70, 0)';
                  target.style.background = 'transparent';
                  target.style.color = '#e6f8f3';
                }}
              >
                <span style={{ letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Book Pilot Scoping Call
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    background: 'none',
                    color: 'currentColor',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
