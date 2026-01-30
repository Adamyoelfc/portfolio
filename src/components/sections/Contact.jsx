import { useState, useCallback, useEffect, useRef } from 'react';
import { send } from 'emailjs-com';
import { Section, SectionHeader } from '../layout';
import { Input, Textarea, Button } from '../ui';
import { contactInfo } from '../../data';
import { gsap, ScrollTrigger } from '../../hooks';

gsap.registerPlugin(ScrollTrigger);

const initialFormState = {
  from_name: '',
  reply_to: '',
  message: '',
};

const initialErrors = {
  from_name: '',
  reply_to: '',
  message: '',
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(values) {
  const errors = { ...initialErrors };
  let isValid = true;

  if (!values.from_name.trim()) {
    errors.from_name = 'Name is required';
    isValid = false;
  }

  if (!values.reply_to.trim()) {
    errors.reply_to = 'Email is required';
    isValid = false;
  } else if (!validateEmail(values.reply_to)) {
    errors.reply_to = 'Invalid email format';
    isValid = false;
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
    isValid = false;
  }

  return { errors, isValid };
}

export function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle');
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate contact info
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate form
      gsap.fromTo(
        '.contact-form',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate form fields
      gsap.fromTo(
        '.form-field',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors: validationErrors, isValid } = validateForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');

    try {
      await send(
        'service_tfmuyp8',
        'template_npqqikg',
        formData,
        '9zlDeEXVKu6TiMTca'
      );
      setStatus('success');
      setFormData(initialFormState);
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Section ref={sectionRef} id="contact" className="bg-bg-secondary/30 px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left: Info */}
        <div className="contact-info">
          <SectionHeader
            subtitle="Get In Touch"
            title="Let's Work Together"
          />

          <p className="text-text-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          {/* Contact methods */}
          <div className="space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 sm:gap-4 text-text-secondary hover:text-accent-primary transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-dim border border-accent-primary/20 flex items-center justify-center group-hover:border-accent-primary/50 transition-colors shrink-0">
                <svg className="w-5 h-5 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-mono text-sm sm:text-base break-all">{contactInfo.email}</span>
            </a>

            <a
              href={`https://${contactInfo.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 text-text-secondary hover:text-accent-primary transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-dim border border-accent-primary/20 flex items-center justify-center group-hover:border-accent-primary/50 transition-colors shrink-0">
                <svg className="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <span className="font-mono text-sm sm:text-base">{contactInfo.telegram}</span>
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form bg-bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-5 sm:mb-6 pb-4 border-b border-border">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-primary/70" />
            <span className="ml-2 sm:ml-3 font-mono text-text-muted text-xs sm:text-sm">
              contact.sh
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="form-field">
              <Input
                label="name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your name"
                error={errors.from_name}
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-field">
              <Input
                label="email"
                name="reply_to"
                type="email"
                value={formData.reply_to}
                onChange={handleChange}
                placeholder="your@email.com"
                error={errors.reply_to}
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-field">
              <Textarea
                label="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                error={errors.message}
                disabled={status === 'sending'}
              />
            </div>

            <div className="form-field">
              <Button
                type="submit"
                variant="terminal"
                size="lg"
                className="w-full"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  '$ send_message'
                )}
              </Button>
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <p className="text-accent-primary text-sm text-center animate-fade-in">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center animate-fade-in">
                × Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
