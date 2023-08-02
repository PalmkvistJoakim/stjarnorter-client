import "./HomeBackgroundWithLinks.css";
import Button from "../../common/button/Button";

function HomeBackgroundWithLinks() {
  return (
    <div className="home-background-with-links">
      <img src="images/2023-231.jpg" />
      <div className="home-background-with-links-content">
        <p>
          Upplev Hälsa & Harmoni!
          <br /> Utforska vårt sortiment av produkter, behandlingar och
          inspirerande kurser för holistisk välmående.
          <br /> Upptäck örter, kryddor, salter, salvor och teer för
          chakrasystemet.
          <br /> Välkommen till Stjärnörter och Själens Stjärna!
        </p>
        <div className="home-background-with-links-buttons">
          <Button label="Produkter" path="/butik" />
          <Button label="Kurser" path="/kurser" />
          <Button label="Behandlingar" path="/behandlingar" />
        </div>
      </div>
    </div>
  );
}

export default HomeBackgroundWithLinks;
