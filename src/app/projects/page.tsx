import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Çalışmalarım" };

/** Work page (route: /projects): a responsive grid of cards, one per work area. */
export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <SectionTitle title="Çalışmalarım" subtitle="Saha satış deneyimimde odaklandığım başlıca çalışma alanları." />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
