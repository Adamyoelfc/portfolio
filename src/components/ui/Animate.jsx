import { useInView } from '../../hooks';

const animations = {
  fadeIn: 'opacity-0 animate-fade-in',
  slideUp: 'opacity-0 translate-y-8 animate-slide-up',
  slideRight: 'opacity-0 -translate-x-8 animate-slide-up',
  slideLeft: 'opacity-0 translate-x-8 animate-slide-up',
  scale: 'opacity-0 scale-95 animate-fade-in',
};

export function Animate({
  children,
  animation = 'slideUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
}) {
  const { ref, isInView } = useInView({ threshold, triggerOnce });

  const delayClass = delay > 0 ? `animate-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`
        ${isInView ? animations[animation] : 'opacity-0'}
        ${delayClass}
        ${className}
      `}
      style={delay > 0 && !delayClass ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function StaggerChildren({
  children,
  stagger = 100,
  animation = 'slideUp',
  className = '',
  threshold = 0.1,
}) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={`
                ${isInView ? animations[animation] : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * stagger}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
