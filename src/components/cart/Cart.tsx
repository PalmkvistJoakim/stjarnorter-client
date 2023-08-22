import "./Cart.css";
import { Dispatch, SetStateAction, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./cartProduct/CartProduct";
import { IProductCart } from "../../interfaces/ICart";

interface CartProps {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

function Cart({ showCart, setShowCart }: CartProps) {
  const { order } = useContext(CartContext);
  const { products } = order;

  let totalProducts = 0;

  products.forEach((product) => {
    totalProducts += product.quantity;
  });

  const renderCartProducts = () => {
    return products.map((product) => (
      <CartProduct
        key={`${product._id}-${product.selectedWeight?.weight}`}
        product={product}
      />
    ));
  };
  console.log(order);

  function totalPrice(products: IProductCart[]) {
    let totalPrice = 0;

    products.forEach((product) => {
      totalPrice += product.selectedWeight?.price * product.quantity || 0;
    });

    return totalPrice;
  }

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
        <div className="cart-bottom-price">
          <p>Produkter</p>
          <p>{totalPrice(products)} kr</p>
        </div>
        <div className="cart-bottom-price">
          <p>Frakt</p>
          <p>kr</p>
        </div>
        <p>kr kvar till fri frakt</p>
        <div className="cart-bottom-price">
          <h1>Totalt</h1>
          <h1>kr</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
