import BackgroundWithDescription from "../common/backgroundWithDescription/BackgroundWithDescription";
import "./Treatments.css";
import TreatmentsAboutOwner from "./treatmentsAboutOwner/TreatmentsAboutOwner";
import TreatmentsAll from "./treatmentsAll/TreatmentsAll";
import TreatmentsPrice from "./treatmentsPrice/TreatmentsPrice";
import { useEffect } from "react";

function Treatments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const treatmentsDescription = {
    label: "Behandlingar",
    description:
      "Utforska våra holistiska behandlingar för kropp och själ. Med en passion för örter, djur och olika behandlingsformer erbjuder vi en unik upplevelse på Själens Stjärna. Vår grundares 20-åriga erfarenhet inom örtmedicin och terapiformer som bowenterapi, bonitologi och kraniosakralterapi säkerställer skräddarsydda behandlingsprogram för att främja balans och läkning. Vi sätter den enskilda individen i fokus och tror på kroppens läkekraft.",
    img: "images/MensesCrampEliminator_1800x1200.jpg",
  };
  return (
    <div className="treatments">
      <BackgroundWithDescription
        label={treatmentsDescription.label}
        description={treatmentsDescription.description}
        img={treatmentsDescription.img}
      />
      <TreatmentsAboutOwner />
      <TreatmentsAll />
      <TreatmentsPrice />
    </div>
  );
}

export default Treatments;
