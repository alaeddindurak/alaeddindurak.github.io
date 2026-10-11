import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

/** Home page block: university and training programmes, newest first. */
export function Education() {
  return (
    <section aria-labelledby="education-title" className="pb-20">
      <Container>
        <SectionHeading id="education-title" title="Eğitim ve Gelişim" />
        <ul className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <li key={item.id}>
              <Card className="h-full">
                <span className="bg-brand-soft text-brand flex h-12 w-12 items-center justify-center rounded-full">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-navy mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-brand mt-1 text-sm font-medium">{item.institution}</p>
                <p className="text-muted mt-1 text-sm">{item.period}</p>
                {item.note ? <p className="text-muted mt-3 text-sm leading-relaxed">{item.note}</p> : null}
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
