import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { MenuOutlined, ShoppingCartOutlined } from "@mui/icons-material/";
import { getHeaders } from "../../services/headers";
import { useEffect, useState } from "react";

function NavBar() {
  const headers = getHeaders();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderHeaders = () => {
    return headers.map((header) => (
      <NavLink className="navbar-links" key={header.label} to={header.path}>
        {header.label}
      </NavLink>
    ));
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {isMobile && (
          <MenuOutlined style={{ fontSize: "30px", color: "white" }} />
        )}
        <Link to="/">
          <img src="images/Stjarnorter_logga1.png" />
        </Link>
        <div className="navbar-headers">
          {!isMobile && renderHeaders()}
          <ShoppingCartOutlined
            style={{
              fontSize: "30px",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
