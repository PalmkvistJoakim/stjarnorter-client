import { Link } from "react-router-dom";
import { getHeaders } from "../../../services/headers";
import "./MobileHeaders.css";
import { Dispatch, SetStateAction } from "react";

interface MobileHeadersProps {
  showMobileNavbar: boolean;
  setShowMobileNavbar: Dispatch<SetStateAction<boolean>>;
}

function MobileHeaders({
  showMobileNavbar,
  setShowMobileNavbar,
}: MobileHeadersProps) {
  const headers = getHeaders();

  const renderHeaders = () => {
    return headers.map((header) => (
      <Link
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
    </div>
  );
}

export default MobileHeaders;
