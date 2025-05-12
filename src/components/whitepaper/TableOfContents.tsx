
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    // Observe all section headings
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup observer
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="glass-card">
      <h4 className="font-semibold mb-4 text-lg">Table of Contents</h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li 
            key={item.id}
            className={cn(
              "border-l-2 pl-3 py-1.5 transition-colors cursor-pointer hover:text-white",
              item.id === activeId 
                ? "border-blue-500 text-white" 
                : "border-white/20 text-white/70"
            )}
            onClick={() => scrollToSection(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
