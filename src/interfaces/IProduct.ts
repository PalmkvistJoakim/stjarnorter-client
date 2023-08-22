import { ICategory } from "./ICategory";

export interface IProductSizeOption {
  weight: string;
  price: number;
}

export interface IProduct {
  _id: string;
  name: string;
  path: string;
  img: string;
  description: string;
  contents: string;
  sizes: IProductSizeOption[];
  category: ICategory;
  selectedWeight?: IProductSizeOption;
}
