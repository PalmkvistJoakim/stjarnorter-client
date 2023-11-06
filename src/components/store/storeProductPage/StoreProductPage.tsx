import "./StoreProductPage.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../services/products";
import Product from "../../common/products/product/Product";
import { useEffect } from "react";

function StoreProductPage() {
  const { productName } = useParams();
  const products = getProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProduct = products.find(
    (product) => product.path === productName
  );

  console.log(productName);

  return (
    <div className="store-product-page">
      {filteredProduct && <Product product={filteredProduct} page="single" />}
    </div>
  );
}

export default StoreProductPage;
