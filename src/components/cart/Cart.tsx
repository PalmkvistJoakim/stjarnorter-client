import "./Cart.css";
import { Dispatch, SetStateAction, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./cartProduct/CartProduct";
import { IProductCart } from "../../interfaces/ICart";
import { Link } from "react-router-dom";
import Checkout from "./checkout/Checkout";

interface CartProps {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

function Cart({ showCart, setShowCart }: CartProps) {
  const {
    order,
    totalProducts,
    totalPrice,
    totalWeight,
    calculateShippingCost,
    calculateToFreeShipping,
    totalCost,
  } = useContext(CartContext);
  const { products } = order;

  const renderCartProducts = () => {
    return products.map((product) => (
      <CartProduct
        key={`${product._id}-${product.selectedWeight?.weight}`}
        product={product}
      />
    ));
  };

  const handleCloseCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="cart">
      <div className="cart-top">
        <div className="cart-top-container">
          <p>Varukorg ({totalProducts})</p>
          <p onClick={handleCloseCart}>X</p>
        </div>
      </div>
      <div className="cart-products">
        {products.length === 0 ? (
          <p style={{ fontStyle: "italic" }}>Din varukorg är tom!</p>
        ) : (
          renderCartProducts()
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-bottom-price" style={{ marginBottom: "6px" }}>
          <p>Produkter</p>
          <p>{totalPrice(products)} kr</p>
        </div>
        <div className="cart-bottom-price">
          <p>Frakt</p>
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
        <p className="cart-bottom-price-shipping">
          {calculateToFreeShipping()}
        </p>
        <div className="cart-bottom-price" style={{ marginTop: "10px" }}>
          <p style={{ fontWeight: "bold" }}>Totalt</p>
          <p style={{ fontWeight: "bold" }}>{totalCost()} kr</p>
        </div>
        <Link to="/checkout">
          <button onClick={handleCloseCart}>Till kassan</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
