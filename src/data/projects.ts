import type { Project } from "@/types";

/**
 * Projects shown on the Projects page.
 * TODO: these are placeholders. Replace them with your real or planned projects.
 */
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Örnek Proje 1",
    description: "Bu kart örnek bir projeyi anlatır. Kendi projenizin kısa açıklamasını buraya yazın.",
    tags: ["Web", "Kurumsal"],
    status: "planned",
  },
  {
    id: "project-2",
    title: "Örnek Proje 2",
    description: "Hayata geçirmek istediğiniz bir fikri ya da devam eden bir çalışmayı burada paylaşın.",
    tags: ["Mobil"],
    status: "in-progress",
  },
  {
    id: "project-3",
    title: "Örnek Proje 3",
    description: "Tamamladığınız projeleri de bu listeye ekleyebilirsiniz.",
    tags: ["Otomasyon"],
    status: "completed",
  },
];
