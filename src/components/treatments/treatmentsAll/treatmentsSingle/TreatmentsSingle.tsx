import { ITreatment } from "../../../../interfaces/ITreatment";
import "./TreatmentsSingle.css";
import { useState } from "react";

interface TreatmentsSingleProps {
  treatment: ITreatment;
}

function TreatmentsSingle({ treatment }: TreatmentsSingleProps) {
  const { img, name, description } = treatment;
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  function openEmailWindow() {
    const email = "ina@stjarnorter.se";

    const subject = `Bokningsförfrågan: ${treatment.name}`;

    const body = `Hej, vad kul att du är intresserad av ${treatment.name}-behandling. Skriv ett förslag på datum och tid så återkommer jag. /Catharina`;

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.open(mailtoLink);
  }

  return (
    <div className="treatments-single">
      <div className="treatments-single-image">
        <img src={img} />
        <h1>{name}</h1>
      </div>
      <div className="treatments-single-description">
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: readMore ? "inherit" : 10,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
      </div>
      {!readMore ? (
        <button onClick={toggleReadMore}>Läs mer och boka</button>
      ) : (
        <button onClick={openEmailWindow}>Bokningsförfrågan</button>
      )}
    </div>
  );
}

export default TreatmentsSingle;
