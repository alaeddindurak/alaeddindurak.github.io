import type { Skill } from "@/types";

/** Skill cards on the home page. Compiled from the experience items in the owner's CV. */
export const skills: Skill[] = [
  {
    id: "field-sales",
    title: "Saha Satış ve Müşteri Kazanımı",
    description: "Sahayı analiz ediyor, müşteri ihtiyacına uygun ürünü konumlandırarak satışa dönüştürüyorum.",
    icon: "search",
  },
  {
    id: "partner-channels",
    title: "İş Ortağı Kanalı Geliştirme",
    description:
      "Yeni iş ortağı kanalları kurgulayarak sürdürülebilir ve ölçeklenebilir satış döngüleri oluşturuyorum.",
    icon: "users",
  },
  {
    id: "business-model",
    title: "Stratejik İş Modeli ve Fizibilite",
    description: "Segmentlere yönelik iş modelleri tasarlıyor, fizibilite süreçlerini yürütüyorum.",
    icon: "trending-up",
  },
  {
    id: "reporting",
    title: "Analiz ve Raporlama",
    description: "Saha geri bildirimlerini analiz edip raporlayarak ürün ve süreç iyileştirme önerileri sunuyorum.",
    icon: "file-text",
  },
];
