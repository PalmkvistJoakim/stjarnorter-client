import "./StoreProduct.css";
import { IProduct } from "../../../../interfaces/IProduct";
import StoreProductText from "./storeProductText/StoreProductText";
import StoreProductSelect from "./storeProductSelect/StoreProductSelect";
import { Link } from "react-router-dom";

interface StoreProductProps {
  product: IProduct;
}

function StoreProduct({ product }: StoreProductProps) {
  const { img, sizes, path } = product;

  return (
    <div className="store-product">
      <Link className="store-product-link" to={path}>
        <div className="store-product-image">
          <img src={img} />
        </div>
        <StoreProductText product={product} />
      </Link>
      <StoreProductSelect sizes={sizes} />
      <button>LÄGG I VARUKORG</button>
    </div>
  );
}

export default StoreProduct;
