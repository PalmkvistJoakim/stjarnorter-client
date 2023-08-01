import "./Button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  path: string;
}

//useNavigate eller Link?
function Button({ label, path }: ButtonProps) {
  return (
    <div className="button">
      <Link to={path}>
        <button>{label}</button>
      </Link>
    </div>
  );
}

export default Button;
