import { motion } from "framer-motion"
import Matrix from "./Matrix"
import { Button } from "@/components/ui/button"

const Hero = () => {
  
  return (
    <div className="flex md:h-[600px] justify-between flex-wrap-reverse md:flex-nowrap gap-10 md:p-[4rem]">
      <div className="px-[1rem] relative w-full">
        <div className="md:absolute bottom-0 left-0">
          <p className="h3-semibold mb-2">
            Hello World! I'm <span className="h3-bold gradient-text">Ceeza</span>,
          </p>
          <p>
            A Web 3.0 Frontend Developer with a poetic touch. Let my code tell stories and my designs paint dreams. Dive into simplicity with a touch of elegance.
          </p>
          <Button className="my-4 shad-button bg-primary-600 border border-dark-3 base-semibold py-[0.8rem]">
            <p>Explore</p>
            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <img 
                src="/assets/icons/enter.svg" 
                className="w-6"
              />
            </motion.div>
          </Button>
        </div>
      </div>

      <div className="relative w-full md:h-full flex items-end justify-center">
        <img
          src="/assets/silhouette.png"
          alt="silhouette"
          className="h-4/5 md:h-full"
        />
        <Matrix />
      </div>      
    </div>
  )
}

export default Hero;