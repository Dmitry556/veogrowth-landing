
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, onClick, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-pill focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-background cursor-pointer';
    
    const variantClasses = {
      primary: 'bg-gradient-primary hover:shadow-glow active:scale-[0.98] text-white',
      secondary: 'bg-gradient-secondary hover:shadow-glow active:scale-[0.98] text-white',
      outline: 'bg-transparent border border-white/20 hover:border-white/40 text-white',
      text: 'bg-transparent text-white hover:text-blue-400',
    };
    
    const sizeClasses = {
      sm: 'text-caption px-4 py-2',
      default: 'text-caption px-6 py-3',
      lg: 'text-body px-8 py-4',
    };
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick();
      }
      
      // Handle any default onClick behavior from props
      if (props.onClick) {
        props.onClick(e);
      }
    };
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
        {variant === 'primary' && (
          <span className="absolute inset-0 rounded-pill overflow-hidden">
            <span className="absolute inset-0 rounded-pill bg-gradient-primary opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[length:200%_200%] animate-gradient-shift"></span>
          </span>
        )}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
