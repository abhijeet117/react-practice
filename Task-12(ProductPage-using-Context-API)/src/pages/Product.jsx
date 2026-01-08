import { useContext } from "react";
import { productdatacontext } from "../context/ProductContext";

const Product = () => {
  const Pdata = useContext(productdatacontext);
  return (
    <div className="webpage">
      {Pdata.map(function (elem, idx) {
        return (
          <a key={idx} className="returning-data" href="">
            <div className="elements">
              <img src={elem.image} />
              <h2>{elem.title}</h2>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Product;
