import "./HomeTreatments.css";
import HomeTreatment from "./homeTreatment/HomeTreatment";
import { getTreatments } from "../../../services/treatments";
import { useEffect, useState } from "react";

function HomeTreatments() {
  const treatments = getTreatments();
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

  const renderTreatments = () => {
    return treatments.map((treatment) => (
      <HomeTreatment
        key={treatment.name}
        name={treatment.name}
        description={treatment.shortDescription}
        logo={treatment.logo}
      />
    ));
  };
  return (
    <div className="home-treatments">
      <div className="home-treatments-image">
        <img src="images/shutterstock_1705833508.jpg" />
        <h1>Våra behandlingar</h1>
        {!isDesktop && (
          <p>
            Genom naturliga metoder och örtbaserade produkter
            <br /> skapar vi en djupgående balans för kropp och själ,
            <br />
            för att ge dig ökat välbefinnande och inre harmoni.
          </p>
        )}
      </div>
      <div className="home-treatments-container">
        {isDesktop && (
          <div className="home-treatments-info">
            <p>
              Genom naturliga metoder och örtbaserade produkter
              <br /> skapar vi en djupgående balans för kropp och själ,
              <br />
              för att ge dig ökat välbefinnande och inre harmoni.
            </p>
            <button>Läs mer</button>
          </div>
        )}
        <div className="home-treatments-inner-container">
          {renderTreatments()}
        </div>
        {!isDesktop && <button>Läs mer</button>}
      </div>
    </div>
  );
}

export default HomeTreatments;
