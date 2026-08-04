import imgShirt from '../assets/shirtCustomizer.png';
import imgGiftSwap from '../assets/giftswap.svg';
import vitalWelcome from '../assets/vitalcoach/welcome.png';
import vitalToday from '../assets/vitalcoach/today.png';
import vitalSchedule from '../assets/vitalcoach/schedule.png';
import vitalWorkout from '../assets/vitalcoach/workout.png';
import vitalComplete from '../assets/vitalcoach/complete.png';

export const projects = [
  {
    id: 1,
    title: 'VitalCoach',
    description: 'A native, offline-first fitness coach that turns goals, availability, and recovery signals into personalized workouts. It combines AI planning, workout tracking, scheduling, reminders, and Apple Health integration in one mobile experience.',
    image: vitalWelcome,
    gallery: [vitalWelcome, vitalToday, vitalSchedule, vitalWorkout, vitalComplete],
    technologies: ['React Native', 'Expo 54', 'TypeScript', 'SQLite + Drizzle', 'Claude API', 'HealthKit'],
    liveUrl: null,
    githubUrl: null,
    isLive: false,
    type: 'Native app',
    sourceNote: 'Private source · Product walkthrough available on request.',
    featured: true,
  },
  {
    id: 2,
    title: 'GiftSwap Mobile',
    description: 'A cross-platform gift-exchange app with events, wishlists, friends, real-time chat, notifications, deep links, and a companion Express/PostgreSQL API.',
    image: imgGiftSwap,
    technologies: ['React Native', 'Expo 54', 'TypeScript', 'Express', 'PostgreSQL', 'Socket.IO'],
    liveUrl: null,
    githubUrl: null,
    isLive: false,
    type: 'Native app',
    sourceNote: 'Private source · Architecture details available on request.',
  },
  {
    id: 3,
    title: 'Shirt Customizer',
    description: 'An interactive 3D product customizer with real-time color controls, uploaded artwork placement, and AI-assisted image generation.',
    image: imgShirt,
    technologies: ['React', 'Tailwind', 'Node/Express', 'OpenAI API', 'Three.js'],
    liveUrl: 'https://shirtcustomizer.adamdev.me/',
    githubUrl: 'https://github.com/Adamyoelfc/shirt_customizer',
    isLive: true,
    type: 'Web app',
  },
];
