import { useContext } from "react";
import { productdatacontext } from "../context/ProductContext";
import {Link} from 'react-router-dom'

const Product = () => {
  const Pdata = useContext(productdatacontext);
  let renderdata = ''

  if(Pdata.length > 0) {
    renderdata = Pdata.map(function (elem, idx) {
        return (
          <Link key={idx} className="returning-data" to={`/product/${elem.id}`}>
            <div className="elements">
              <img src={elem.image} />
              <h2>{elem.title}</h2>
            </div>
          </Link>
        );
      })
  }

  return (
    <div className="webpage">
      {renderdata}
    </div>
  );
};

export default Product;
