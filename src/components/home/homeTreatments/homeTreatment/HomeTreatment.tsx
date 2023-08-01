import "./HomeTreatment.css";

interface HomeTreatmentProps {
  name: string;
  description: string;
  logo: string;
}

function HomeTreatment({ name, description, logo }: HomeTreatmentProps) {
  return (
    <div className="home-treatment">
      <div className="home-treatment-container">
        <img src={logo} />
        <p>{name}</p>
      </div>
      <div className="home-treatment-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HomeTreatment;
