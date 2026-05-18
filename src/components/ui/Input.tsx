import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className = "", ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium"
            style={{ color: "var(--color-rp-text-strong)" }}
          >
            {label}
            {props.required && (
              <span className="text-red-600 ml-1" aria-label="campo requerido">
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={[
            "w-full px-4 py-2.5 rounded-lg border",
            "transition-colors duration-150",
            "min-h-[44px]",
            "outline-none focus:ring-2",
            "disabled:opacity-60 disabled:cursor-not-allowed",
            error
              ? "border-red-400 focus:ring-red-400 focus:border-red-400"
              : "focus:ring-[var(--color-rp-accent)] focus:border-[var(--color-rp-accent)]",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            backgroundColor: "var(--color-rp-bg-elevated)",
            color: "var(--color-rp-text)",
            borderColor: error ? undefined : "var(--color-rp-border)",
          }}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error
              ? `${inputId}-error`
              : hint
                ? `${inputId}-hint`
                : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-xs text-red-600 flex items-center gap-1"
            role="alert"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 0a6 6 0 100 12A6 6 0 006 0zm0 9a.75.75 0 110-1.5A.75.75 0 016 9zm.75-3.75a.75.75 0 01-1.5 0v-2.5a.75.75 0 011.5 0v2.5z" />
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p
            id={`${inputId}-hint`}
            className="text-xs"
            style={{ color: "var(--color-rp-text-subtle)" }}
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
