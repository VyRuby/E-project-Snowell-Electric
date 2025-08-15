
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Ngoc/Homepage';
import ContactUs from './pages/Ngoc/Contactus';
import Aboutus from './pages/Ngoc/Aboutus';
import Products from './pages/Tri/Products';
import ProductDetails from "./pages/Tri/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path ="/products" element={<Products/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          {/* các route khác nếu có */}
          <Route path="*" element={<div>404 - PAGE NOT FOUND</div>} />
        </Routes>
        <Footer />
      </div>

    </>

  );
}

export default App;
