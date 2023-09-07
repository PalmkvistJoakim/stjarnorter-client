import { ChangeEvent, useContext } from "react";
import "./Input.css";
import { CartContext } from "../../../context/CartContext";

interface InputProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
}

function Input({ label, name, value, placeholder }: InputProps) {
  const { order, setOrder } = useContext(CartContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOrder({ ...order, customer: { ...order.customer, [name]: value } });
  };

  return (
    <div className="input">
      <label style={{ display: "flex" }}>
        {label}
        <p style={{ color: "red" }}>*</p>
      </label>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
