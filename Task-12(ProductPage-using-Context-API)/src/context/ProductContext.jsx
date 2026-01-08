import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const productdatacontext = createContext();

const ProductContext = (props) => {
  const [RealData, setRealData] = useState([]);

  async function getData() {
    const productData = await axios.get("https://fakestoreapi.com/products");
    setRealData(productData.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <productdatacontext.Provider value={RealData}>
        {props.children}
      </productdatacontext.Provider>
    </div>
  );
};

export default ProductContext;
