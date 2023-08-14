import { useEffect, useState } from "react";
import "./HomePresentation.css";
import NavigationButton from "../../common/navigationButton/NavigationButton";

function HomePresentation() {
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
    <div className="home-presentation">
      <img src="images/2023-231.jpg" />
      <div className="home-presentation-container">
        <div className="home-presentation-content">
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
        <div className="home-presentation-buttons">
          <NavigationButton
            label="Produkter"
            path="/butik"
            location="homePresentation"
          />
          <NavigationButton
            label="Kurser"
            path="/kurser"
            location="homePresentation"
          />
          <NavigationButton
            label="Behandlingar"
            path="/behandlingar"
            location="homePresentation"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePresentation;
