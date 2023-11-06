import { useParams } from "react-router-dom";
import "./StoreProductsInfo.css";

function StoreProductsInfo() {
  const { categoryName } = useParams();

  const productsInfo = [
    {
      name: "örtteer",
      info: (
        <p>
          <span style={{ fontStyle: "italic" }}>Information:</span>
          <br />
          Teérna är tänkta att vara ett komplement till din dagliga strävan att
          vara i balans. De är unikt blandade efter uråldriga recept, då
          örtmedicin hade en framstående position i vårt samhälle.
          <br />
          <span style={{ fontWeight: "bold" }}>
            De är dock inte att betrakta som något läkemedel, utan vid misstanke
            om sjukdom, kontakta läkare.
          </span>
        </p>
      ),
      dosage: (
        <p>
          <span style={{ fontStyle: "italic" }}>Dosering:</span>
          <br />2 tsk som får dra i 10 min i ca 75 gradigt vatten (små bubblor i
          vattnet). Tänk på att låta teét dra under lock, då många örter har
          eteriska oljor som förångas, men under lock droppar tillbaka i
          koppen/grytan.
        </p>
      ),
    },
    {
      name: "örtblandningar",
      info: (
        <p>
          <span style={{ fontStyle: "italic" }}>Information:</span>
          <br />
          Jag erbjuder rådgivning via mail om vilken blandning som passar ditt
          djurs behov bäst om du är osäker.
          <br />
          Örtblandningarna är registrerade som fodertillskott hos
          Jordbruksverket.
          <br />
          <span style={{ fontWeight: "bold" }}>
            *Vissa av örterna har en sammandragande verkan och bör därför inte
            användas av gravida eller dräktiga djur. Kontakta oss då vi gör
            specialblandningar.
          </span>
        </p>
      ),
      dosage: (
        <p>
          <span style={{ fontStyle: "italic" }}>Dosering:</span>
          <br />1 msk/dag per 400kg häst.
          <br />1 krm/dag per 10 kg hund.
          <br />1 tsk/dag för människa.
          <br />
          Baserat på behov, 1-2 gånger per dag.
        </p>
      ),
    },
  ];

  const filteredProducts = productsInfo.filter(
    (product) => product.name === categoryName
  );

  return (
    <div className="store-products-info">
      <div className="store-products-info-container">
        {filteredProducts.map((product) => (
          <>
            <p style={{ marginBottom: "12px" }}>{product.info}</p>
            <p>{product.dosage}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default StoreProductsInfo;
