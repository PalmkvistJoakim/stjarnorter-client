import "./Products.css";
import { getProducts } from "../../../services/products";
import { getCategories } from "../../../services/categories";
import { useEffect, useState } from "react";
import Product from "./product/Product";
import { useParams } from "react-router-dom";

interface ProductsProps {
  page: "popular" | "store" | "single";
}

function Products({ page }: ProductsProps) {
  const products = getProducts();
  const categories = getCategories();
  const { categoryName } = useParams();
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
      <Product key={product._id} product={product} page="popular" />
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

  const renderProducts = (categoryName: string | undefined) => {
    const filterProducts = products.filter(
      (product) => product.category.path === `/${categoryName}`
    );
    return filterProducts.map((product) => (
      <Product product={product} page="store" />
    ));
  };

  return (
    <div className="products">
      {page === "popular"
        ? renderPopularProducts()
        : renderProducts(categoryName)}
    </div>
  );
}

export default Products;
