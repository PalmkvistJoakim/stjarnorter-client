import { useContext } from "react";
import { saveData } from "../../../services/dataService";
import "./Checkout.css";
import { CartContext } from "../../../context/CartContext";
import Input from "../../common/input/Input";
import axios from "axios";
import CartProduct from "../cartProduct/CartProduct";

function Checkout() {
  const { order } = useContext(CartContext);

  const { eMail, name, phone, address, zipCode, city } = order.customer;
  const { totalAmount } = order.summary;

  const handleCreatePayment = async () => {
    const { data } = await axios.post(
      "http://localhost:8000/api/stjarnorter/swishpayment",
      {
        amount: totalAmount,
        message: "Stjärnörter",
      }
    );
    console.log(data);
  };

  const handlePOST = async () => {
    const { data } = await saveData("orders", order);
    console.log(data);
  };

  const renderInput = (
    label: string,
    name: string,
    value: string,
    placeholder: string
  ) => {
    return (
      <Input
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    );
  };
  return (
    <div className="checkout">
      <div className="checkout-top">
        <h1>Kassa</h1>
        {renderInput(
          "E-postadress",
          "eMail",
          eMail,
          "T.ex. catharinaehlo@email.com"
        )}
        {renderInput("Namn", "name", name, "T.ex. Catharina Ehlo")}
        {renderInput("Telefon", "phone", phone, "T.ex. 0712345678")}
        {renderInput("Adress", "address", address, "T.ex. Gatunamn 1")}
        {renderInput("Postnummer", "zipCode", zipCode, "T.ex. 12345")}
        {renderInput("Stad", "city", city, "T.ex. Stockholm")}
        <button onClick={handleCreatePayment}>
          <img src="./images/Swish Logo Secondary Light-BG SVG.svg" />
        </button>
      </div>
    </div>
  );
}

export default Checkout;
