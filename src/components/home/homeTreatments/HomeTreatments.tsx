import "./HomeTreatments.css";
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
    <div className="home-treatments">
      <div className="home-treatments-image">
        <img src="images/shutterstock_1705833508.jpg" />
        <h1>Våra behandlingar</h1>
        <p>
          Genom naturliga metoder och örtbaserade produkter skapar vi en
          djupgående balans för kropp och själ, för att ge dig ökat
          välbefinnande och inre harmoni.
        </p>
      </div>
      <div className="home-treatments-container">
        <div className="home-treatments-inner-container">
          {renderTreatments()}
        </div>
        <button>Läs mer</button>
      </div>
    </div>
  );
}

export default HomeTreatments;