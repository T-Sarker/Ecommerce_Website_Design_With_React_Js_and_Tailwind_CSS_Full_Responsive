import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
