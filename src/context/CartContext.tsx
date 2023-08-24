import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { IProductSizeOption } from "../interfaces/IProduct";
import { IOrder, IProductCart } from "../interfaces/ICart";

interface ICartContext {
  order: IOrder;
  setOrder: Dispatch<SetStateAction<IOrder>>;
  totalProducts: number;
}

export const CartContext = createContext<ICartContext>({
  order: {
    name: "",
    address: "",
    phone: "",
    products: [] as IProductCart[],
  },
  setOrder: () => {},
  totalProducts: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState({
    name: "",
    address: "",
    phone: "",
    products: [] as IProductCart[],
  });

  let totalProducts = 0;

  order.products.forEach((product) => {
    totalProducts += product.quantity;
  });

  return (
    <CartContext.Provider value={{ order, setOrder, totalProducts }}>
      {children}
    </CartContext.Provider>
  );
};
