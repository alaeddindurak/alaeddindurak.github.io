import type { SocialPlatform } from "@/types";

interface SocialIconProps {
  platform: SocialPlatform;
  className?: string;
}

/**
 * Simple line icons for the social networks we link to.
 * They are drawn inline because the icon library does not ship brand logos.
 * The icons are decorative: the surrounding link carries the accessible label.
 */
export function SocialIcon({ platform, className = "h-5 w-5" }: SocialIconProps) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (platform === "instagram") {
    return (
      <svg {...shared}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
