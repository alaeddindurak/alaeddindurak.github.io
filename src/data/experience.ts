import type { ExperienceItem } from "@/types";

/**
 * Experience timeline, newest first. Source: the owner's CV.
 * Periods are free text, so they can be edited without touching the components.
 */
export const experience: ExperienceItem[] = [
  {
    id: "uyumsoft",
    company: "Uyumsoft",
    role: "E-Dönüşüm Satış Uzmanı",
    period: "Eylül 2026 – Günümüz",
    isCurrent: true,
    description:
      "E-dönüşüm çözümlerinde müşteri ihtiyacına uygun ürünü konumlandırarak satış süreçlerinde aktif rol alıyorum.",
  },
  {
    id: "logo-ext",
    company: "Logo Yazılım Ext (BCC İletişim)",
    role: "Saha Satış Yöneticisi",
    period: "Eylül 2025 – Eylül 2026",
    highlights: [
      "Yeni iş ortağı kanalları kurgulayarak sürdürülebilir ve ölçeklenebilir satış döngüleri oluşturdum.",
      "Mali Müşavir segmentine yönelik stratejik iş modeli tasarladım ve projenin fizibilite süreçlerini yürüttüm.",
      "Ticaret ve meslek odaları nezdinde üst düzey temaslar kurarak kurumsal iş birliği ağları inşa ettim.",
      "Saha geri bildirimlerini analiz ederek ürün geliştirme süreçlerine iyileştirme önerileri sundum.",
    ],
  },
  {
    id: "logo-assistant",
    company: "Logo Yazılım",
    role: "Saha Müşteri Kazanımı Uzman Yardımcısı",
    period: "Ağustos 2024 · 6 ay",
    highlights: [
      "Sahayı analiz ederek projeler geliştirdim.",
      "Müşteri istek ve ihtiyaçlarını analiz ettim.",
      "Müşteri ilişkilerini yönettim.",
      "Saha çıktılarını özetleyip raporladım.",
      "Müşteri portföyü oluşturdum.",
    ],
  },
  {
    id: "matech",
    company: "Matech Makina",
    role: "Genel Muhasebe Stajyeri",
    period: "Haziran 2022 · 3 ay",
    highlights: [
      "Logo Netsis ile fiş ve fatura işlemlerini yaptım.",
      "Firmalarla iletişime geçerek beyannameleri aldım.",
    ],
  },
];
