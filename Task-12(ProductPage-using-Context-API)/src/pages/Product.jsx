/* import { useContext } from "react";
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

export default Product; */



import { useContext } from "react";
import { productdatacontext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Product = () => {
  const Pdata = useContext(productdatacontext);
  console.log(Pdata)

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        Explore Collection
      </h1>

      {Pdata.length === 0 ? (
        <p className="text-center text-gray-500">
          Loading products...
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Pdata.map((elem) => (
            <Link
              key={elem.id}
              to={`/product/${elem.id}`}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={elem.image}
                  alt={elem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {elem.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};

export default Product;

