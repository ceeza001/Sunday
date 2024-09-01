import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"

import sakura from "@/assets/sakura.mp3";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

export const AudioPlaying = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
]

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "TО MAKE THIS EXPERIENCE MORE IMMERSIVE WE USE SOUND EFFECTS",
    image:
      "/assets/icons/audio.svg",
  }
]

interface AudioPlayerProps {
  isPlaying: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying }) => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.05;
  audioRef.current.loop = true;
  
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(isPlaying);

  useEffect(() => {
    setIsPlayingMusic(isPlaying);
  }, [isPlaying]);
  
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

  const handleClick = () => {
    if (!isPlayingMusic) {
      setIsPlayingMusic(true);
    } else {
    setIsPlayingMusic(false);
    }
  };
  
  return (
    <>
      {!isPlayingMusic ? (
            <div onClick={handleClick}>
              <AnimatedTooltip items={people} onButtonClick={handleClick} />
            </div>
          ) : (
            <div
              onClick={handleClick}
              className="flex gap-2 items-center">
              {AudioPlaying.map((stroke, i) => (
                <motion.span
                  key={stroke.id} 
                  animate={{
                    height: [10,20,10],
                  }}
                  transition={{
                    delay: 0 + i * 0.3,
                    duration: 1.1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-[2px] bg-white" />
              ))}
            </div>
          )}
    </>
  );
};

export default AudioPlayer;