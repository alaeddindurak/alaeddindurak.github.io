import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { cn } from "@/lib/cn";

/** Home page block: vertical timeline of positions, newest first. */
export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="pb-20">
      <Container>
        <SectionHeading id="experience-title" title="Deneyim" />
        {/* The vertical line is the left border of the list; each dot sits on top of it. */}
        <ol className="border-line ml-2 border-s">
          {experience.map((item) => (
            <li key={item.id} className="relative ps-8 pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className={cn(
                  "border-surface absolute -start-2.25 top-1.5 h-4 w-4 rounded-full border-4",
                  item.isCurrent ? "bg-brand" : "bg-muted",
                )}
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-navy text-lg font-semibold">{item.role}</h3>
                {item.isCurrent ? <Badge tone="brand">Güncel</Badge> : null}
              </div>
              <p className="text-brand mt-1 font-medium">{item.company}</p>
              <p className="text-muted mt-1 text-sm">{item.period}</p>
              {item.description ? (
                <p className="text-muted mt-3 max-w-2xl leading-relaxed">{item.description}</p>
              ) : null}
              {item.highlights ? (
                <ul className="text-muted marker:text-brand mt-3 max-w-2xl list-disc space-y-1.5 ps-5 leading-relaxed">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
