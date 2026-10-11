interface SectionTitleProps {
  title: string;
  /** Optional short text under the title. */
  subtitle?: string;
}

/** Page or section heading with a brand-colored accent bar. */
export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <h1 className="text-navy text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <div className="bg-brand mt-3 h-1 w-12 rounded-full" aria-hidden="true" />
      {subtitle ? <p className="text-muted mt-4 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
