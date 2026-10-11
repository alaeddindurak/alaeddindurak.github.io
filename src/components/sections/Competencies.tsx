import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { competencies } from "@/data/competencies";

/** Home page block: skills, tools and languages as badge groups. */
export function Competencies() {
  return (
    <section aria-labelledby="competencies-title" className="pb-24">
      <Container>
        <SectionHeading id="competencies-title" title="Yetkinlikler ve Araçlar" />
        <div className="grid gap-6 md:grid-cols-3">
          {competencies.map((group) => (
            <Card key={group.id}>
              <h3 className="text-navy text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
