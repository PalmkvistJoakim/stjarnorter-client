import { useContext } from "react";
import "./CartDeliveryInformation.css";
import { CartContext } from "../../../context/CartContext";

function CartDeliveryInformation() {
  const { order } = useContext(CartContext);

  const { eMail, name, phone, address, zipCode, city } = order.customer;
  return (
    <div className="cart-delivery-information">
      <div className="cart-delivery-information-container">
        <p style={{ fontStyle: "italic" }}>
          E-postadress: {eMail}
          <br />
          Namn: {name}
          <br />
          Telefonnummer: {phone}
          <br />
          Adress: {address}
          <br />
          Postadress: {zipCode}
          <br />
          Stad: {city}
        </p>
      </div>
    </div>
  );
}

export default CartDeliveryInformation;
