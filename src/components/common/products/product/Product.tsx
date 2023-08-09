import "./Product.css";
import { ChangeEvent, useEffect, useState } from "react";
import { IProduct, IProductSizeOption } from "../../../../interfaces/IProduct";
import { Link } from "react-router-dom";
import { AddShoppingCartOutlined } from "@mui/icons-material/";

interface ProductProps {
  product: IProduct;
  page: "popular" | "store" | "single";
}

function Product({ product, page }: ProductProps) {
  const [selectedWeight, setSelectedWeight] =
    useState<IProductSizeOption | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { path, img, category, name, sizes, description, contents } = product;

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
      <select onChange={handleSelectChange} className="product-select">
        <option value="">Välj storlek...</option>
        {sizes.map((size, index) => (
          <option
            className="product-option"
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
  return (
    <div className={`product ${page}`}>
      <div className="product-container">
        <Link
          className={`product-links ${page === "single" ? "disabled" : ""}`}
          to={path}
        >
          <img src={img} />
          <div className="product-text">
            <p>{category.name}</p>
            <h1>{name}</h1>
          </div>
        </Link>
        {page === "store" && (
          <div className="product-description">
            <p>{description}</p>
            <p>{contents}</p>
          </div>
        )}
        <div className="product-rightside">
          {page === "single" && isDesktop && (
            <div className="product-names">
              <p>{category.name}</p>
              <h1>{name}</h1>
            </div>
          )}
          {renderSelect()}
          <div className="product-footer">
            <div className="product-price">
              {!selectedWeight && <p>fr.</p>}
              <span className="product-number">{renderPrice()}</span>
              <p style={{ color: "#133a1b", fontSize: "16px" }}>kr</p>
            </div>
            <div className="product-cart">
              <AddShoppingCartOutlined
                style={{ color: "White", fontSize: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {page === "single" && (
        <div className="product-description">
          <p
            style={{
              fontSize: "10px",
              marginBottom: "4px",
              paddingTop: "10px",
              borderTop: "1px solid #f1f1f1",
            }}
          >
            BESKRIVNING
          </p>
          <p style={{ marginBottom: "10px" }}>{description}</p>
          <p
            style={{
              fontSize: "10px",
              marginBottom: "4px",
              paddingTop: "10px",
              borderTop: "1px solid #f1f1f1",
            }}
          >
            INNEHÅLL
          </p>
          <p
            style={{
              borderBottom: "1px solid #f1f1f1",
              paddingBottom: "30px",
            }}
          >
            {contents}
          </p>
          <p
            style={{
              fontSize: "10px",
              marginBottom: "4px",
              paddingTop: "30px",
            }}
          >
            FRAKT
          </p>
          <p style={{ marginBottom: "10px" }}>
            fjskgsnkf fdskfdnskl fsdkfn lsfnskf
          </p>
          <p
            style={{
              fontSize: "10px",
              marginBottom: "4px",
              paddingTop: "10px",
              borderTop: "1px solid #f1f1f1",
            }}
          >
            BETALNING
          </p>
          <p
            style={{
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "1px solid #f1f1f1",
            }}
          >
            fdnsklfnsd fdskfdns fdskn kls nfsfsdfs
          </p>
        </div>
      )}
    </div>
  );
}

export default Product;

// <p className="product-category">{category.name}</p>
// <h1>{name}</h1>
// PRIS - storlek sidan om select eller "knappar"
//Lägg i varukorg
