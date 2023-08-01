import { ITreatment } from "../../../../interfaces/ITreatment";
import "./TreatmentsSingle.css";

interface TreatmentsSingleProps {
  treatment: ITreatment;
}

function TreatmentsSingle({ treatment }: TreatmentsSingleProps) {
  const { img, name, shortDescription, longDescription } = treatment;
  return (
    <div className="treatments-single">
      <img src={img} />
      <h1>{name}</h1>
      <div className="treatments-single-description">
        <p style={{ fontWeight: "bold" }}>{shortDescription}</p>
        <p>{longDescription}</p>
      </div>
      <button>Bokningsförfrågan</button>
    </div>
  );
}

export default TreatmentsSingle;
