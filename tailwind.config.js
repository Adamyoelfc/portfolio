/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0D0F0A',
          secondary: '#151812',
          tertiary: '#1C1F17',
          card: '#12140E',
        },
        text: {
          primary: '#E8F0E0',
          secondary: '#A3B090',
          muted: '#5C6652',
        },
        accent: {
          primary: '#39FF14',
          secondary: '#7FFF00',
          gold: '#C4A000',
          dim: 'rgba(57, 255, 20, 0.1)',
        },
        border: {
          DEFAULT: '#2A2F22',
          hover: '#39FF14',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'mono-sm': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'container': 'clamp(1rem, 5vw, 3rem)',
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '720px',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(57, 255, 20, 0.15)',
        'glow-strong': '0 0 30px rgba(57, 255, 20, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'grain': 'grain 0.5s steps(10) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(57, 255, 20, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(57, 255, 20, 0.3)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '70%': { transform: 'translate(8%, 10%)' },
          '90%': { transform: 'translate(-3%, 8%)' },
        },
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
