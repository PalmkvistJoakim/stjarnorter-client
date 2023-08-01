import BackgroundWithDescription from "../common/backgroundWithDescription/BackgroundWithDescription";
import "./Store.css";
import StoreCategories from "./storeCategories/StoreCategories";
import { useEffect } from "react";

function Store() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storeDescription = {
    label: "Våra produkter",
    description:
      "Stjärnörter - din e-handel för naturligt välbefinnande. Upptäck vårt noggrant utvalda sortiment av örtblandningar, kryddor och teer som är skapade med omsorgsfullt utvalda naturliga råvaror. Varje produkt är framtagen för att främja välmående och balans i både kropp och själ. Utforska vårt sortiment och ta steget mot en hälsosammare livsstil med Stjärnörter. Vår passion för naturens krafter leder oss till en värld av helande och hälsa - välkommen till vår butik!",
    img: "images/MensesCrampEliminator_1800x1200.webp",
  };

  return (
    <div className="store">
      <BackgroundWithDescription
        label={storeDescription.label}
        description={storeDescription.description}
        img={storeDescription.img}
      />
      <StoreCategories />
    </div>
  );
}

export default Store;
