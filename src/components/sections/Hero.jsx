import { useEffect, useRef, useState } from 'react';
import { Container } from '../layout';
import { Button } from '../ui';
import { socialLinks } from '../../data';
import { gsap } from '../../hooks';
import MyPhoto from '../../assets/MyPhoto.png';

function TypewriterText({ texts, className = '' }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[3px] h-[1em] bg-accent-primary ml-1 animate-blink align-middle" />
    </span>
  );
}

function SocialIcon({ type }) {
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    telegram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  };
  return icons[type] || null;
}

export function Hero() {
  const roles = ['Full Stack Developer', 'React Specialist', 'Problem Solver'];
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        )
        .fromTo(
          '.hero-typewriter',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.2'
        )
        .fromTo(
          '.hero-social',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.05 },
          '-=0.2'
        )
        .fromTo(
          '.hero-photo',
          { opacity: 0, scale: 0.8, rotation: -5 },
          { opacity: 1, scale: 1, rotation: 0, duration: 1 },
          '-=1'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3'
        );

      // Floating animation for photo
      gsap.to('.hero-photo-inner', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary opacity-50" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(57, 255, 20, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(57, 255, 20, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge - Currently unavailable */}
            {/* <div className="hero-badge mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-bg-tertiary border border-border-hover text-text-secondary   font-mono text-xs sm:text-sm cursor-not-allowed">
                <span className="w-2 h-2 rounded-full bg-text-secondary" />
                Available for work
              </span>
            </div> */}

            {/* Title */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary mb-3 sm:mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Adam</span>
            </h1>

            {/* Typewriter */}
            <div className="hero-typewriter h-10 sm:h-12 md:h-14 mb-4 sm:mb-6">
              <TypewriterText
                texts={roles}
                className="text-xl sm:text-2xl md:text-3xl font-display text-text-secondary"
              />
            </div>

            {/* Description */}
            <p className="hero-description text-base sm:text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              Passionate about creating innovative web solutions with clean code
              and intuitive user experiences. Specialized in React, Vue.js, Django, and
              enterprise integrations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <Button href="#contact" variant="primary" size="lg" className="hero-cta w-full sm:w-auto">
                Get in Touch
              </Button>
              <Button href="#projects" variant="secondary" size="lg" className="hero-cta w-full sm:w-auto">
                View Projects
              </Button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social p-2.5 sm:p-3 rounded-lg text-text-muted hover:text-accent-primary hover:bg-accent-dim transition-all"
                  aria-label={link.label}
                >
                  <SocialIcon type={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div ref={photoRef} className="hero-photo order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <div className="hero-photo-inner relative">
              {/* Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-accent-primary/20 rounded-full blur-3xl animate-glow-pulse" />

              {/* Photo container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-accent-primary/30">
                <img
                  src={MyPhoto}
                  alt="Adam Fernandez"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
              </div>

              {/* Rings */}
              <div className="absolute -inset-2 border border-accent-primary/20 rounded-full" />
              <div className="absolute -inset-4 border border-accent-primary/10 rounded-full hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-text-muted text-xs font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent-primary rounded-full animate-bounce" />
          </div>
        </div>
      </Container>
    </section>
  );
}
