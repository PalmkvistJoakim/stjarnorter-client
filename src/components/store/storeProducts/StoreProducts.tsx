import "./StoreProducts.css";
import { useParams } from "react-router-dom";
import BackgroundWithDescription from "../../common/backgroundWithDescription/BackgroundWithDescription";
import { getProducts } from "../../../services/products";
import StoreProduct from "./storeProduct/StoreProduct";
import { useEffect } from "react";

function StoreProducts() {
  const { categoryName } = useParams();
  const products = getProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  const categoryDescriptions = [
    {
      label: "Örtteer",
      path: "örtteer",
      description:
        "Upptäck vårt unika sortiment av örtteer för chakrasystemet. Inspirerade av de gamla siarnas visdom från Indien, har vi skapat teer som främjar balans i kroppens energicentra - chakra. Varje te är noggrant sammansatt för att stärka de organ som är kopplade till varje livshjul. Njut av en kopp örtte i lugn och ro, med medvetenheten om att våra teer enbart består av naturliga råvaror. Ge dig själv den omtanke du förtjänar och låt våra örtteer bidra till ett hälsosamt välmående.",
      img: "images/MensesCrampEliminator_1800x1200.webp",
    },
    {
      label: "Kryddor",
      path: "kryddor",
      description:
        "Upptäck vår kollektion av varsamt hanterade örter, kryddor och salter - en naturlig smaksättning för din mat. Här finner du enbart äkta och naturliga ingredienser, utan smakförstärkare eller konstgjorda aromämnen. Vi delar ditt intresse för örternas läkande kraft och tillreder våra blandningar med omsorg, där örterna blir mer än bara kryddor. Ge din matlagning en extra touch av naturlig godhet och välj våra hälsosamma kryddor och salter. Låt smakerna av naturen berika din matupplevelse.",
      img: "images/MensesCrampEliminator_1800x1200.webp",
    },
    {
      label: "Salvor/Cerat",
      path: "salvor&cerat",
      description:
        "Upptäck vårt sortiment av egentillverkade salvor som stärker och skyddar huden. Vår Skinbalance-salva och Ringblomssalva är perfekta för både människor och djur. Skinbalance har blivit omtyckt för användning i ansiktet och är också populär för hundens hot spot och eksem. Ge din hud den omsorg den förtjänar med våra välgörande salvor och krämer.",
      img: "images/MensesCrampEliminator_1800x1200.webp",
    },
    {
      label: "Örtblandningar",
      path: "örtblandningar",
      description:
        "Utforska vårt urval av färdiga örtblandningar, noggrant komponerade för olika behov och problem. Våra örter är varsamt pulveriserade för ökad upptagningsförmåga i kroppen och kan med fördel användas av både människor och hästar. Till häst blandas örtblandningen i fodret, medan du som människa kan tillsätta den i din morgonfil eller smoothie. Behöver du vägledning? Vi erbjuder rådgivning via mail för att hjälpa dig hitta rätt blandning för ditt djurs behov. Våra örtblandningar är registrerade som fodertillskott hos Jordbruksverket.",
      img: "images/MensesCrampEliminator_1800x1200.webp",
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

  const renderProducts = (categoryName: string | undefined) => {
    const filterProducts = products.filter(
      (product) => product.category.path === `/${categoryName}`
    );
    return filterProducts.map((product) => <StoreProduct product={product} />);
  };

  return (
    <>
      {renderDescriptions(categoryName)}
      <div className="store-products">{renderProducts(categoryName)}</div>
    </>
  );
}

export default StoreProducts;
