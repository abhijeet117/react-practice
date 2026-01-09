import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductData from "./pages/ProductData";

const App = () => {
 

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Product/:id" element={<ProductData/>}/>
   </Routes>
  );
};

export default App;
