import { useContext, useEffect, useState } from "react";
import "./HomePresentation.css";
import NavigationButton from "../../common/navigationButton/NavigationButton";
import { ResizeContext } from "../../../context/ResizeContext";

function HomePresentation() {
  const { isDesktop } = useContext(ResizeContext);

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
            <br /> Upptäck örter, salvor och teer för chakrasystemet.
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
