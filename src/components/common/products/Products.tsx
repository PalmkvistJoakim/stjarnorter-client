import "./Products.css";
import { getProducts } from "../../../services/products";
import { getCategories } from "../../../services/categories";
import { ResizeContext } from "../../../context/ResizeContext";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Product from "./product/Product";

interface ProductsProps {
  page: "popular" | "store" | "single";
}

function Products({ page }: ProductsProps) {
  const products = getProducts();
  const categories = getCategories();
  const { categoryName } = useParams();
  const { isIpad } = useContext(ResizeContext);

  //Här ska vi sätta in populära produkter istället..

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

  const renderProducts = (categoryName: string | undefined) => {
    const filterProducts = products.filter(
      (product) => product.category.path === `/${categoryName}`
    );
    return filterProducts.map((product) => (
      <Product key={product._id} product={product} page="store" />
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
