import type { EducationItem } from "@/types";

/** Education and training, newest first. Source: the owner's CV. */
export const education: EducationItem[] = [
  {
    id: "digital-marketing",
    institution: "Ahmet Balat Akademi",
    title: "Dijital Pazarlama Eğitimi",
    period: "Mayıs 2025",
    note: "11 saatlik temel seviyede dijital pazarlama eğitimi.",
  },
  {
    id: "yetkin-genclar",
    institution: "Yetkin Gençler Eğitim Programı",
    title: "21. Yüzyıl İş Dünyası Yetkinlikleri",
    period: "Ağustos 2023 · 3 ay",
    note: "21. yüzyıl iş dünyası yetkinliklerini geliştiren ve farkındalığı artıran 3 aylık eğitim.",
  },
  {
    id: "university",
    institution: "İzmir Demokrasi Üniversitesi",
    title: "İktisat, İktisadi ve İdari Bilimler Fakültesi",
    period: "2019 – 2023",
  },
];
