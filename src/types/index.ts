/** Shared TypeScript types used by the content files in `src/data`. */

/** One entry of the main navigation. */
export interface NavItem {
  label: string;
  href: string;
}

/** Social networks that have an icon in `SocialIcon`. */
export type SocialPlatform = "instagram" | "linkedin";

/** A link to one of the owner's social profiles. */
export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Visible handle or short description, e.g. "@alaeddindurak". */
  handle: string;
  url: string;
}

/** Contact details shown on the contact page. */
export interface ContactInfo {
  /** Phone number as it should be displayed. */
  phone: string;
  /** Phone number in international form for the `tel:` link, e.g. "+905551234567". */
  phoneHref: string;
  email: string;
}

/** Lifecycle state of a project card. */
export type ProjectStatus = "planned" | "in-progress" | "completed";

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Short category labels shown as badges. */
  tags: string[];
  status: ProjectStatus;
}

/** Global site configuration. */
export interface SiteConfig {
  name: string;
  /** Job title / one-line introduction shown in the hero. */
  headline: string;
  /** Page <title> default and meta description. */
  description: string;
  /** Short biography shown in the About section. */
  bio: string[];
  contact: ContactInfo;
  social: SocialLink[];
  copyrightYear: number;
}
