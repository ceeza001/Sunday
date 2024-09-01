import { useState, useEffect } from "react";

import { getFormattedDateTime } from '@/lib/utils';

const Topbar = () => {
  const [menu, setMenu] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<string>(getFormattedDateTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(getFormattedDateTime());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="topbar">
      <h3 className="text-[11px] font-semibold playwrite">{currentDateTime}</h3>
      
    </div>
  );
};

export default Topbar;