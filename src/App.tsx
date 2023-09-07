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
import Courses from "./components/courses/Courses";
import { CartProvider } from "./context/CartContext";
import { ResizeProvider } from "./context/ResizeContext";
import Checkout from "./components/cart/checkout/Checkout";

function App() {
  return (
    <div className="app">
      <ResizeProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/stjarnorter-client/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/stjarnorter-client/butik" element={<Store />} />
            <Route path="/butik" element={<Store />} />
            <Route path="/butik/:categoryName" element={<StoreProducts />} />
            <Route
              path="/stjarnorter-client/butik/:categoryName/:productName"
              element={<StoreProductPage />}
            />
            <Route
              path="/butik/:categoryName/:productName"
              element={<StoreProductPage />}
            />
            <Route path="/kurser" element={<Courses />} />
            <Route
              path="/stjarnorter-client/behandlingar"
              element={<Treatments />}
            />
            <Route path="/behandlingar" element={<Treatments />} />
            <Route path="/om" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
        <Footer />
      </ResizeProvider>
    </div>
  );
}

export default App;
