import "./StoreProductPage.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/products";
import Product from "../../common/products/product/Product";

function StoreProductPage() {
  const { productName } = useParams();
  const products = getProducts();

  const filteredProduct = products.find(
    (product) => product.name.toLowerCase() === productName
  );

  return (
    <div className="store-product-page">
      {filteredProduct && <Product product={filteredProduct} page="single" />}
    </div>
  );
}

export default StoreProductPage;
