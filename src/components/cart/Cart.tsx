import "./Cart.css";
import { Dispatch, SetStateAction, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./cartProduct/CartProduct";
import { IProductCart } from "../../interfaces/ICart";
import { Link } from "react-router-dom";

interface CartProps {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}

function Cart({ showCart, setShowCart }: CartProps) {
  const { order, totalProducts } = useContext(CartContext);
  const { products } = order;

  const renderCartProducts = () => {
    return products.map((product) => (
      <CartProduct
        key={`${product._id}-${product.selectedWeight?.weight}`}
        product={product}
      />
    ));
  };
  console.log(order);

  const totalPrice = (products: IProductCart[]) => {
    let totalPrice = 0;

    products.forEach((product) => {
      totalPrice += product.selectedWeight?.price * product.quantity || 0;
    });

    return totalPrice;
  };

  const totalWeight = (products: IProductCart[]) => {
    let totalWeight = 0;

    products.forEach((product) => {
      totalWeight += product.selectedWeight.weight * product.quantity || 0;
    });

    return totalWeight;
  };

  const handleCloseCart = () => {
    setShowCart(!showCart);
  };

  const shippingPrices = [
    { maxWeight: 250, price: 54 },
    { maxWeight: 500, price: 60 },
    { maxWeight: 1000, price: 69 },
    { maxWeight: Infinity, price: 99 },
  ];

  const freeShipping = 675;

  const calculateShippingCost = (weightInGrams: number) => {
    if (products.length === 0) {
      return 0;
    }

    if (totalPrice(products) >= freeShipping) {
      return 0;
    }

    const shippingOption = shippingPrices.find(
      (option) => weightInGrams <= option.maxWeight
    );

    if (shippingOption) {
      return shippingOption.price;
    } else {
      return 0;
    }
  };

  const calculateToFreeShipping = () => {
    const leftToFreeShipping = freeShipping - totalPrice(products);
    if (leftToFreeShipping <= 0) return null;
    return `${leftToFreeShipping} kr kvar till fri frakt`;
  };

  const totalCost = () => {
    const totalCost =
      totalPrice(products) + calculateShippingCost(totalWeight(products));

    return totalCost;
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
          <button>Till kassan</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
