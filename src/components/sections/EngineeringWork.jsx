import { Section, SectionHeader } from '../layout';

const caseStudies = [
  {
    number: '01',
    title: 'Multi-brand commerce platform',
    description: 'Operate storefront and back-office capabilities across distinct brands while keeping catalog, inventory, checkout, tax, shipping, and order flows dependable.',
    flow: ['Storefronts', 'Commerce core', 'ERP & fulfillment'],
    technologies: 'Rails / Spree · React · PostgreSQL · APIs',
  },
  {
    number: '02',
    title: 'Enterprise order integration pipeline',
    description: 'Move orders and operational data between marketplaces, national retail channels, EDI networks, and SAP Business One with validation and recoverable processing.',
    flow: ['Retail channels', 'Validation & jobs', 'SAP Business One'],
    technologies: 'EDI/X12 · Mirakl · CommerceHub · Node.js',
  },
  {
    number: '03',
    title: 'Production reliability & automation',
    description: 'Replace manual operational steps with scheduled workflows, monitor production behavior, and use logs and database diagnostics to investigate incidents at the root cause.',
    flow: ['Signals', 'Diagnosis', 'Reliable automation'],
    technologies: 'New Relic · Docker · SQL · Background jobs',
  },
];

export function EngineeringWork() {
  return (
    <Section id="work" className="px-4 sm:px-6">
      <SectionHeader
        subtitle="Selected Engineering Work"
        title="Systems behind the storefront"
      />

      <p className="-mt-6 mb-10 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
        Sanitized case studies from professional work. Architecture is intentionally simplified and proprietary
        source code remains private.
      </p>

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.number} className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:border-accent-primary/40 sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-sm text-accent-primary">CASE / {study.number}</span>
              <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">Private</span>
            </div>

            <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">{study.title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-text-secondary">{study.description}</p>

            <div className="my-6 space-y-2 rounded-xl border border-border/70 bg-bg-primary/60 p-4">
              {study.flow.map((step, index) => (
                <div key={step} className="flex items-center gap-3 font-mono text-xs text-text-secondary">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-accent-primary/30 text-accent-primary">{index + 1}</span>
                  <span>{step}</span>
                  {index < study.flow.length - 1 && <span aria-hidden="true" className="ml-auto text-text-muted">↓</span>}
                </div>
              ))}
            </div>

            <p className="font-mono text-xs leading-relaxed text-text-muted">{study.technologies}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
