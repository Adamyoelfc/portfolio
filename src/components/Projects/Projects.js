import Card from './Card';
import awareimage from '../../assets/aware.png';
import foodorder from '../../assets/foodOrder.png';
import xelvatic from '../../assets/xelvatic.webp';
import arrow from '../../assets/icons/right-arrow.png';
import memorygame from '../../assets/MemoryGame.png';
import shirtCustomizer from '../../assets/shirtCustomizer.png';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { hiThereStyle } from '../../utils/Style';

import { motion, useInView } from 'framer-motion';
import AboutMe from '../content/AboutMe';

import { useSelector, useDispatch } from 'react-redux';

import { setTrue, setFalse } from '../../store/aboutSlice';

const projects = [
  {
    image: shirtCustomizer,
    title: 'Shirt Customizer',
    description:
      'A customizable 3D t-shirt model where users can change the color in real time, upload images to place on the t-shirt, such as logos or fully filled designs, and generate logos and images for the t-shirt using AI.',
    skills: ['React', 'Tailwind', 'Node/Express', 'API', 'FullStack'],
    link: 'https://shirtcustomizer.adamdev.me/',
  },
  {
    image: xelvatic,
    title: 'Xelvatic',
    description:
      'A magazine and images market app, there are different roles like the seller, user, admin, etc… each seller can create an account (which needs to be approved by the admin) and make public his art (images and videos). Then the user role can search, share, collect for later and buy that art… ',
    skills: [
      'Vuejs',
      'DjangoRestFramework',
      'PostgreSQL',
      'BootstrapVue',
      'Vuetify',
    ],
  },
  {
    image: awareimage,
    title: 'Aware Medical',
    description:
      'App for managing the patient’s records, two roles (doctor and patient), where the doctor can manage the patient record, schedule appointments, get notification of cancelation from the patients, and more. The patient can fill out his record and upload it. This app makes the process between patient-doctor too easier and practical.',
    skills: [
      'Vuejs',
      'DjangoRestFramework',
      'PostgreSQL',
      'jQuery',
      'Vuetify',
      'BootstrapVue',
    ],
  },
  {
    image: foodorder,
    title: 'Food Order',
    description:
      ' A simple dummy app where the user can see the meals, add, delete, and increment the quantity from the cart and finally complete the order by filling out a form… ',
    skills: ['React', 'Tailwind'],
  },
  {
    image: memorygame,
    title: 'Memory Game',
    description:
      'A simple Memory Game, build with React.js, using features like useState, useContext and more...',
    skills: ['React', 'Tailwind'],
    link: 'https://memorygame.adamdev.me/',
  },
];

const Projects = () => {
  const aboutInside = useSelector((state) => state.aboutInside.isInside);
  const dispatch = useDispatch();
  const projectTextRef = useRef(null);
  const projectInView = useInView(projectTextRef, { once: true });

  let directionCard = true;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.innerWidth < 768 ? dispatch(setTrue()) : dispatch(setFalse());
    setWindowSize(window.innerWidth);
  }, [windowSize]);

  return (
    <Fragment>
      <div className="sm:mx-5">
        <div className="flex md:justify-end md:mr-20 justify-center">
          <motion.h1
            style={{
              transform: projectInView ? 'none' : 'translateX(+200px)',
              opacity: projectInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
            }}
            ref={projectTextRef}
            className={
              `${hiThereStyle}` + ' z-2 flex justify-center mb-20 mr-[55px]'
            }
          >
            PROJECTS
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => {
            directionCard = !directionCard;
            return (
              <Card
                direction={directionCard}
                key={project.title}
                image={project.image}
                title={project.title}
                description={project.description}
                skills={project.skills}
                link={project.link}
              />
            );
          })}
          <AboutMe inside={aboutInside ? false : true} />
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
