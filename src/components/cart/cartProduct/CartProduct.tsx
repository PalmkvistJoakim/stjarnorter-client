import "./CartProduct.css";
import { useContext } from "react";
import { IProductCart } from "../../../interfaces/ICart";
import { CartContext } from "../../../context/CartContext";

interface CartProductProps {
  product: IProductCart;
}

function CartProduct({ product }: CartProductProps) {
  const { img, category, name, selectedWeight, quantity } = product;
  const { order, setOrder } = useContext(CartContext);
  console.log(product);

  const incrementQuantity = () => {
    product.quantity++;
    setOrder((prevOrder) => ({
      ...prevOrder,
      products: [...prevOrder.products],
    }));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      product.quantity--;
      setOrder((prevOrder) => ({
        ...prevOrder,
        products: [...prevOrder.products],
      }));
    } else {
      const updatedProducts = order.products.filter(
        (p) =>
          p._id !== product._id ||
          p.selectedWeight?.weight !== product.selectedWeight?.weight
      );
      setOrder((prevOrder) => ({
        ...prevOrder,
        products: updatedProducts,
      }));
    }
  };

  const totalPrice = selectedWeight.price * quantity;

  return (
    <div className="cart-product">
      <img src={img} />
      <div className="cart-product-container">
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            marginTop: "10px",
          }}
        >
          {category.name}
        </p>
        <h1>{name}</h1>
        <div className="cart-product-price">
          <p style={{ marginRight: "4px" }}>{selectedWeight?.price} kr /</p>
          <p>{selectedWeight?.weight}</p>
        </div>
        <div className="cart-product-totalprice">
          <div className="cart-product-buttons">
            <button onClick={decrementQuantity}>-</button>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                pointerEvents: "none",
                cursor: "default",
              }}
            >
              {quantity}
            </button>
            <button onClick={incrementQuantity}>+</button>
          </div>
          <p>{totalPrice} kr</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
