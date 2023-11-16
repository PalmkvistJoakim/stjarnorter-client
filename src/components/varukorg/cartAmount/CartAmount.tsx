import { useContext } from "react";
import "./CartAmount.css";
import { CartContext } from "../../../context/CartContext";

interface CartAmountProps {
  toggleVarukorg: boolean;
}

function CartAmount({ toggleVarukorg }: CartAmountProps) {
  const {
    order,
    totalPrice,
    calculateShippingCost,
    totalWeight,
    calculateToFreeShipping,
    totalCost,
  } = useContext(CartContext);

  const { products } = order;

  return (
    <div className="cart-amount">
      {!toggleVarukorg && (
        <>
          <div className="cart-amount-amount">
            <p>Summa:</p>
            <p>{totalPrice(products)} kr</p>
          </div>
          <div className="cart-amount-shipping">
            <p>Frakt:</p>
            <p>
              {totalPrice(products) >= 675 ? (
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Fri frakt
                </span>
              ) : (
                `${calculateShippingCost(totalWeight(products))} kr`
              )}
            </p>
          </div>
          <p className="cart-amount-calculate">{calculateToFreeShipping()}</p>
        </>
      )}
      <div className="cart-amount-total">
        <p style={{ fontWeight: "bold" }}>Totalsumma:</p>
        <p style={{ fontWeight: "bold" }}>{totalCost()} kr</p>
      </div>
    </div>
  );
}

export default CartAmount;
