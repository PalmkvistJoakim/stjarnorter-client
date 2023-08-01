import "./BackgroundWithDescription.css";

interface BackgroundWithDescriptionProps {
  label: string;
  description: string;
  img: string;
}

function BackgroundWithDescription({
  label,
  description,
  img,
}: BackgroundWithDescriptionProps) {
  return (
    <div className="background-with-description">
      <img src={img} />
      <div className="background-with-description-text">
        <h1>{label}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BackgroundWithDescription;
