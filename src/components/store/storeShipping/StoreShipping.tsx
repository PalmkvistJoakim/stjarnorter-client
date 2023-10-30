import "./StoreShipping.css";

const shipping = [
  { weight: "< 250g", price: "54 kr" },
  { weight: "< 500g", price: "60 kr" },
  { weight: "< 1000g", price: "69 kr" },
  { weight: "> 1000g", price: "0 kr" },
];

function StoreShipping() {
  return (
    <div className="store-shipping">
      <div className="store-shipping-container">
        <h1>Frakt</h1>
        {shipping.map((ship) => (
          <div className="store-shipping-text">
            <p>{ship.weight}</p>
            <p>{ship.price}</p>
          </div>
        ))}
        <p style={{ fontSize: "1.8vw" }}>*Betalning sker via Swish.</p>
      </div>
    </div>
  );
}

export default StoreShipping;
