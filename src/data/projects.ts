import type { Project } from "@/types";

/**
 * Work areas shown on the "Çalışmalarım" page (route: /projects).
 * Compiled from the experience items in the owner's CV.
 * Add a `status` ("planned" | "in-progress" | "completed") to show a status badge on a card.
 */
export const projects: Project[] = [
  {
    id: "field-analysis",
    title: "Saha Analizi ve Proje Geliştirme",
    description: "Sahayı analiz ederek fırsatları belirliyor, bu doğrultuda satışa yönelik projeler geliştiriyorum.",
    tags: ["Saha", "Analiz"],
  },
  {
    id: "customer-needs",
    title: "Müşteri İhtiyaç Analizi",
    description: "Müşterilerin istek ve ihtiyaçlarını analiz ederek onlara en uygun çözümü sunuyorum.",
    tags: ["Müşteri", "Analiz"],
  },
  {
    id: "customer-relations",
    title: "Müşteri İlişkileri Yönetimi",
    description: "Müşterilerle sürdürülebilir ve güvene dayalı ilişkiler kurup bu ilişkileri yönetiyorum.",
    tags: ["Müşteri", "İlişki Yönetimi"],
  },
  {
    id: "field-reporting",
    title: "Saha Çıktılarını Raporlama",
    description: "Saha çalışmalarının çıktılarını özetleyip raporlayarak karar süreçlerine katkı sağlıyorum.",
    tags: ["Raporlama"],
  },
  {
    id: "customer-portfolio",
    title: "Müşteri Portföyü Oluşturma",
    description: "Yeni müşteriler kazanarak güçlü ve sürdürülebilir bir müşteri portföyü oluşturuyorum.",
    tags: ["Satış", "İş Geliştirme"],
  },
];
