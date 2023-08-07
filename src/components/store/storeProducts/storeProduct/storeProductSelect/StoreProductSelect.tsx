import { IProductSizeOption } from "../../../../../interfaces/IProduct";
import "./StoreProductSelect.css";

interface StoreProductSelectProps {
  sizes: IProductSizeOption[];
}

function StoreProductSelect({ sizes }: StoreProductSelectProps) {
  return (
    <select className="store-product-select">
      <option className="store-product-select-option">Välj storlek...</option>
      {sizes.map((size) => (
        <option>{size.weight}</option>
      ))}
    </select>
  );
}

export default StoreProductSelect;
