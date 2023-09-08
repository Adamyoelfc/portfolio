import { hiThereStyle } from '../../utils/Style';

import { Fragment } from 'react';
import MyPhoto from '../../assets/MyPhoto.png';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  headTextAnimation,
  fadeAnimation,
} from '../../utils/motion';

export const Header = () => {
  return (
    <Fragment>
      <div className="h-full grid grid-cols-1 md:grid-cols-8 relative">
        <div className="justify-center p-5 mx-auto my-auto md:col-start-1 md:col-span-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="justify-center max-w-md"
          >
            <motion.h1 className={hiThereStyle} {...headTextAnimation('left')}>
              HI THERE
            </motion.h1>
            <motion.h1
              className={hiThereStyle}
              {...headTextAnimation('left', 0.3)}
            >
              I'M ADAM
            </motion.h1>
            <motion.h1
              className={hiThereStyle}
              {...headTextAnimation('left', 0.5)}
            >
              WEB DEVELOPER
            </motion.h1>

            <motion.div>
              <motion.p
                {...headTextAnimation('left', 0.6)}
                className="ml-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-700"
              >
                Love for tech and innovation.
              </motion.p>
              <motion.p
                {...headTextAnimation('left', 0.7)}
                className="ml-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-700"
              >
                Passionate with problem solving and automation.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          {...fadeAnimation}
          className="absolute w-[150px] top-[40px] left-[200px] md:top-[0px] md:left-[0px] md:relative md:w-full md:mx-auto md:my-auto md:block md:col-span-3"
        >
          <img
            className="mx-auto min-w-90 min-h-90 w-90 opacity-[.68] md:opacity-1"
            src={MyPhoto}
            alt="img"
          />
        </motion.div>
      </div>
    </Fragment>
  );
};
