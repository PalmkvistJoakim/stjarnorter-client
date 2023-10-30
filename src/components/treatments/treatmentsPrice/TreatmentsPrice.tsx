import "./TreatmentsPrice.css";

function TreatmentsPrice() {
  return (
    <div className="treatments-price">
      <div className="treatments-price-container">
        <h1>Priser</h1>
        <p style={{ fontWeight: "bold" }}>
          30 minuter.................... 450 :-
        </p>
        <p style={{ fontWeight: "bold" }}>
          60 minuter.................... 675 :-
        </p>
        <p style={{ fontWeight: "bold" }}>
          90 minuter.................... 890 :-
        </p>
        <p style={{ fontSize: "1.8vw" }}>
          *Uteblivet besök eller sen avbokning (senast 24 h innan) debiteras med
          fullt pris.
        </p>
      </div>
    </div>
  );
}

export default TreatmentsPrice;
