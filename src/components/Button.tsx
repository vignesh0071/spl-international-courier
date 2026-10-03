import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap font-heading font-bold transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "h-[38px] px-3 sm:px-4 text-[12px] sm:text-[13px] rounded-[4px] gap-1.5 sm:gap-2 tracking-wide uppercase",
    md: "h-[48px] px-2.5 min-[360px]:px-4 sm:px-6 text-[11px] min-[360px]:text-[12.5px] sm:text-[14px] rounded-[4px] gap-1.5 sm:gap-2 tracking-[0.04em] min-[360px]:tracking-[0.08em] uppercase",
    lg: "h-[50px] sm:h-[54px] px-4 sm:px-7 text-[13px] sm:text-[15px] rounded-[4px] gap-2 sm:gap-3 tracking-[0.06em] sm:tracking-wider uppercase",
  };

  const variantStyles = {
    primary:
      "bg-spl-yellow text-spl-navy-deep hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-spl-navy-deep shadow-xs",
    secondary:
      "bg-spl-offwhite text-spl-navy-deep border border-spl-navy-deep hover:bg-white hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-spl-navy-deep",
    outline:
      "bg-transparent text-spl-navy-deep border border-spl-border hover:bg-white hover:border-spl-navy-deep active:bg-slate-100",
    navy:
      "bg-spl-navy-deep text-white hover:bg-spl-navy-secondary hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-spl-yellow shadow-xs",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0 inline-flex items-center transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0 inline-flex items-center transition-transform group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
