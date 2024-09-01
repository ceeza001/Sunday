"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface AnimatedTooltipProps {
    onButtonClick: () => void;
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({
  items,
  onButtonClick
}: {
  items: {
    id: number;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setHoveredIndex(null);
    }, 4000);

      // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
    }, []);
  
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: -30,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 0, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "wrap",
                }}
                className="w-[15rem] absolute top-16 right-0 translate-x-1/2 text-xs flex text-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute right-0 z-30 w-[20%] -top-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-0 w-[100%] z-30 -top-px bg-gradient-to-r from-transparent via-primary-500 to-transparent h-px " />
                
                <p className="text-white text-xs">{item.designation}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={onButtonClick}>
            <img
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="invert-white object-cover !m-0 !p-0 object-top rounded-full h-[1.5rem] w-[1.5rem] group-hover:scale-105 group-hover:z-30 relative transition duration-500"
            />
          </button>
        </div>
      ))}
    </>
  );
};
