
import React from 'react';
import { cn } from '@/lib/utils';

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const BlogCategoryFilter = ({ categories, activeCategory, onChange }: BlogCategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-4 py-2 rounded-pill text-caption transition-all duration-300",
            activeCategory === category
              ? "bg-gradient-primary text-white shadow-glow"
              : "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white"
          )}
        >
          {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default BlogCategoryFilter;
