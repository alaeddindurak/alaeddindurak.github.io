import type { SiteConfig } from "@/types";

/**
 * Personal information shown across the site.
 * This is the main file to edit when your details change.
 * Visitor-facing text is Turkish on purpose; code and comments stay English.
 */
export const siteConfig: SiteConfig = {
  name: "Alaeddin Durak",

  // Job title shown under the name in the hero section.
  headline: "E-Dönüşüm Satış Uzmanı",

  description: "Alaeddin Durak'ın kişisel portfolyo sitesi: projeler, sosyal medya ve iletişim.",

  // Profile photo (file lives in /public). Portrait 3:4 photos fit the frame best.
  photo: "/profile.png",

  // Biography shown in the "Hakkımda" card. Each array item renders as one paragraph.
  bio: [
    "Saha satış deneyimimle, müşteri ihtiyacına göre ürünü etkili şekilde konumlandırarak satışa dönüştürüyorum.",
    "Satış süreçlerinde aktif rol alarak müşteri kazanımı ve iş geliştirme alanlarında yetkinliğimi geliştirmeye odaklanıyorum.",
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
