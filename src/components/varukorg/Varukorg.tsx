import { RefObject, useContext, useEffect, useRef, useState } from "react";
import "./Varukorg.css";
import CartProducts from "./cartProducts/CartProducts";
import { CartContext } from "../../context/CartContext";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CartAmount from "./cartAmount/CartAmount";
import CartInformation from "./cartInformation/CartInformation";
import CartDeliveryInformation from "./cartDeliveryInformation/CartDeliveryInformation";
import CartPayment from "./cartPayment/CartPayment";

function Varukorg() {
  const { totalProducts } = useContext(CartContext);
  const [toggleVarukorg, setToggleVarukorg] = useState(false);
  const [togglePayment, setTogglePayment] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="varukorg">
      <div className="varukorg-container">
        <p className="varukorg-headers">
          Varukorg({totalProducts})
          {toggleVarukorg && (
            <span
              style={{
                marginLeft: "4px",
                fontSize: "14px",
                backgroundColor: "#133a1b",
                color: "white",
                padding: "6px",
              }}
              onClick={() => setToggleVarukorg(!toggleVarukorg)}
            >
              Ändra
            </span>
          )}
        </p>
        {!toggleVarukorg && <CartProducts />}
        <CartAmount toggleVarukorg={toggleVarukorg} />
        <div className="varukorg-button-delivery">
          {!toggleVarukorg && (
            <button onClick={() => setToggleVarukorg(!toggleVarukorg)}>
              Till leveransinformation
            </button>
          )}
        </div>
        {toggleVarukorg && (
          <>
            <p className="varukorg-headers">
              Leveransinformation
              {togglePayment && (
                <span
                  style={{
                    marginLeft: "4px",
                    fontSize: "14px",
                    backgroundColor: "#133a1b",
                    color: "white",
                    padding: "6px",
                  }}
                  onClick={() => setTogglePayment(!togglePayment)}
                >
                  Ändra
                </span>
              )}
            </p>
            {!togglePayment ? <CartInformation /> : <CartDeliveryInformation />}
            <div className="varukorg-button-payment">
              {!togglePayment && (
                <button onClick={() => setTogglePayment(!togglePayment)}>
                  Till betalning
                </button>
              )}
            </div>
            {togglePayment && (
              <>
                <p className="varukorg-headers">Betalning</p>
                <CartPayment />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Varukorg;
