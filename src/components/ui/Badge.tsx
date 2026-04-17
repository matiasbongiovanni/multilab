type BadgeVariant = "primary" | "success" | "warning" | "neutral";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-[#dcfce7] text-[#4CAF50] border-[#bbf7d0]",
  success: "bg-[#dcfce7] text-[#16a34a] border-[#bbf7d0]",
  warning: "bg-[#fef9c3] text-[#ca8a04] border-[#fef08a]",
  neutral: "bg-[#f1f5f9] text-[#64748b] border-[#e2e8f0]",
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-0.5",
        "text-xs font-medium rounded-full border",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
