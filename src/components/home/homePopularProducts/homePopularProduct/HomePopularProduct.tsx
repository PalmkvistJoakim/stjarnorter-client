import "./HomePopularProduct.css";
import { Link } from "react-router-dom";

interface HomePopularProductProps {
  name: string;
  path: string;
  img: string;
}

function HomePopularProduct({ name, path, img }: HomePopularProductProps) {
  return (
    <div className="home-popular-product">
      <Link to={path}>
        <img src={img} />
        <button>{name}</button>
      </Link>
    </div>
  );
}

export default HomePopularProduct;
