import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { MenuOutlined, ShoppingCartOutlined } from "@mui/icons-material/";
import { getHeaders } from "../../services/headers";
import { useContext, useState } from "react";
import MobileHeaders from "./mobileHeaders/MobileHeaders";
import Cart from "../cart/Cart";
import { ResizeContext } from "../../context/ResizeContext";

function NavBar() {
  const headers = getHeaders();
  const { isMobile } = useContext(ResizeContext);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const renderHeaders = () => {
    return headers.map((header) => (
      <NavLink className="navbar-links" key={header.label} to={header.path}>
        {header.label}
      </NavLink>
    ));
  };

  const handleMobileHeaders = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {isMobile && showMobileNavbar && (
          <MobileHeaders
            showMobileNavbar={showMobileNavbar}
            setShowMobileNavbar={setShowMobileNavbar}
          />
        )}
        {isMobile && (
          <MenuOutlined
            onClick={handleMobileHeaders}
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          />
        )}
        <Link to="/">
          <img src="images/Stjarnorter_logga1.png" />
        </Link>
        <div className="navbar-headers">
          {!isMobile && renderHeaders()}
          {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
          <ShoppingCartOutlined
            onClick={handleCart}
            style={{
              fontSize: "30px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
