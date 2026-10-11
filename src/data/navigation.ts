import type { NavItem } from "@/types";

/** Main navigation, used by both the header and the mobile menu. */
export const navigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Çalışmalarım", href: "/projects" },
  { label: "Sosyal Medya", href: "/social" },
  { label: "İletişim", href: "/contact" },
];
