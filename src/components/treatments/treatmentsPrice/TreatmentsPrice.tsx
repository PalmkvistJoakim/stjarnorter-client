import "./TreatmentsPrice.css";

function TreatmentsPrice() {
  return (
    <div className="treatments-price">
      <div className="treatments-price-container">
        <h1>Priser</h1>
        <br />
        <p>Bokning av behandling sker via mail eller telefon</p>
        <p>ina@stjarnorter.se</p>
        <p>0709-167 157</p>
        <br />
        <p style={{ fontWeight: "bold" }}>
          30 minuter.................... 450 :-
        </p>
        <p style={{ fontWeight: "bold" }}>
          60 minuter.................... 675 :-
        </p>
        <p style={{ fontWeight: "bold" }}>
          90 minuter.................... 890 :-
        </p>
        <br />
        <p style={{ fontSize: "14px" }}>
          *Uteblivet besök eller sen avbokning (senast 24 h innan) debiteras med
          fullt pris.
        </p>
      </div>
    </div>
  );
}

export default TreatmentsPrice;
