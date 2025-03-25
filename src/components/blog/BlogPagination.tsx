import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogPagination = ({ currentPage, totalPages, onPageChange }: BlogPaginationProps) => {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    
    if (totalPages <= 7) {
      // If less than 7 pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);
      
      // If current page is among the first 3, show first 5 pages then ellipsis
      if (currentPage <= 3) {
        for (let i = 2; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } 
      // If current page is among the last 3, show last 5 pages with ellipsis at start
      else if (currentPage >= totalPages - 2) {
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } 
      // Otherwise show current page with neighbors and ellipsis at both ends
      else {
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {/* Previous page button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
          currentPage === 1
            ? "opacity-50 cursor-not-allowed text-white/50"
            : "bg-white/5 hover:bg-white/10 text-white"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>
      
      {/* Page numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...' || page === currentPage}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
            page === currentPage
              ? "bg-gradient-primary text-white shadow-glow"
              : page === '...'
                ? "text-white/50 cursor-default"
                : "bg-white/5 hover:bg-white/10 text-white/80 hover:text-white"
          )}
        >
          {page}
        </button>
      ))}
      
      {/* Next page button */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed text-white/50"
            : "bg-white/5 hover:bg-white/10 text-white"
        )}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default BlogPagination;
