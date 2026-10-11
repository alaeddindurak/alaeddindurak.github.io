import { Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/data/site";

/**
 * E-mail card (and a phone card when a phone number is set in `siteConfig.contact`).
 * Each card opens the matching app via mailto: / tel:.
 */
export function ContactCards() {
  const { phone, phoneHref, email } = siteConfig.contact;

  const items = [
    { label: "E-posta", value: email, href: `mailto:${email}`, Icon: Mail },
    // The phone number is optional and intentionally not published at the moment.
    ...(phone && phoneHref ? [{ label: "Telefon", value: phone, href: `tel:${phoneHref}`, Icon: Phone }] : []),
  ];

  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {items.map(({ label, value, href, Icon }) => (
        <li key={label}>
          <a href={href} className="group block h-full">
            <Card className="flex h-full items-center gap-4 transition-shadow group-hover:shadow-md">
              <span className="bg-brand-soft text-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="text-muted block text-sm">{label}</span>
                <span className="text-navy block font-semibold break-words">{value}</span>
              </span>
            </Card>
          </a>
        </li>
      ))}
    </ul>
  );
}
