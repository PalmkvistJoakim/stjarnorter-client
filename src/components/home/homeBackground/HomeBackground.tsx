import { useEffect, useState } from "react";
import "./HomeBackground.css";
import HomeBackgroundLinks from "./homeBackgroundLinks/HomeBackgroundLinks";

function HomeBackground() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-background">
      <img src="images/2023-231.jpg" />
      <div className="home-background-container">
        <div className="home-background-content">
          <p>
            Upplev Hälsa & Harmoni!
            {!isDesktop && <br />}
            <br /> Utforska vårt sortiment av produkter, behandlingar och
            inspirerande kurser för holistisk välmående.
            {!isDesktop && <br />}
            <br /> Upptäck örter, kryddor, salter, salvor och teer för
            chakrasystemet.
          </p>
        </div>
        <HomeBackgroundLinks />
      </div>
    </div>
  );
}

export default HomeBackground;
