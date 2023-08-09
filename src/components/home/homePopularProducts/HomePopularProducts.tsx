import "./HomePopularProducts.css";
import Products from "../../common/products/Products";

function HomePopularProducts() {
  return (
    <div className="home-popular-products">
      <p className="home-popular-products-header">Populära Produkter</p>
      <Products page="popular" />
    </div>
  );
}

export default HomePopularProducts;
