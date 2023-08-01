import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { getHeaders } from "../../services/headers";

function NavBar() {
  const headers = getHeaders();

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
        <div className="navbar-image">
          <Link to="/">
            <img src="images/Stjarnorter_logga1.png" />
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-headers">{renderHeaders()}</div>
          <div className="navbar-icon">
            <ShoppingCartOutlined
              style={{
                fontSize: "40px",
                color: "white",
                marginLeft: "80px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
