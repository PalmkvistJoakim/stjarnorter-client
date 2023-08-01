import "./StoreCategory.css";
import { Link } from "react-router-dom";

interface StoreCategoryProps {
  name: string;
  path: string;
  img: string;
}

function StoreCategory({ name, path, img }: StoreCategoryProps) {
  return (
    <Link to={`/butik${path}`}>
      <div className="store-category">
        <img src={img} />
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default StoreCategory;
