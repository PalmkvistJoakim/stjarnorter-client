import { IProductSizeOption } from "../../../../../interfaces/IProduct";
import "./StoreProductSelect.css";

interface StoreProductSelectProps {
  size: IProductSizeOption[];
}

function StoreProductSelect({ size }: StoreProductSelectProps) {
  return (
    <select className="store-product-select">
      <option className="store-product-select-option">Välj storlek...</option>
      {size.map((s) => (
        <option>{s.weight}</option>
      ))}
    </select>
  );
}

export default StoreProductSelect;
