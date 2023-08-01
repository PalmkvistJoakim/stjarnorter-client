import "./HomeTreatments.css";
import Button from "../../common/button/Button";
import HomeTreatment from "./homeTreatment/HomeTreatment";
import { getTreatments } from "../../../services/treatments";

function HomeTreatments() {
  const treatments = getTreatments();

  const renderTreatments = () => {
    return treatments.map((treatment) => (
      <HomeTreatment
        name={treatment.name}
        description={treatment.shortDescription}
        logo={treatment.logo}
      />
    ));
  };
  return (
    <div>
      <div className="home-treatments">
        <img src="images\INA40-1.jpg" />
        <p>Våra behandlingar</p>
      </div>
      <div className="home-treatments-container">
        <div className="home-treatments-description">
          <p>
            Genom naturliga metoder och örtbaserade produkter skapar vi en
            djupgående balans för kropp och själ, för att ge dig ökat
            välbefinnande och inre harmoni.
          </p>
          <Button label="Läs mer" path="/behandlingar" />
        </div>
        <div className="home-treatments-inner-container">
          {renderTreatments()}
        </div>
      </div>
    </div>
  );
}

export default HomeTreatments;
