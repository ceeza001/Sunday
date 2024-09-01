import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText: React.FC = () => {
  const text = "$Sunday";
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: [1, 0, 1, 1, 0],
      y:  [60, 0, 60],
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      
      animate="visible"
      className="flex"
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          variants={child}
          className="abril-fatface font-bold text-[5rem]"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
