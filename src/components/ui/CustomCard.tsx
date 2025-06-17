
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm';
    
    const variantClasses = {
      default: 'bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1',
      glass: 'glass-card',
      gradient: 'gradient-border bg-card/40 shadow-card hover:shadow-card-hover hover:-translate-y-1',
    };
    
    return (
      <div
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = 'CustomCard';

export default CustomCard;
