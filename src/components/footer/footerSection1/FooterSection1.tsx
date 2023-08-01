import "./FooterSection1.css";
import { Link } from "react-router-dom";

function FooterSection1() {
  return (
    <div className="footer-section-1">
      <Link to="/">
        <img src="images/stjarnorter.png" />
      </Link>
      <div className="footer-section-1-about">
        <h1>Ett självklart val för en bättre hälsa</h1>
        <br />
        <p>
          Välkommen till Stjärnörter vi erbjuder både behandlingar och produkter
          för naturligt välbefinnande. Upptäck vårt sortiment av handgjorda
          örtblandningar, kryddor och teer, samtidigt som du kan boka
          behandlingar för både människor och djur.
          <br />
          <br />
          Låt oss guida dig till en holistisk upplevelse av hälsa och harmoni.
        </p>
      </div>
    </div>
  );
}

export default FooterSection1;
