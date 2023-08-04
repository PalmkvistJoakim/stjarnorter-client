import "./Home.css";
import HomeBackground from "./homeBackground/HomeBackground";
import HomeProductsDescription from "./homeProductsDescription/HomeProductsDescription";
import HomePopularProducts from "./homePopularProducts/HomePopularProducts";
import HomeTreatments from "./homeTreatments/HomeTreatments";
import HomeEditorLetter from "./homeEditorLetter/HomeEditorLetter";
import HomeAboutOwner from "./homeAboutOwner/HomeAboutOwner";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <HomeBackground />
      {/* <HomeProductsDescription /> */}
      <HomePopularProducts />
      <HomeEditorLetter />
      {/* <HomeTreatments />
      <HomeAboutOwner /> */}
    </div>
  );
}

export default Home;
