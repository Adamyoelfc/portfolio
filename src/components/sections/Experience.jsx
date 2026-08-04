import { Section, SectionHeader } from '../layout';
import { Tag } from '../ui';

const responsibilities = [
  'Own architecture, development, and production support for systems used across multiple consumer brands.',
  'Build APIs, background services, and commerce workflows with Rails/Spree, Node.js, ColdFusion, PostgreSQL, SQL Server, and Docker.',
  'Connect SAP Business One with marketplaces, EDI providers, shipping carriers, tax services, inventory, and order-management workflows.',
  'Investigate incidents, review code, troubleshoot performance, and coordinate resolutions with internal teams and external vendors.',
];

const stack = [
  'Ruby on Rails',
  'Spree Commerce',
  'React',
  'Node.js',
  'PostgreSQL',
  'SQL Server',
  'Docker',
  'SAP Business One',
  'EDI/X12',
];

export function Experience() {
  return (
    <Section id="experience" className="border-y border-border/60 bg-bg-secondary/30 px-4 sm:px-6">
      <SectionHeader subtitle="Professional Experience" title="Production ownership, end to end" />

      <article className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 sm:p-8 lg:p-10">
        <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent-primary/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1.5fr] lg:gap-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
              Current role · Tampa, Florida
            </p>
            <h3 className="text-2xl font-bold text-text-primary sm:text-3xl">Software Engineer</h3>
            <p className="mt-2 text-lg text-text-secondary">Daniels Corporation</p>
            <p className="mt-5 max-w-sm leading-relaxed text-text-muted">
              Technology for a privately held, multi-brand retail and e-commerce group serving Laifen USA,
              Delphi Glass, Diamond Tech Crafts, and Jupiter Bike.
            </p>
          </div>

          <div>
            <ul className="space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-text-secondary">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((item) => (
                <Tag key={item} variant="outline">{item}</Tag>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
