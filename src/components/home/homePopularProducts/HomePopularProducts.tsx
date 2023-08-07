import "./HomePopularProducts.css";
import HomePopularProduct from "./homePopularProduct/HomePopularProduct";
import { getProducts } from "../../../services/products";
import { getCategories } from "../../../services/categories";

function HomePopularProducts() {
  const renderPopularProducts = () => {
    const products = getProducts();
    const categories = getCategories();

    const filterCategories = categories.map((category) =>
      products.filter((product) => product.category.name === category.name)
    );

    const oneProduct = filterCategories.map((product) => product[0]);

    return oneProduct.map((product) => (
      <HomePopularProduct key={product._id} product={product} />
    ));
  };

  renderPopularProducts();

  return (
    <div className="home-popular-products">
      <p>Populära Produkter</p>
      <div className="home-popular-products-container">
        {renderPopularProducts()}
      </div>
    </div>
  );
}

export default HomePopularProducts;
