import js from '../../assets/icons/icons8-javascript.svg';
import postgres from '../../assets/icons/icons8-postgresql.svg';
import django from '../../assets/icons/icons8-django.svg';
import python from '../../assets/icons/icons8-python.svg';
import bootstrap from '../../assets/icons/icons8-bootstrap.svg';
import react from '../../assets/icons/icons8-react-80.png';
import vue from '../../assets/icons/icons8-vue.js-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-96.png';
import github from '../../assets/icons/github.png';
import {
  delay,
  motion,
  useInView,
  useTransform,
} from 'framer-motion';


import planeta from '../../assets/planeta.png';

import Skills from '../Skills/Skills';

import { hiThereStyle } from '../../utils/Style';
import { slideAnimation } from '../../utils/motion';
import { useEffect, useRef } from 'react';

const skills = [
  { image: js, text: 'JavaScript', textAlt: 'javascript' },
  { image: postgres, text: 'PonstgreSQL', textAlt: 'postgres' },
  { image: django, text: 'Django', textAlt: 'django' },
  { image: python, text: 'Python', textAlt: 'python' },
  { image: bootstrap, text: 'Bootstrap', textAlt: 'bootstrap' },
  { image: react, text: 'React', textAlt: 'react' },
  { image: vue, text: 'Vue', textAlt: 'vue' },
  { image: github, text: 'GitHub', textAlt: 'github' },
];

function WSkills() {
  const skillTextRef = useRef(null);
  const skillTextInView = useInView(skillTextRef, { once: true });
  const skillRef = useRef(null);
  const skillInView = useInView(skillRef, { once: true });

  let delayCounter = 3;
  return (
    <div className="mx-auto my-auto h-fit w-full md:grid md:grid-cols-6">
      <motion.div
        ref={skillTextRef}
        style={{
          transform: skillTextInView ? 'none' : 'translateX(+200px)',
          opacity: skillTextInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        }}
        className="my-auto md:col-span-2"
      >
        {/* posicionar absolute ellipse debajo de skills */}
        <div className="justify-center m-5">
          <h1 className={`${hiThereStyle}` + ' z-2 flex justify-center mb-20'}>
            SKILLS
          </h1>
          <img src={planeta} alt="planeta" />
        </div>
      </motion.div>
      <div className="justify-center p-10 mx-auto grid grid-cols-4 gap-5 max-h-[300px] my-auto md:col-span-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.image}
            ref={skillRef}
            className="my-auto"
            style={{
              transform: skillInView ? 'none' : 'translateX(-200px)',
              opacity: skillInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.${delayCounter}s`,
            }}
          >
            <Skills
              key={delayCounter++}
              image={skill.image}
              text={skill.text}
              textAlt={skill.textAlt}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WSkills;
