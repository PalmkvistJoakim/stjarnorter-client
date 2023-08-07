import { ChangeEvent, useState } from "react";
import { IProduct, IProductSizeOption } from "../../../../interfaces/IProduct";
import "./HomePopularProduct.css";
import { Link } from "react-router-dom";
import { AddShoppingCartOutlined } from "@mui/icons-material/";

interface HomePopularProductProps {
  product: IProduct;
}

function HomePopularProduct({ product }: HomePopularProductProps) {
  const [selectedWeight, setSelectedWeight] =
    useState<IProductSizeOption | null>(null);

  const { path, img, category, name, sizes } = product;

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === "") {
      setSelectedWeight(null);
    } else {
      const selectedSize = JSON.parse(selectedValue);
      setSelectedWeight(selectedSize);
    }
  };

  const renderSelect = () => {
    return (
      <select
        onChange={handleSelectChange}
        className="home-popular-product-select"
      >
        <option value="">Välj storlek...</option>
        {sizes.map((size, index) => (
          <option
            className="home-popular-product-option"
            key={index}
            value={JSON.stringify(size)}
          >
            {size.weight}
          </option>
        ))}
      </select>
    );
  };

  const renderPrice = () => {
    if (selectedWeight) return selectedWeight.price;
    else {
      return product.sizes[0].price;
    }
  };

  console.log(selectedWeight);

  return (
    <div className="home-popular-product">
      <Link className="home-popular-product-links" to={path}>
        <img src={img} />
        <div className="home-popular-product-text">
          <p>{category.name}</p>
          <h1>{name}</h1>
        </div>
      </Link>
      {renderSelect()}
      <div className="home-popular-product-footer">
        <div className="home-popular-product-price">
          {!selectedWeight && <p>fr.</p>}
          <span className="home-popular-product-number">{renderPrice()}</span>
          <p style={{ color: "#133a1b", fontSize: "16px" }}>kr</p>
        </div>
        <div className="home-popular-product-cart">
          <AddShoppingCartOutlined
            style={{ color: "White", fontSize: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePopularProduct;
