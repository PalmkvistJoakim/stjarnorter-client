import "./NavigationButton.css";
import { Link } from "react-router-dom";

interface NavigationButtonProps {
  label: string;
  path: string;
  location: string;
}

function NavigationButton({ label, path, location }: NavigationButtonProps) {
  return (
    <div className={`navigation-button ${location}`}>
      <Link to={path}>
        <button>{label}</button>
      </Link>
    </div>
  );
}

export default NavigationButton;
