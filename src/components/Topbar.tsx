import { useState } from "react";
import Navbar from "@/components/Navbar";

const Topbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="topbar black-glassmorphism">
      <h3 className="h3-bold">Gm Gm ...</h3>
      <div>
        <button onClick={toggleMenu}>
          <img
            src="/assets/icons/menu.svg"
            className="invert-white w-6 h-6"
            alt="menu"
          />
        </button>
        {menu && (
          <div className="black-glassmorphism fixed top-0 left-0 w-screen h-full max-h-screen flex flex-col gap-2">
            <div className="bg-dark-1 h-[3rem] flex justify-between p-[1rem]">
              <h3>Menu</h3>
              <img
                src="/assets/icons/close.svg"
                alt="close"
                className="invert-white w-6 h-6"
                onClick={toggleMenu} // Add this line to close the menu
              />
            </div>
            <Navbar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;