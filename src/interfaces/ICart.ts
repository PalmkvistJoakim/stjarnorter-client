import { IProduct, IProductSizeOption } from "./IProduct";

export interface IProductCart extends IProduct {
  quantity: number;
  selectedWeight: IProductSizeOption;
}

export interface IOrder {
  name: string;
  address: string;
  phone: string;
  products: IProductCart[];
}
