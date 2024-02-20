import { Hero, Works } from "@/components";

const Home = () => {

  return (
    <div className="flex flex-1 base-medium">
      <div className="home-container">
        <div className="w-full relative md:mt-10">
          <Hero />
        </div>

        <div className="mt-10 w-full p-[1rem] md:text-center">
          <Works />
        </div>
      </div>
    </div>
  );
};

export default Home;