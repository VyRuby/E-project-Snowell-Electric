
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Ngoc/Homepage';
import ContactUs from './pages/Ngoc/Contactus';
import Aboutus from './pages/Ngoc/Aboutus';

function App() {
  return (
    <>
      <div className="App">

        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<ContactUs/>} />

          
          {/* các route khác nếu có */}
          <Route path="*" element={<div>404 - PAGE NOT FOUND</div>} />
        </Routes>
        <Footer />
      </div>

    </>

  );
}

export default App;
