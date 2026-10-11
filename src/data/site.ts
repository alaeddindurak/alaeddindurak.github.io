import type { SiteConfig } from "@/types";

/**
 * Personal information shown across the site.
 * This is the main file to edit when your details change.
 * Visitor-facing text is Turkish on purpose; code and comments stay English.
 */
export const siteConfig: SiteConfig = {
  name: "Alaeddin Durak",

  // TODO: replace with your real job title / one-line introduction.
  headline: "Kişisel Portfolyo",

  description: "Alaeddin Durak'ın kişisel portfolyo sitesi: projeler, sosyal medya ve iletişim.",

  // TODO: replace with your own biography. Each array item renders as one paragraph.
  bio: [
    "Merhaba, ben Alaeddin. Bu alana kendinizi tanıtan kısa ve öz bir özgeçmiş yazısı ekleyebilirsiniz.",
    "Deneyimlerinizi, ilgi alanlarınızı ve hedeflerinizi birkaç cümleyle anlatın.",
  ],

  contact: {
    phone: "0553 285 35 12",
    phoneHref: "+905532853512",
    email: "alaeddin.duraks@gmail.com",
  },

  social: [
    {
      platform: "instagram",
      label: "Instagram",
      handle: "@alaeddindurak",
      url: "https://www.instagram.com/alaeddindurak/",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      handle: "in/alaeddindurak",
      url: "https://www.linkedin.com/in/alaeddindurak/",
    },
  ],

  copyrightYear: 2026,
};
