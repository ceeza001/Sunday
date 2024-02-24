import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion"

import { Topbar } from "@/components/";
import { Button } from "@/components/ui/button";
import sakura from "../assets/sakura.mp3";

const RootLayout = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.003;
  audioRef.current.loop = true;

  const [intro, setIntro] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const enter = () => {
    setIsPlayingMusic(!isPlayingMusic);
    setIntro(false);
  };
  
  return (
    <>
      {intro ? (
        <div className="w-full h-[92vh] flex flex-col flex-center">
          <div className="mx-auto p-[1rem] w-full max-w-5xl">
            <h1 className="text-[56px] font-bold leading-[101%]">I AM HIM, CEEZA</h1>
            <p className="mt-8 text-[16px] md:text-[20px] font-semibold">The digital artisan who blurs the lines between syntax and stanzas, crafting an immersive experience in every web creation. A Full Stack Web Developer and poet, conjuring the magic where algorithms meet the eloquence of words.</p>
          </div>
          <div className="w-full mx-auto max-w-5xl p-[1rem]">
            <Button
              onClick={enter}
              className="body-bold mt-6 cursor-pointer border border-primary-600"
            >
              Enter my world
              <motion.span
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <img
                  src="/assets/icons/enter.svg"
                  alt="enter"
                  className="w-[2rem]"
                  />
              </motion.span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Topbar />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default RootLayout;