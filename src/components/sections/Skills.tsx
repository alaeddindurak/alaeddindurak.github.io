import { ArrowRight, FileText, Search, TrendingUp, Users, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import type { SkillIcon } from "@/types";

/** Maps the icon names used in `src/data/skills.ts` to the actual icon components. */
const icons: Record<SkillIcon, LucideIcon> = {
  search: Search,
  users: Users,
  "file-text": FileText,
  "trending-up": TrendingUp,
};

/** Home page block: short cards for the main areas of expertise. */
export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="pb-20">
      <Container>
        <SectionHeading id="skills-title" title="Uzmanlık Alanlarım" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = icons[skill.icon];
            return (
              <li key={skill.id}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <span className="bg-brand-soft text-brand flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-navy mt-4 text-lg font-semibold">{skill.title}</h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">{skill.description}</p>
                </Card>
              </li>
            );
          })}
        </ul>
        <Link
          href="/projects"
          className="text-brand hover:text-brand-dark mt-6 inline-flex items-center gap-2 text-sm font-semibold"
        >
          Tüm çalışmalarımı gör
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}
