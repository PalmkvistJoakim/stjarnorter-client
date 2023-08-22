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
}

export const CartContext = createContext<ICartContext>({
  order: {
    name: "",
    address: "",
    phone: "",
    products: [] as IProductCart[],
  },
  setOrder: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState({
    name: "",
    address: "",
    phone: "",
    products: [] as IProductCart[],
  });

  return (
    <CartContext.Provider value={{ order, setOrder }}>
      {children}
    </CartContext.Provider>
  );
};
