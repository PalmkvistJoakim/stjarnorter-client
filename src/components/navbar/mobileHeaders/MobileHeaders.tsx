import { Link } from "react-router-dom";
import { getHeaders } from "../../../services/headers";
import "./MobileHeaders.css";
import { Dispatch, SetStateAction, useContext } from "react";
import { CartContext } from "../../../context/CartContext";

interface MobileHeadersProps {
  showMobileNavbar: boolean;
  setShowMobileNavbar: Dispatch<SetStateAction<boolean>>;
}

function MobileHeaders({
  showMobileNavbar,
  setShowMobileNavbar,
}: MobileHeadersProps) {
  const headers = getHeaders();
  const { totalProducts } = useContext(CartContext);

  const renderHeaders = () => {
    return headers.map((header) => (
      <Link
        key={header.label}
        onClick={closeMobileHeaders}
        className="mobile-headers-links"
        to={header.path}
      >
        {header.label}
      </Link>
    ));
  };

  const closeMobileHeaders = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  return (
    <div className="mobile-headers">
      <div className="mobile-headers-navbar">
        <Link onClick={closeMobileHeaders} to="/">
          <img src="images/Stjarnorter_logga1.png" />
        </Link>
        <p onClick={closeMobileHeaders}>X</p>
      </div>
      <div className="mobile-headers-headers">{renderHeaders()}</div>
      <div className="mobile-headers-cart">
        <Link
          className="mobile-headers-links"
          to="/varukorg"
          style={{ fontSize: "14px" }}
        >
          Varukorg ({totalProducts})
        </Link>
      </div>
    </div>
  );
}

export default MobileHeaders;
