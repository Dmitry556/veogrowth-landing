
import React from 'react';
import { Link } from 'react-router-dom';
import CustomCard from '../ui/CustomCard';
import { ArrowRight } from 'lucide-react';

const RelatedContent = () => {
  // Sample related content - in a real scenario, these would likely come from a CMS or API
  const relatedItems = [
    {
      title: "How AI is Transforming the SDR Function in 2025",
      description: "An analysis of AI tools that are changing how SDRs qualify leads and book meetings.",
      url: "/blog",
      imageUrl: "",
    },
    {
      title: "The Most Effective SDR Compensation Models",
      description: "Discover which compensation structures drive the best SDR performance and retention.",
      url: "/blog",
      imageUrl: "",
    },
    {
      title: "SDR to AE Career Path: Optimizing the Transition",
      description: "Best practices for developing your SDRs into successful Account Executives.",
      url: "/blog",
      imageUrl: "",
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-h3 font-bold mb-8">Related Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedItems.map((item, index) => (
          <CustomCard key={index} variant="glass" className="flex flex-col h-full">
            <div className="rounded-lg overflow-hidden mb-4 aspect-[16/9]">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-white/70 mb-4">{item.description}</p>
            <Link 
              to={item.url} 
              className="mt-auto inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read article <ArrowRight size={16} className="ml-1" />
            </Link>
          </CustomCard>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;
