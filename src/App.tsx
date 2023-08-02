import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Store from "./components/store/Store";
import StoreProducts from "./components/store/storeProducts/StoreProducts";
import StoreProductPage from "./components/store/storeProductPage/StoreProductPage";
import Treatments from "./components/treatments/Treatments";
import About from "./components/about/About";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/stjarnorter-client/" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/butik" element={<Store />} />
        <Route path="/butik/:categoryName" element={<StoreProducts />} />
        <Route
          path="/butik/:categoryName/:productName"
          element={<StoreProductPage />}
        />
        <Route path="/behandlingar" element={<Treatments />} />
        <Route path="/om" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
