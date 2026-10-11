import type { CompetencyGroup } from "@/types";

/** Skills, tools and languages shown as badges. Source: the owner's CV. */
export const competencies: CompetencyGroup[] = [
  {
    id: "skills",
    title: "Beceriler",
    items: ["İletişim ve Etkili Dinleme", "İkna Becerisi", "Takım Çalışması", "Problem Çözme", "Sunum Hazırlama"],
  },
  {
    id: "tools",
    title: "Araçlar",
    items: [
      "Excel (ileri)",
      "PowerPoint (ileri)",
      "Logo Bulut ERP (ileri)",
      "Word (orta)",
      "Netsis Muhasebe (orta)",
      "TechSmith Camtasia (orta)",
    ],
  },
  {
    id: "languages",
    title: "Diller",
    items: ["İngilizce (B2)"],
  },
];
