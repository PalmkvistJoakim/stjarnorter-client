import BackgroundWithDescription from "../common/backgroundWithDescription/BackgroundWithDescription";
import "./Store.css";
import StoreCategories from "./storeCategories/StoreCategories";
import { useEffect } from "react";
import StoreShipping from "./storeShipping/StoreShipping";

function Store() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storeDescription = {
    label: "Våra produkter",
    description:
      "Stjärnörter - din e-handel för naturligt välbefinnande. Upptäck vårt noggrant utvalda sortiment som är skapat med omsorgsfullt utvalda naturliga råvaror. Varje produkt är framtagen för att främja välmående och balans i både kropp och själ.  Vår passion för naturens krafter leder oss till en värld av helande och hälsa - välkommen till vår butik!",
    img: "images/MensesCrampEliminator_1800x1200.jpg",
  };

  return (
    <div className="store">
      <BackgroundWithDescription
        label={storeDescription.label}
        description={storeDescription.description}
        img={storeDescription.img}
      />
      <StoreCategories />
      <StoreShipping />
    </div>
  );
}

export default Store;
