import "./HomePopularProducts.css";
import HomePopularProduct from "./homePopularProduct/HomePopularProduct";

function HomePopularProducts() {
  const renderPopularProducts = () => {
    const popularProducts = [
      { name: "Strålande", path: "/butik", img: "images/Inate2-1.jpg" },
      { name: "Rörelse", path: "/butik", img: "images/Inate2-1.jpg" },
      { name: "Grillkrydda", path: "/butik", img: "images/Inate2-1.jpg" },
    ];

    return popularProducts.map((product) => (
      <HomePopularProduct
        name={product.name}
        path={product.path}
        img={product.img}
      />
    ));
  };

  return (
    <>
      <div className="home-popular-products">
        <p>Populära Produkter</p>
      </div>
      <div className="home-popular-products-container">
        {renderPopularProducts()}
      </div>
    </>
  );
}

export default HomePopularProducts;
