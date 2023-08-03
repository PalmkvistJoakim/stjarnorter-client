import "./HomeBackgroundLinks.css";
import Button from "../../../common/button/Button";

function HomeBackgroundLinks() {
  return (
    <div className="home-background-links">
      <Button label="Produkter" path="/butik" />
      <Button label="Kurser" path="/kurser" />
      <Button label="Behandlingar" path="/behandlingar" />
    </div>
  );
}

export default HomeBackgroundLinks;
