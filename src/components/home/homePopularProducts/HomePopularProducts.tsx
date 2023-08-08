import "./HomePopularProducts.css";
import HomePopularProduct from "./homePopularProduct/HomePopularProduct";
import { getProducts } from "../../../services/products";
import { getCategories } from "../../../services/categories";
import { useEffect, useState } from "react";

function HomePopularProducts() {
  const [isIpad, setIsIpad] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1023
  );

  useEffect(() => {
    const handleResize = () => {
      setIsIpad(window.innerWidth >= 768 && window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPopularProducts = () => {
    const products = getProducts();
    const categories = getCategories();

    const numProductsToDisplay = isIpad ? 3 : 4;

    const selectedProducts = [];

    for (const category of categories) {
      const productsInCategory = products.filter(
        (product) => product.category.name === category.name
      );

      for (const product of productsInCategory) {
        if (selectedProducts.length < numProductsToDisplay) {
          selectedProducts.push(product);
        } else {
          break;
        }
      }

      if (selectedProducts.length === numProductsToDisplay) {
        break;
      }
    }

    return selectedProducts.map((product) => (
      <HomePopularProduct key={product._id} product={product} />
    ));
  };

  // const filterCategories = categories.map((category) =>
  //   products.filter((product) => product.category.name === category.name)
  // );

  // const oneProduct = filterCategories.map((product) => product[0]);

  // return oneProduct.map((product) => (
  //   <HomePopularProduct key={product._id} product={product} />
  // ));
  // };

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
