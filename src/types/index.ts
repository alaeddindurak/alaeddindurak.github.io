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
  /** Optional. Phone number as it should be displayed; leave out to keep it private. */
  phone?: string;
  /** Optional. Phone number in international form for the `tel:` link, e.g. "+905551234567". */
  phoneHref?: string;
  email: string;
  /**
   * Public access key of the form service (Web3Forms). It only allows sending messages
   * to the owner's inbox, so it is safe to keep in the code. Leave empty to hide the form.
   */
  formAccessKey: string;
}

/** Lifecycle state of a project card. */
export type ProjectStatus = "planned" | "in-progress" | "completed";

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Short category labels shown as badges. */
  tags: string[];
  /** Optional: cards without a status simply show no badge. */
  status?: ProjectStatus;
}

/** Icons available for skill cards (mapped to lucide icons in `Skills.tsx`). */
export type SkillIcon = "search" | "users" | "file-text" | "trending-up";

/** One skill / area of expertise card on the home page. */
export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: SkillIcon;
}

/** One position in the experience timeline. */
export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  /** Human-readable period, e.g. "Eylül 2026 – Günümüz". */
  period: string;
  /** Marks the current position (shows a "Güncel" badge). */
  isCurrent?: boolean;
  /** Optional one-sentence summary of the role. */
  description?: string;
  /** Optional bullet list of responsibilities or achievements. */
  highlights?: string[];
}

/** One school or training programme. */
export interface EducationItem {
  id: string;
  institution: string;
  title: string;
  period: string;
  /** Optional extra line, e.g. the content of a short programme. */
  note?: string;
}

/** A named group of competencies shown as badges (skills, tools, languages). */
export interface CompetencyGroup {
  id: string;
  title: string;
  items: string[];
}

/** Global site configuration. */
export interface SiteConfig {
  name: string;
  /** Job title / one-line introduction shown in the hero. */
  headline: string;
  /** Short keywords shown as badges under the headline. */
  tags: string[];
  /** Page <title> default and meta description. */
  description: string;
  /** Path of the profile photo inside `public/`, e.g. "/profile.png". */
  photo: string;
  /** Short biography shown in the About section. */
  bio: string[];
  contact: ContactInfo;
  social: SocialLink[];
  copyrightYear: number;
}
