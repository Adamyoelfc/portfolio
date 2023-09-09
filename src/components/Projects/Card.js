import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import Atropos from 'atropos/react';
import 'atropos/atropos.css';
import CardContent from './CardContent';

import { useSelector } from 'react-redux';

const Card = (props) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true });

  const movileView = useSelector((state) => state.aboutInside.isInside);

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
      {movileView ? (
        <div className="rounded-[100px]">
          <CardContent {...props} />
        </div>
      ) : (
        <Atropos
          stretchZ={8}
          activeOffset={60}
          shadow={false}
          highlight={true}
          className="rounded-[100px]"
        >
          <CardContent {...props} />
        </Atropos>
      )}
    </motion.div>
  );
};

export default Card;
