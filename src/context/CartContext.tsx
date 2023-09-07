import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { ICustomer, IOrder, IProductCart, ISummary } from "../interfaces/ICart";
import { getDatas } from "../services/dataService";

interface ICartContext {
  order: IOrder;
  setOrder: Dispatch<SetStateAction<IOrder>>;
  totalProducts: number;
  totalPrice: (products: IProductCart[]) => number;
  totalWeight: (products: IProductCart[]) => number;
  calculateShippingCost: (weightInGrams: number) => number;
  calculateToFreeShipping: () => string | null;
  totalCost: () => number;
}

export const CartContext = createContext<ICartContext>({
  order: {
    customer: {} as ICustomer,
    products: [] as IProductCart[],
    summary: {} as ISummary,
  },
  setOrder: () => {},
  totalProducts: 0,
  totalPrice: (products: IProductCart[]) => 0,
  totalWeight: (products: IProductCart[]) => 0,
  calculateShippingCost: (weightInGrams: number) => 0,
  calculateToFreeShipping: () => null,
  totalCost: () => 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<IOrder>({
    customer: {} as ICustomer,
    products: [] as IProductCart[],
    summary: {} as ISummary,
  });

  const { products, summary } = order;

  // const getOrders = async () => {
  //   const { data } = await getDatas("orders");
  //   setOrder(data);
  // };

  // useEffect(() => {
  //   getOrders();
  // }, []);

  let totalProducts = 0;

  products.forEach((product) => {
    totalProducts += product.quantity;
  });

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

  summary.totalQuantity = totalProducts;
  summary.shippingCost = calculateShippingCost(totalWeight(products));
  summary.totalAmount = totalCost();

  console.log(order);
  return (
    <CartContext.Provider
      value={{
        order,
        setOrder,
        totalProducts,
        totalPrice,
        totalWeight,
        calculateShippingCost,
        calculateToFreeShipping,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
