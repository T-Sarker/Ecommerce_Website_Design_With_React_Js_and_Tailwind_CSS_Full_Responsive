import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/shop" element={<Shop />} ></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/single/blog/:id" element={<SingleBlog />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
