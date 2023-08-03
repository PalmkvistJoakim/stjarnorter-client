import "./HomeBackground.css";
import HomeBackgroundLinks from "./homeBackgroundLinks/HomeBackgroundLinks";
import { useState, useEffect } from "react";

function HomeBackground() {
  const [isIpad, setIsIpad] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1023
  );

  useEffect(() => {
    const handleResize = () => {
      setIsIpad(window.innerWidth >= 768 && window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="home-background">
        <img src="images/2023-231.jpg" />
        <div className="home-background-content">
          <p>
            Upplev Hälsa & Harmoni!
            <br /> Utforska vårt sortiment av produkter, behandlingar och
            inspirerande kurser för holistisk välmående.
            <br /> Upptäck örter, kryddor, salter, salvor och teer för
            chakrasystemet.
            <br /> Välkommen till Stjärnörter och Själens Stjärna!
          </p>
        </div>
        {isIpad && <HomeBackgroundLinks />}
      </div>
      {!isIpad && <HomeBackgroundLinks />}
    </>
  );
}

export default HomeBackground;
