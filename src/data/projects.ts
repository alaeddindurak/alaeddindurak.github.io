import type { Project } from "@/types";

/**
 * Work shown on the "Çalışmalarım" page (route: /projects). Source: the owner's CV.
 * Add a `status` ("planned" | "in-progress" | "completed") to show a status badge on a card.
 */
export const projects: Project[] = [
  {
    id: "partner-channels",
    title: "İş Ortağı Kanalı Kurgulama",
    description: "Yeni iş ortağı kanalları kurgulayarak sürdürülebilir ve ölçeklenebilir satış döngüleri oluşturdum.",
    tags: ["Satış", "Kanal Geliştirme"],
  },
  {
    id: "accountant-segment",
    title: "Mali Müşavir Segmenti İş Modeli",
    description:
      "Mali Müşavir segmentine yönelik stratejik bir iş modeli tasarladım ve fizibilite süreçlerini yürüttüm.",
    tags: ["Strateji", "Fizibilite"],
  },
  {
    id: "institutional-network",
    title: "Kurumsal İş Birliği Ağları",
    description: "Ticaret ve meslek odaları nezdinde üst düzey temaslar kurarak kurumsal iş birliği ağları inşa ettim.",
    tags: ["İş Birliği", "İş Geliştirme"],
  },
  {
    id: "field-feedback",
    title: "Saha Geri Bildirimiyle Ürün İyileştirme",
    description: "Saha geri bildirimlerini analiz ederek ürün geliştirme süreçlerine iyileştirme önerileri sundum.",
    tags: ["Analiz", "Raporlama"],
  },
  {
    id: "customer-portfolio",
    title: "Müşteri Portföyü Oluşturma",
    description:
      "Sahayı analiz ederek müşteri ihtiyaçlarını belirledim, ilişkileri yönettim ve müşteri portföyü oluşturdum.",
    tags: ["Müşteri", "Saha"],
  },
];
