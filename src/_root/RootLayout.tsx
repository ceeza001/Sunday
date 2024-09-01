import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"

import { getFormattedDateTime } from '@/lib/utils';
import { Button } from "@/components/ui/moving-border";
import { AuroraBackground } from "@/components/ui/aurora-background";

import { AudioPlayer } from "@/components/shared";
import { Topbar } from "@/components/";

const RootLayout = () => {
  const [intro, setIntro] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState<string>(getFormattedDateTime());
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getFormattedDateTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  const enter = () => {
    if (!isPlayingMusic) {
      setIsPlayingMusic(true);
    }
    setIntro(false);
  };
  
  return (
    <div className="w-full">
      {intro ? (
        <div className="bg-[#55CFFF] fixed top-0 left-0 w-screen h-full z-[200]">
        
          <AuroraBackground>
            <header className="w-full p-[1rem] flex justify-between items-center fixed top-0 h-[4rem]">
              <h3 className="text-[11px] font-black playwrite">{currentDateTime}</h3>
          
              <AudioPlayer isPlaying={isPlayingMusic} />
            </header>
        
            <div className="relative w-full h-[80vh] flex flex-col flex-center">
          
              <div className="absolute md:static bottom-0 flex-center flex-col h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="mx-auto p-[1rem] w-full h-full max-w-5xl flex-col flex-center text-center"
                >
                  <h1 className="text-[66px] font-bold leading-[101%] spicy-rice">What's Cooking?</h1>
                  
                </motion.div>
                <motion.button
                  initial={{ opacity: 0.0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.55,
                    duration: 0.85,
                    ease: "easeInOut",
                  }}
                  onClick={enter}
                  className="rounded-lg w-[20rem] bg-[#EFE27C] border-4 border-[#C49027] mx-auto max-w-5xl p-[3px]"
                >
                  <div
                    className="rounded-[4px] bg-[#C49027] w-full text-[#FFE5B0] p-4 font-bold text-[20px] spicy-rice"
                  >
                    Let's Find Out
                  </div>
                </motion.button>
              </div>
            </div>
          </AuroraBackground>
        </div>
      ) : (
        <>
          <Topbar />
          <Outlet />
        </>
      )}
    </div>
  );
};

export default RootLayout;