import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Project, ProjectStatus } from "@/types";

/** Visitor-facing label for each project status. */
const statusLabels: Record<ProjectStatus, string> = {
  planned: "Planlanıyor",
  "in-progress": "Devam Ediyor",
  completed: "Tamamlandı",
};

interface ProjectCardProps {
  project: Project;
}

/** One project: title, description, category tags and a status badge. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-navy text-lg font-semibold">{project.title}</h3>
        <Badge tone="brand" className="shrink-0">
          {statusLabels[project.status]}
        </Badge>
      </div>
      <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Kategoriler">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
