type BadgeVariant = "primary" | "success" | "warning" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--color-rp-accent-soft)",
      color: "var(--color-rp-accent)",
      borderColor: "var(--color-rp-border)",
    },
    success: {
      backgroundColor: "var(--color-rp-accent-soft)",
      color: "var(--color-rp-accent)",
      borderColor: "var(--color-rp-border)",
    },
    warning: {
      backgroundColor: "#fef9c3",
      color: "#ca8a04",
      borderColor: "#fef08a",
    },
    neutral: {
      backgroundColor: "var(--color-rp-bg-soft)",
      color: "var(--color-rp-text-muted)",
      borderColor: "var(--color-rp-border)",
    },
  };

  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-0.5",
        "text-xs font-medium rounded-full border",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
