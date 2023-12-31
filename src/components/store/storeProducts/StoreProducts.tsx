import "./StoreProducts.css";
import { useParams } from "react-router-dom";
import BackgroundWithDescription from "../../common/backgroundWithDescription/BackgroundWithDescription";
import { useEffect } from "react";
import Products from "../../common/products/Products";
import StoreShipping from "../storeShipping/StoreShipping";
import StoreProductsInfo from "./storeProductsInfo/StoreProductsInfo";

function StoreProducts() {
  const { categoryName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  const categoryDescriptions = [
    {
      label: "Örtteer",
      path: "örtteer",
      description:
        "Upptäck vårt unika sortiment av örtteer för chakrasystemet. Inspirerade av de gamla siarnas visdom från Indien, har vi skapat teer som främjar balans i kroppens energicentra - chakra. Varje te är noggrant sammansatt för att stärka de organ som är kopplade till varje livshjul.",
      img: "images/MensesCrampEliminator_1800x1200.jpg",
    },
    {
      label: "Kryddor",
      path: "kryddor",
      description:
        "Upptäck vår kollektion av varsamt hanterade örter, kryddor och salter - en naturlig smaksättning för din mat. Här finner du enbart äkta och naturliga ingredienser, utan smakförstärkare eller konstgjorda aromämnen. Vi delar ditt intresse för örternas läkande kraft och tillreder våra blandningar med omsorg, där örterna blir mer än bara kryddor.",
      img: "images/MensesCrampEliminator_1800x1200.jpg",
    },
    {
      label: "Salvor/Cerat",
      path: "salvor&cerat",
      description:
        "Upptäck vårt sortiment av egentillverkade salvor som stärker och skyddar huden. Vår Skinbalance-salva och Ringblomssalva är perfekta för både människor och djur. Skinbalance har blivit omtyckt för användning i ansiktet och är också populär för hundens hot spot och eksem. Ge din hud den omsorg den förtjänar med våra välgörande salvor och krämer.",
      img: "images/MensesCrampEliminator_1800x1200.jpg",
    },
    {
      label: "Örtblandningar",
      path: "örtblandningar",
      description:
        "Utforska vårt urval av färdiga örtblandningar, noggrant komponerade för olika behov och problem. Våra örter är varsamt pulveriserade för ökad upptagningsförmåga i kroppen och kan med fördel användas av både människor och hästar. Till häst blandas örtblandningen i fodret, medan du som människa kan tillsätta den i din morgonfil eller smoothie. ",
      img: "images/MensesCrampEliminator_1800x1200.jpg",
    },
  ];

  const renderDescriptions = (categoryName: string | undefined) => {
    const selectedCategory = categoryDescriptions.find(
      (category) => category.path === categoryName
    );

    if (selectedCategory)
      return (
        <BackgroundWithDescription
          label={selectedCategory.label}
          description={selectedCategory.description}
          img={selectedCategory.img}
        />
      );
  };

  return (
    <div className="store-products">
      {renderDescriptions(categoryName)}
      <div className="store-products-container">
        {categoryName !== "salvor&cerat" && <StoreProductsInfo />}
        <Products page="store" />
      </div>
      <StoreShipping />
    </div>
  );
}

export default StoreProducts;

// Behöver du vägledning? Vi erbjuder rådgivning via mail för att hjälpa dig hitta rätt blandning för ditt djurs behov. Våra örtblandningar är registrerade som fodertillskott hos Jordbruksverket.
