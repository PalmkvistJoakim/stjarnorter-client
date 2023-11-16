import { useContext } from "react";
import Input from "../../common/input/Input";
import "./CartInformation.css";
import { CartContext } from "../../../context/CartContext";

function CartInformation() {
  const { order } = useContext(CartContext);

  const { eMail, name, phone, address, zipCode, city } = order.customer;

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
    <div className="cart-information">
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
    </div>
  );
}

export default CartInformation;
