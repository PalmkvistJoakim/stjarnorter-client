import { useContext } from "react";
import { IProductCart } from "../../../../interfaces/ICart";
import "./CartProduct.css";
import { CartContext } from "../../../../context/CartContext";

interface CartProductProps {
  product: IProductCart;
}

function CartProduct({ product }: CartProductProps) {
  const { img, category, name, selectedWeight, quantity } = product;
  const { order, setOrder } = useContext(CartContext);

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
      <div className="cart-product-text">
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          {category.name}
        </p>
        <div className="cart-product-info">
          <h1>{name}</h1>
          <p style={{ marginRight: "4px", fontSize: "14px" }}>
            {selectedWeight?.price}kr / {selectedWeight?.weight}
          </p>
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
          <p style={{ fontWeight: "bold" }}>{totalPrice} kr</p>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
