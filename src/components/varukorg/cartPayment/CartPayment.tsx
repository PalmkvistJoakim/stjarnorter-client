import axios from "axios";
import "./CartPayment.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartPayment() {
  const { order } = useContext(CartContext);

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

  return (
    <div className="cart-payment">
      <button onClick={handleCreatePayment}>
        <img src="./images/Swish Logo Secondary Light-BG SVG.svg" />
      </button>
    </div>
  );
}

export default CartPayment;
