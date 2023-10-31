import "./StoreCategories.css";
import StoreCategory from "./storeCategory/StoreCategory";
import { getCategories } from "../../../services/categories";

function StoreCategories() {
  const categories = getCategories();

  const renderCategories = () => {
    return categories.map((category) => (
      <StoreCategory
        key={category._id}
        name={category.name}
        path={category.path}
        img={category.img}
      />
    ));
  };

  return <div className="store-categories">{renderCategories()}</div>;
}

export default StoreCategories;
