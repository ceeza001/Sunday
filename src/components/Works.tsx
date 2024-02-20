import { Button } from "@/components/ui/button"

const Works = () => {
  return (
    <>
      <h1 className="text-[4rem] font-bold text-stroke">Works</h1>
      <h2 className="italic my-8 mb-4 text-[15px] font-thin flex flex-col">I sculpt
        <span className="not-italic text-[18px] font-thin">DIGITAL REALMS WHERE INTERACTIVITY THRIVES—SHAPING INFORMATION FLOW.</span>
      </h2>

      <p className="text-[15px]">Delving into the art of UI elements, meticulously crafting engaging interactions. My heart beats for the poetry of programming optimization.</p>

      <h2 className="text-[24px] font-thin my-8 mb-4">Projects</h2>
      <p>
        I am currently working at BlackCube Tech as a frontend developer, and I've been involved in significant projects for the company.
      </p>
      <p>
        Here are some of my most relevant projects
      </p>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="">
          <h2 className="h2-bold">whispers</h2>
          <p>An anonymous chat platform where users can interact with the rest of the world without revealing their identity.</p>
          <div className="flex gap-2">
            <Button className="shad-button_dark_4">
              Details
            </Button>
            <Button className="shad-button_primary">
              Visit Site
            </Button>
          </div>
        </div>
        <div className="bg-dark-2 w-full">
          img
        </div>
      </div>
    </>
  );
};

export default Works;