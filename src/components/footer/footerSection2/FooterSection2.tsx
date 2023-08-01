import "./FooterSection2.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getCategories } from "../../../services/categories";
import { getTreatments } from "../../../services/treatments";

function FooterSection2() {
  const categories = getCategories();
  const treatments = getTreatments();

  const renderCategories = () => {
    return categories.map((category) => (
      <Link className="footer-section-2-links" to={`/butik${category.path}`}>
        <p>{category.name}</p>
      </Link>
    ));
  };

  const renderTreatments = () => {
    return treatments.map((treatment) => (
      <Link className="footer-section-2-links" to={treatment.path}>
        <p>{treatment.name}</p>
      </Link>
    ));
  };

  return (
    <div className="footer-section-2">
      <div className="footer-section-2-upper">
        <div>
          <h1>PRODUKTER</h1>
          {renderCategories()}
        </div>
        <div>
          <h1>KONTAKT</h1>
          <p>
            ina@stjarnorter.se
            <br />
            +46 709 167 157
            <br />
            <br />
            Stjärnörter
            <br />
            Adinalvägen 174, Färlöv
          </p>
        </div>
      </div>
      <div className="footer-section-2-downer">
        <div>
          <h1>BEHANDLINGAR</h1>
          {renderTreatments()}
        </div>
        <div>
          <h1>FÖLJ OSS</h1>
          <a
            href="https://www.facebook.com/profile.php?id=100064067171745"
            target="_blank"
          >
            <FaFacebook
              style={{
                fontSize: "32px",
                marginRight: "14px",
                color: "black",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/sjalensstjarnorter/"
            target="_blank"
          >
            <FaInstagram style={{ fontSize: "32px", color: "black" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSection2;
