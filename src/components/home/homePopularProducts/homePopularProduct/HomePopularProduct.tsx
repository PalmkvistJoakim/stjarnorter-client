import "./HomePopularProduct.css";
import { Link } from "react-router-dom";
import Button from "../../../common/button/Button";

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
      </Link>
      <Button label={name} path={path} />
    </div>
  );
}

export default HomePopularProduct;
