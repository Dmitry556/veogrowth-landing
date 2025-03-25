
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
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
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
    <nav className="text-sm">
      <h4 className="font-semibold mb-4">Table of Contents</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li 
            key={item.id}
            className={cn(
              "border-l-2 pl-3 py-1 transition-colors cursor-pointer hover:text-white",
              item.id === activeId 
                ? "border-primary text-white" 
                : "border-white/20 text-white/70"
            )}
            style={{ 
              paddingLeft: item.id.includes('-') ? '1.5rem' : '0.75rem' 
            }}
            onClick={() => scrollToSection(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
