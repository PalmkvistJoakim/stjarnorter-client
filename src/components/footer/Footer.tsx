import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { getCategories } from "../../services/categories";
import { getTreatments } from "../../services/treatments";
import { ICategory } from "../../interfaces/ICategory";
import { ITreatment } from "../../interfaces/ITreatment";

function Footer() {
  const categories = getCategories();
  const treatments = getTreatments();

  const renderCategories = () => {
    return categories.map((category: ICategory) => (
      <Link
        key={category._id}
        className="footer-links"
        to={`/butik${category.path}`}
      >
        <p>{category.name}</p>
      </Link>
    ));
  };

  const renderTreatments = () => {
    return treatments.map((treatment: ITreatment) => (
      <Link key={treatment.name} className="footer-links" to={treatment.path}>
        <p>{treatment.name}</p>
      </Link>
    ));
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-inner-container">
          <div className="footer-logo">
            <Link to="/">
              <img src="images/stjarnorter.png" />
            </Link>
            <p>
              Stjärnörter &<br /> Själens Stjärna
            </p>
          </div>
          <div className="footer-description">
            <p>
              Välkommen till Stjärnörter vi erbjuder både behandlingar och
              produkter för naturligt välbefinnande. Upptäck vårt sortiment av
              handgjorda örtblandningar, kryddor och teer, samtidigt som du kan
              boka behandlingar för både människor och djur.
              <br />
              <br />
              Låt oss guida dig till en holistisk upplevelse av hälsa och
              harmoni.
            </p>
          </div>
        </div>
        <div className="footer-content">
          <div>
            <div>
              <h1>PRODUKTER</h1>
              {renderCategories()}
            </div>
            <div style={{ paddingTop: "19px" }}>
              <h1>BEHANDLINGAR</h1>
              {renderTreatments()}
            </div>
          </div>
          <div>
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
            <div>
              <h1>FÖLJ OSS</h1>
              <div className="footer-social">
                <a
                  href="https://www.facebook.com/profile.php?id=100064067171745"
                  target="_blank"
                >
                  <FaFacebook
                    style={{
                      fontSize: "32px",
                      marginRight: "14px",
                      color: "#011b10",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/sjalensstjarnorter/"
                  target="_blank"
                >
                  <FaInstagram style={{ fontSize: "32px", color: "#011b10" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
