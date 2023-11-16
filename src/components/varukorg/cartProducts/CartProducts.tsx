import "./CartProducts.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartProduct from "./cartProduct/CartProduct";

function CartProducts() {
  const { order } = useContext(CartContext);
  const { products } = order;

  const renderCartProducts = () => {
    return products.map((product) => (
      <CartProduct
        key={`${product._id}-${product.selectedWeight?.weight}`}
        product={product}
      />
    ));
  };

  return (
    <div className="cart-products">
      {products.length === 0 ? (
        <p style={{ fontStyle: "italic", textAlign: "center" }}>
          Din varukorg är tom!
        </p>
      ) : (
        renderCartProducts()
      )}
    </div>
  );
}

export default CartProducts;
