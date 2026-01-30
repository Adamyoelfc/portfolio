import { useEffect, useRef } from 'react';
import { Section, SectionHeader } from '../layout';
import { Card, CardContent, Button, Tag } from '../ui';
import { projects } from '../../data';
import { gsap, ScrollTrigger } from '../../hooks';

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  // Determine the link to use
  const projectLink = project.isLive && project.liveUrl ? project.liveUrl : project.githubUrl;

  return (
    <div ref={cardRef} className="project-card">
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
          {project.isLive && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent-primary/20 border border-accent-primary/30 text-accent-primary text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                Live
              </span>
            </div>
          )}

          {/* Hover overlay with button */}
          <div className="absolute inset-0 bg-bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <Button
              href={projectLink}
              external
              variant="primary"
              size="md"
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              {project.isLive ? 'View Live' : 'View Code'}
            </Button>
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
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate project cards on scroll
      gsap.fromTo(
        '.project-card',
        {
          opacity: 0,
          y: 60,
          rotateX: -10,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax effect on scroll
      gsap.to('.project-card', {
        y: (i) => i % 2 === 0 ? -20 : 20,
        ease: 'none',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef} id="projects" className="px-4 sm:px-6">
      <SectionHeader
        subtitle="Featured Work"
        title="Projects"
      />

      {/* Projects grid */}
      <div
        ref={gridRef}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        style={{ perspective: '1000px' }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
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
