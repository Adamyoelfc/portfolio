import imgShirt from '../assets/shirtCustomizer.png';
import imgXelvatic from '../assets/xelvatic.webp';
import imgAware from '../assets/aware.png';
import imgFood from '../assets/foodOrder.png';
import imgMemory from '../assets/MemoryGame.png';

export const projects = [
  {
    id: 1,
    title: 'Shirt Customizer',
    description: 'A customizable 3D t-shirt model where users can change the color in real time, upload images to place on the t-shirt, such as logos or fully filled designs, and generate logos and images for the t-shirt using AI.',
    image: imgShirt,
    technologies: ['React', 'Tailwind', 'Node/Express', 'OpenAI API', 'Three.js'],
    liveUrl: 'https://shirtcustomizer.adamdev.me/',
    githubUrl: 'https://github.com/Adamyoelfc',
    isLive: true,
  },
  {
    id: 2,
    title: 'Xelvatic',
    description: 'A magazine and images market app with different roles like seller, user, admin. Sellers can create accounts and publish art (images/videos). Users can search, share, collect and buy art.',
    image: imgXelvatic,
    technologies: ['Vue.js', 'Django REST', 'PostgreSQL', 'Vuetify', 'Bootstrap'],
    liveUrl: null,
    githubUrl: 'https://github.com/Adamyoelfc',
    isLive: false,
  },
  {
    id: 3,
    title: 'Aware Medical',
    description: 'App for managing patient records with doctor and patient roles. Doctors can manage records, schedule appointments, receive cancellation notifications. Makes the patient-doctor process easier and practical.',
    image: imgAware,
    technologies: ['Vue.js', 'Django REST', 'PostgreSQL', 'jQuery', 'Vuetify'],
    liveUrl: null,
    githubUrl: 'https://github.com/Adamyoelfc',
    isLive: false,
  },
  {
    id: 4,
    title: 'Food Order',
    description: 'A food ordering app where users can view meals, add/delete items, adjust quantities in cart and complete orders with a checkout form.',
    image: imgFood,
    technologies: ['React', 'Tailwind', 'Context API'],
    liveUrl: null,
    githubUrl: 'https://github.com/Adamyoelfc',
    isLive: false,
  },
  {
    id: 5,
    title: 'Memory Game',
    description: 'A simple Memory Game built with React.js, using features like useState, useContext and custom hooks for game logic.',
    image: imgMemory,
    technologies: ['React', 'Tailwind', 'CSS3'],
    liveUrl: 'https://memorygame.adamdev.me/',
    githubUrl: 'https://github.com/Adamyoelfc',
    isLive: true,
  },
];
