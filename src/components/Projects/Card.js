import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Atropos from 'atropos/react';
import 'atropos/atropos.css';

const Card = (props) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      style={{
        transform: cardInView
          ? 'none'
          : props.direction
          ? 'translateX(+200px)'
          : 'translateX(-200px)',
        opacity: cardInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
      className="flex h-fit justify-center rounded-[20px]"
    >
      <Atropos
        stretchZ={8}
        activeOffset={60}
        shadow={false}
        highlight={true}
        className="rounded-[100px]"
      >
        <div className=" w-[388px] h-[500px] pt-5 bg-purple-300 bg-opacity-10 rounded-[18px] shadow-xl">
          <div
            data-atropos-offset="5"
            style={{
              backgroundImage: `url(${props.image})`,
              backgroundSize: 'cover',
            }}
            className={`w-[350px] h-[200px] mx-auto mb-5 rounded-[19px] shadow-xl`}
          />
          <div
            data-atropos-offset="-2"
            className="flex justify-center p-1 flex-wrap gap-1"
          >
            {props.skills.map((skill) => (
              <div className="bg-purple-400 text-sm mx-auto w-fit p-1 text-white rounded-md bg-opacity-[.50]">
                {skill}
              </div>
            ))}
          </div>
          <div
            data-atropos-offset="5"
            className="w-[340px] p-5 text-gray-200 font-normal text-sm"
          >
            {props.description}
            {props.link && (
              <button className=" bg-purple-500 opacity-[.68] shadow-xl hover:opacity-[100] px-2 ml-5 text-white rounded-md">
                <a href={props.link} target='_blank'>Link</a>
              </button>
            )}
          </div>
        </div>
      </Atropos>
    </motion.div>
  );
};

export default Card;
