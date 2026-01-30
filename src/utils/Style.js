import classes from '../components/Header/Header.module.css';

// Main header style - CRT Green Gradient with Playfair Display
export const hiThereStyle = `text-gradient-crt font-display font-black md:text-8xl lg:text-9xl text-7xl ${classes.headerText}`;

// Section header style - smaller version for section titles
export const sectionHeaderStyle = `text-gradient-crt font-display font-bold text-4xl md:text-5xl lg:text-6xl`;

// Monospace accent text - for technical/code-like elements
export const monoAccentStyle = `font-mono text-crt-accent text-sm tracking-wider`;

// Body text style
export const bodyTextStyle = `font-body text-crt-text-secondary text-lg`;

// Muted text style
export const mutedTextStyle = `font-body text-crt-text-muted text-sm`;

// Card title style
export const cardTitleStyle = `font-display font-bold text-crt-text-primary text-xl`;

// Link style with phosphor glow
export const linkStyle = `link-crt font-mono text-sm`;
