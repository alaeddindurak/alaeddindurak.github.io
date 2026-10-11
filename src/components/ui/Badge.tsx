import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "neutral" | "brand";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  /** "brand" highlights the badge with the primary color. */
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-slate-100 text-muted",
  brand: "bg-brand-soft text-brand-dark",
};

/** Small pill used for project tags and status labels. */
export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
