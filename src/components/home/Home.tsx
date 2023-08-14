import "./Home.css";
import HomeProductsDescription from "./homeProductsDescription/HomeProductsDescription";
import HomePopularProducts from "./homePopularProducts/HomePopularProducts";
import HomeTreatments from "./homeTreatments/HomeTreatments";
import HomeEditorLetter from "./homeEditorLetter/HomeEditorLetter";
import HomeAboutOwner from "./homeAboutOwner/HomeAboutOwner";
import { useEffect } from "react";
import HomePresentation from "./homePresentation/HomePresentation";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <HomePresentation />
      {/* <HomeProductsDescription /> */}
      <HomePopularProducts />
      <HomeEditorLetter />
      <HomeTreatments />
      <HomeAboutOwner />
    </div>
  );
}

export default Home;
