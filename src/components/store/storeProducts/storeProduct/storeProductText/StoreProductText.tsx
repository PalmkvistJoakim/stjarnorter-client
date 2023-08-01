import { IProduct } from "../../../../../interfaces/IProduct";
import "./StoreProductText.css";

interface StoreProductTextProps {
  product: IProduct;
}
function StoreProductText({ product }: StoreProductTextProps) {
  const { category, name, description, contents } = product;

  return (
    <div className="store-product-text">
      <p style={{ textTransform: "uppercase" }}>{category.name}</p>
      <h1 style={{ fontSize: "30px" }}>{name}</h1>
      <p className="store-product-text-desc-con">{description}</p>
      <p className="store-product-text-desc-con">{contents}</p>
    </div>
  );
}

export default StoreProductText;
