import { createContext } from "react";
import { useState, useEffect } from "react";

  import { getData } from "../ProductAPI/Productapi";

export const productdatacontext = createContext();

const ProductContext = (props) => {
  const [RealData, setRealData] = useState([]);

  const setData = async ()=> {
    let data = await getData()
    setRealData(data)
    
  }

  useEffect(() => {
    setData();
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
