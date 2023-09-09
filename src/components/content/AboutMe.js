import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { hiThereStyle } from '../../utils/Style';

const AboutMe = ({ inside = false }) => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true });
  return (
    <motion.div
      className={`grid justify-items-center ${inside ? 'pt-10' : 'pt-20'}`}
      style={{
        transform: aboutInView ? 'none' : 'translateX(+200px)',
        opacity: aboutInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
      ref={aboutRef}
    >
      <p
        className={`${hiThereStyle} + ' z-2 flex justify-center my-auto ' + ${
          inside ? 'm-5' : 'mb-2 '
        }`}
      >
        ABOUT ME
      </p>
      <div className={`${inside ? 'p-1' : 'p-20'}`}>
        <div>
          <h4
            className={` ${
              inside ? 'text-md w-80' : 'text-3xl'
            } text-center  text-gray-300 shadow-md`}
          >
            <p>
              I am a passionate and creative developer with a strong foundation
              in computer science. My journey in programming has been shaped by
              a commitment to continuous learning and a desire to create
              innovative solutions. I thrive in collaborative environments and
              believe in the power of teamwork to drive technological
              advancements.
            </p>
          </h4>
        </div>

        {/* <ul className="pt-10 mt-10 text-xl monospace">
          <li className="flex">
            👨‍💻{' '}
            <p className="ml-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-800">
              Love for tech and innovation.
            </p>
          </li>

          <li className="flex">
            💓{' '}
            <p className="ml-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-800">
              Passionate with problem solving and automation.
            </p>
          </li>
        </ul> */}
      </div>
    </motion.div>
  );
};

export default AboutMe;
