import "./Product.css";
import { ChangeEvent, useContext, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { ResizeContext } from "../../../../context/ResizeContext";
import { IProduct, IProductSizeOption } from "../../../../interfaces/IProduct";
import { IProductCart } from "../../../../interfaces/ICart";
import { AddShoppingCartOutlined } from "@mui/icons-material/";
import { Link } from "react-router-dom";

interface ProductProps {
  product: IProduct;
  page: "popular" | "store" | "single";
}

function Product({ product, page }: ProductProps) {
  const [selectedWeight, setSelectedWeight] =
    useState<IProductSizeOption | null>(null);
  const [selectedWeightError, setSelectedWeightError] = useState(false);
  const { order, setOrder } = useContext(CartContext);
  const { isDesktop } = useContext(ResizeContext);

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
      <select
        onChange={handleSelectChange}
        className={`product-select ${selectedWeightError ? "error" : ""}`}
      >
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

  // const addToCart = (product: IProduct) => {
  //   if (selectedWeight) {
  //     const productToAdd: IProductCart = {
  //       ...product,
  //       selectedWeight: selectedWeight,
  //       quantity: 1,
  //     };

  //     const existingProductWithWeightIndex = order.products.findIndex(
  //       (product) =>
  //         product._id === productToAdd._id &&
  //         product.selectedWeight?.weight === productToAdd.selectedWeight?.weight
  //     );

  //     if (existingProductWithWeightIndex !== -1) {
  //       const existingProductWithWeight = order.products[
  //         existingProductWithWeightIndex
  //       ] as IProductCart;
  //       existingProductWithWeight.quantity += 1;

  //       const updatedProducts = [...order.products];
  //       updatedProducts[existingProductWithWeightIndex] =
  //         existingProductWithWeight;

  //       setOrder({ ...order, products: updatedProducts });
  //     } else {
  //       setOrder({
  //         ...order,
  //         products: [...order.products, productToAdd],
  //       });
  //     }
  //   } else {
  //     setSelectedWeightError(!selectedWeightError);
  //     setTimeout(() => {
  //       setSelectedWeightError(false);
  //     }, 200);
  //   }
  // };

  const addToCart = (product: IProduct) => {
    if (!selectedWeight) {
      handleSelectedWeightError();
      return;
    }

    const productToAdd: IProductCart = {
      ...product,
      selectedWeight: selectedWeight,
      quantity: 1,
    };

    const existingProductIndex = findExistingProductIndex(productToAdd);

    if (existingProductIndex !== -1) {
      incrementProductQuantity(existingProductIndex);
    } else {
      addNewProductToCart(productToAdd);
    }
  };

  const handleSelectedWeightError = () => {
    setSelectedWeightError(!selectedWeightError);
    setTimeout(() => {
      setSelectedWeightError(false);
    }, 200);
  };

  const findExistingProductIndex = (productToAdd: IProductCart) => {
    return order.products.findIndex(
      (product) =>
        product._id === productToAdd._id &&
        product.selectedWeight?.weight === productToAdd.selectedWeight?.weight
    );
  };

  const incrementProductQuantity = (index: number) => {
    const existingProductWithWeight = order.products[index] as IProductCart;
    existingProductWithWeight.quantity += 1;

    const updatedProducts = [...order.products];
    updatedProducts[index] = existingProductWithWeight;

    setOrder({ ...order, products: updatedProducts });
  };

  const addNewProductToCart = (newProduct: IProductCart) => {
    setOrder({
      ...order,
      products: [...order.products, newProduct],
    });
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
                onClick={() => addToCart(product)}
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
            0-250g - 54:-
            <br />
            251-500g - 60:-
            <br />
            501-1000g - 69:-
            <br />
            över 1000g - Fri frakt
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
          <img src="images/Swish Logo Secondary Light-BG SVG.svg" />
        </div>
      )}
    </div>
  );
}

export default Product;
