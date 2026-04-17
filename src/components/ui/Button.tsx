import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#4CAF50] text-white hover:bg-[#2E7D32] active:bg-[#1B5E20] shadow-sm hover:shadow-md",
  secondary:
    "bg-[#2E7D32] text-white hover:bg-[#1B5E20] active:bg-[#1B5E20] shadow-sm hover:shadow-md",
  outline:
    "border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#dcfce7] active:bg-[#bbf7d0]",
  ghost:
    "text-[#4CAF50] hover:bg-[#dcfce7] active:bg-[#bbf7d0]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      fullWidth = false,
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled ?? isLoading}
        aria-disabled={disabled ?? isLoading}
        className={[
          "inline-flex items-center justify-center gap-2",
          "font-semibold rounded-lg",
          "transition-all duration-200 ease-in-out",
          "focus-visible:outline-3 focus-visible:outline-[#4CAF50] focus-visible:outline-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "min-h-[44px]",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? "w-full" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Procesando...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
