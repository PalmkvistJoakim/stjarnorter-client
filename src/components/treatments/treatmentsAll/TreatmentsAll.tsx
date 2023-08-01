import { ITreatment } from "../../../interfaces/ITreatment";
import { getTreatments } from "../../../services/treatments";
import "./TreatmentsAll.css";
import TreatmentsSingle from "./treatmentsSingle/TreatmentsSingle";

function TreatmentsAll() {
  const treatments = getTreatments();

  const firstFourTreatments = treatments.slice(0, 4);
  const remainingTreatments = treatments.slice(4);

  const renderTreatments = (treatmentCount: ITreatment[]) => {
    return treatmentCount.map((treatment) => (
      <TreatmentsSingle key={treatment.name} treatment={treatment} />
    ));
  };
  //   const renderTreatments = () => {
  //     return treatments.map((treatment) => (
  //       <TreatmentsSingle treatment={treatment} />
  //     ));
  //   };
  return (
    <div className="treatments-all">
      <div className="treatments-all-four">
        {renderTreatments(firstFourTreatments)}
      </div>
      <img src="images/INA40-1.jpg" />
      <div className="treatments-all-remaining">
        {renderTreatments(remainingTreatments)}
      </div>
    </div>
  );
}

export default TreatmentsAll;
