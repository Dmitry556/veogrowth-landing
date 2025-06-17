
import React from 'react';
import { cn } from '@/lib/utils';

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const BlogCategoryFilter = ({ categories, activeCategory, onChange }: BlogCategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:-translate-y-0.5",
            activeCategory === category
              ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25"
              : "bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white border border-gray-700/40 hover:border-gray-600/60"
          )}
        >
          {category === 'all' ? 'All Categories' : category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategoryFilter;
