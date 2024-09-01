import { motion } from "framer-motion"

import { AnimatedText } from "@/components";

const Home = () => {
  
  return (
    <>
      <div className="relative bg-[#55CFFF] z-[50] h-[100dvh] w-full flex-center">
        <AnimatedText />

        <motion.div 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{
            delay: 2.1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full flex-center flex-col">
          <h1 className="text-[50px] font-bold leading-[101%] spicy-rice">
            Sunday
          </h1>

          <motion.img
            animate={{
              y: [60, -60],
              transition: {
                delay: 1.5,
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity, 
                repeatType: "reverse" 
              },
            }}
            src="/assets/images/hero.png"
            alt="Funday"
          />

          <h1 className="text-[50px] font-bold leading-[101%] spicy-rice">
            Is Fun Day
          </h1>
        </motion.div>
      </div>

      <div className=" border-4 border-[#C49027] bg-[#F5B93F] p-[1rem]">
        <div className="text-center font-bold">
          <h1 className="text-[60px] leading-[101%] text-[#FFE5B0] spicy-rice">
            Sun's Out, Fun's Out
          </h1>
          <h2 className="my-2 text-black font-black text-[20px] leading-[101%]">
            Introducing Sunday - The Tron Chain Meme Project That's Heating Up!
          </h2>

          <div className="mt-4 font-medium text-[30px] leading-[101%]">
            <p>
              Get ready to bask in the warmth of the most epic meme project on the Tron chain - Sunday! Just like the sun, our community is shining bright, and we're illuminating the world with laughter and good vibes.
            </p>
          </div>
        </div>

        <div className="relative mt-[4rem]">
          <h1 className="text-[60px] leading-[101%] text-[#FFE5B0] spicy-rice">
            Tokenomics
          </h1>

          <div className=" text-[#FFD78E] font-bold rounded-lg p-2 border-4 border-[#C49027] bg-black mt-[2rem] spicy-rice">
            <div className="flex flex-col rounded-lg text-center gap-4 p-4 bg-[#C49027] ">
              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                Total Supply: 1 Million $Sunday
              </span>

              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                75% for liquidity
              </span>

              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                20% for SUNPUMP users/emoji token traders
              </span>

              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                5% to Justin Sun
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-4 border-[#C49027] bg-[#FFF2CC] p-[1rem]">
        <div className="relative mt-[4rem]">
          <h1 className="text-[60px] leading-[101%] text-black spicy-rice">
            HOW TO BUY
          </h1>

          <div className="text-[#FFD78E] font-bold rounded-lg p-2 border-4 border-[#C49027] bg-black mt-[2rem] spicy-rice">
            <div className="flex flex-col rounded-lg text-center gap-4 p-4 bg-[#C49027] ">
              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                1/ Download TronLink and set up your wallet
              </span>

              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                2/ Get TRON (TRX) through an exchange or bridge your USDT to TRX
              </span>

              <span className="bg-[#795819] rounded-[5px] flex-center p-4">
                3/ Purchase SUN via SUNPUMP or SUNSWAP
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;