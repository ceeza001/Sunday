import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const animationVarient = {
  initial: {
    opacity: 0,
    y: -100,
    x: -100,
  },
  animate: {
    opacity: 1, 
    y: 0,
    x: 0,
  }
};

const Navbar = () => {
  return (
    <div className="p-[1rem] h-full space-y-2">
      <div className="flex flex-wrap md:flex-nowrap gap-2 w-full h-[60%]">
        <motion.span
          variants={animationVarient}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="glassmorphism rounded-lg w-full"
        >
          <Link to="/about" className="flex flex-center w-full h-full">
            <h2 className="h3-bold">About me</h2>
          </Link>
        </motion.span>
        <motion.span
          variants={animationVarient}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="glassmorphism rounded-lg w-full"
          >
          <Link to="/ideas" className="flex flex-center w-full h-full">
            <h2 className="h3-bold">Ideas</h2>
          </Link>
        </motion.span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-2 w-full h-[40%]">
        <motion.span
          variants={animationVarient}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-center glassmorphism rounded-lg w-full"
        >
          <Link to="/designs" className="flex-center w-full h-full">
            <h2 className="h3-bold">Graphic Designs</h2>
          </Link>
        </motion.span>
        <motion.span
          variants={animationVarient}
          initial="initial"
          whileInView="animate"
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-center glassmorphism rounded-lg w-full"
        >
          <Link to="/experience" className="flex-center w-full h-full">
            <h2 className="h3-bold">Experience</h2>
          </Link>
        </motion.span>
        <div className="w-full flex md:flex-wrap gap-2">
          <motion.span
            variants={animationVarient}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="rounded-lg flex-center glassmorphism w-full"
          >
            <h2 className="h3-bold">CV</h2>
          </motion.span>
          <motion.span
            variants={animationVarient}
            initial="initial"
            whileInView="animate"
            transition={{
              delay: 1.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="rounded-lg glassmorphism w-full"
          >
            <Link to="/link-tree" className="flex-center w-full h-full">
              <h2 className="h3-bold">Link Tree</h2>
            </Link>
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default Navbar