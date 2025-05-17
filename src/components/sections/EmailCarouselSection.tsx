
import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomCard from '../ui/CustomCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-mobile';

interface EmailCardProps {
  subject: string;
  greeting?: string;
  body: string;
  sender: string;
  index: number;
}

const EmailCard: React.FC<EmailCardProps> = ({ subject, greeting, body, sender, index }) => {
  return (
    <CustomCard 
      variant="glass" 
      className="min-w-[300px] w-full h-full md:h-[300px] flex flex-col shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="border-b border-white/5 pb-4 mb-4">
          <div className="flex items-center mb-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <p className="text-blue-400 text-caption">
              <span className="font-medium">Re: </span>
              <span className="text-body font-medium">{subject}</span>
            </p>
          </div>
          {greeting && (
            <p className="text-caption text-white/80">{greeting}</p>
          )}
        </div>
        <div className="flex-grow mb-4">
          <p className="text-body text-white/90 whitespace-pre-line">{body}</p>
        </div>
        <div className="mt-auto pt-2 border-t border-white/5">
          <p className="text-caption text-white/60 italic">{sender}</p>
        </div>
      </div>
    </CustomCard>
  );
};

const EmailCarouselSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const emailResponses = [
    {
      subject: "Tech Stack",
      greeting: "Hi David,",
      body: "Interesting timing with this email. We're actually dealing with this exact problem right now.\n\nI'm open to hearing more. Free tomorrow after 2pm?",
      sender: "Founder, YC Batch"
    },
    {
      subject: "Production Efficiency",
      greeting: "Hey Michael,",
      body: "Your email caught my attention. We've been looking for a solution exactly like this for our assembly line monitoring.\n\nI've checked my calendar and can do a call Thursday at 10am ET.\n\nLet me know if that works.",
      sender: "VP Operations, Siemens"
    },
    {
      subject: "Growth Strategy",
      greeting: "Alex,",
      body: "Thanks for reaching out. \n\nOur current conversion is around 3.2% so your claim of 5%+ is interesting if true.\n\nLet me know when you can talk briefly.",
      sender: "Growth Lead, Square"
    },
    {
      subject: "Patient Insights",
      greeting: "Hi Jennifer,",
      body: "How did you know we're having issues with our reengagement sequence?\n\nAnyway, if you can actually solve this without violating HIPAA, I'm interested.",
      sender: "Marketing Director, Cleveland Clinic"
    },
    {
      subject: "Revenue Optimization",
      greeting: "Thomas,",
      body: "Great cold email BTW. \n\nWe're using Klaviyo now but results have been declining last 2 quarters. If you can actually deliver what you're claiming, we should talk.\n\nNext week?",
      sender: "Digital Marketing Manager, Wayfair"
    },
    {
      subject: "Quick Question",
      greeting: "Hey Sarah,",
      body: "Not looking for agencies right now, but your approach is interesting.\n\nHow much are we talking about cost-wise? We're pre-Series A so budget is tight.\n\nCan chat briefly Friday.",
      sender: "CEO"
    },
    {
      subject: "Enterprise Meetings",
      greeting: "Daniel,",
      body: "I'm curious to learn more but skeptical. We've tried 3 other solutions that all claimed the same thing.\n\nWhat makes yours different? Can you share some actual results?\n\nAvailable after 3pm tomorrow.",
      sender: "Business Development, McKinsey"
    },
    {
      subject: "Demo Pipeline",
      greeting: "",
      body: "Nice outreach. Rare to see a cold email that's actually relevant.\n\nWe're evaluating options for Q3. Current demo rate is about 8/week but we need 15+.\n\nSend me some info on pricing?",
      sender: "Head of Sales, Atlassian"
    },
    {
      subject: "Team Suggestion",
      greeting: "",
      body: "Thanks for the email. My colleague passed this along.\n\nWhat kind of results have you seen with companies in our industry?\n\nBrief intro call next week?",
      sender: "VP Marketing, Adobe"
    },
    {
      subject: "Data Integration",
      greeting: "Mark,",
      body: "Timing is perfect. We just discussed this exact issue in our quarterly planning meeting yesterday.\n\nI'd like to see a demo next week if possible. Tuesday afternoon works for me.",
      sender: "Director of Technology, Shopify"
    }
  ];

  // Different rendering for mobile vs desktop
  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-h2 font-bold tracking-tight mb-6">
            Real Responses to Cold Emails
          </h2>
          <p className="bg-gradient-primary bg-clip-text text-transparent text-body-large animate-gradient-shift">
            See how decision-makers respond to our personalized cold emails
          </p>
        </div>
        
        {isMobile ? (
          // Mobile vertical scroll layout
          <div className="space-y-4 px-2">
            {emailResponses.map((email, index) => (
              <div key={index} className="px-1">
                <EmailCard 
                  subject={email.subject}
                  greeting={email.greeting}
                  body={email.body}
                  sender={email.sender}
                  index={index}
                />
              </div>
            ))}
          </div>
        ) : (
          // Desktop carousel layout
          <div className="relative px-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {emailResponses.map((email, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1 h-full">
                      <EmailCard 
                        subject={email.subject}
                        greeting={email.greeting}
                        body={email.body}
                        sender={email.sender}
                        index={index}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-2 bg-black/50 border-white/10 hover:bg-black/70" />
              <CarouselNext className="hidden md:flex -right-2 bg-black/50 border-white/10 hover:bg-black/70" />
            </Carousel>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailCarouselSection;
