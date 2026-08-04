import { Section, SectionHeader } from '../layout';
import { Card, CardContent, Button, Tag } from '../ui';
import { projects } from '../../data';

function FeaturedProject({ project }) {
  return (
    <article className="mb-6 sm:mb-8 overflow-hidden rounded-2xl border border-accent-primary/25 bg-bg-card shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-primary">
            <span className="h-px w-8 bg-accent-primary" />
            Flagship native app
          </div>
          <h3 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} variant="outline" className="text-xs">
                {tech}
              </Tag>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs leading-relaxed text-text-muted">
            {project.sourceNote}
          </p>
        </div>

        <div className="relative min-w-0 border-t border-border bg-[#090b08] p-5 sm:p-7 lg:border-l lg:border-t-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,255,20,0.10),transparent_55%)]" />
          <div
            className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 sm:gap-4"
            aria-label="VitalCoach app screenshots"
          >
            {project.gallery.map((image, index) => (
              <figure
                key={image}
                className="w-[42%] min-w-[42%] snap-start sm:w-[31%] sm:min-w-[31%] lg:w-[34%] lg:min-w-[34%]"
              >
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-2xl">
                  <img
                    src={image}
                    alt={`${project.title} mobile screen ${index + 1}`}
                    className="aspect-[944/2048] w-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </figure>
            ))}
          </div>
          <p className="relative mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted sm:text-xs">
            Swipe to explore the product
          </p>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  const projectLink = project.isLive && project.liveUrl ? project.liveUrl : project.githubUrl;

  return (
    <div className="project-card">
      <Card className="h-full flex flex-col overflow-hidden group">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-60" />

          {/* Status badge */}
          {(project.isLive || project.type) && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-accent-primary text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                {project.isLive ? 'Live' : project.type}
              </span>
            </div>
          )}

          {/* Hover overlay with button */}
          <div className="absolute inset-0 bg-bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            {projectLink ? (
              <Button
                href={projectLink}
                external
                variant="primary"
                size="md"
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                {project.isLive ? 'View Live' : 'View Source'}
              </Button>
            ) : (
              <span className="max-w-[13rem] text-center font-mono text-xs leading-relaxed text-text-secondary">
                {project.sourceNote || 'Source code is private or unavailable.'}
              </span>
            )}
          </div>

          {/* Scanlines */}
          <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
        </div>

        {/* Content */}
        <CardContent className="flex-1 flex flex-col p-4 sm:p-6">
          <h3 className="text-text-primary font-display font-semibold text-lg sm:text-xl mb-2 group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Tag key={tech} variant="outline" className="text-xs">
                {tech}
              </Tag>
            ))}
            {project.technologies.length > 4 && (
              <Tag variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Tag>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" className="px-4 sm:px-6">
      <SectionHeader
        subtitle="Personal Projects"
        title="Selected builds"
      />

      {featuredProject && <FeaturedProject project={featuredProject} />}

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {supportingProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View more link */}
      <div className="mt-10 sm:mt-12 text-center">
        <Button
          href="https://github.com/Adamyoelfc"
          external
          variant="ghost"
          className="group"
        >
          <span>View more on GitHub</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </Section>
  );
}
