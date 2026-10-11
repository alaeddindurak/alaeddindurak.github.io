import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/data/site";

/** One large link card per social profile (Instagram, LinkedIn). */
export function SocialLinks() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {siteConfig.social.map((link) => (
        <li key={link.platform}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <Card className="flex h-full items-center gap-4 transition-shadow group-hover:shadow-md">
              <span className="bg-brand-soft text-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                <SocialIcon platform={link.platform} className="h-6 w-6" />
              </span>
              <span className="flex-1">
                <span className="text-navy block font-semibold">{link.label}</span>
                <span className="text-muted block text-sm">{link.handle}</span>
              </span>
              <ArrowUpRight
                className="text-muted group-hover:text-brand h-5 w-5 transition-colors"
                aria-hidden="true"
              />
            </Card>
          </a>
        </li>
      ))}
    </ul>
  );
}
