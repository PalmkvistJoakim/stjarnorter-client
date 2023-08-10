import { ITreatment } from "../../../../interfaces/ITreatment";
import "./TreatmentsSingle.css";

interface TreatmentsSingleProps {
  treatment: ITreatment;
}

function TreatmentsSingle({ treatment }: TreatmentsSingleProps) {
  const { img, name, shortDescription, longDescription } = treatment;
  return (
    <div className="treatments-single">
      <div className="treatments-single-image">
        <img src={img} />
        <h1>{name}</h1>
      </div>
      <div className="treatments-single-description">
        <p
          className="treatments-single-shortdescription"
          style={{ fontWeight: "bold", marginBottom: "6px" }}
        >
          {shortDescription}
        </p>
        <p className="treatments-single-longdescription">{longDescription}</p>
      </div>
      <button>Bokningsförfrågan</button>
    </div>
  );
}

export default TreatmentsSingle;
