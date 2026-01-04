import Home from "./components/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

function App() {
  return (

    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />

      </Routes>
    </>
  );
}

export default App;
