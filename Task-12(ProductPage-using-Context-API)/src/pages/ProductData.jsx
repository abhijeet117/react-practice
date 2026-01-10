/* import { useContext } from "react";
import { productdatacontext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductData = () => {
  const AllData = useContext(productdatacontext);

  const { id } = useParams();

  let selectedproduct = ''
  if(AllData.length>0) {
    selectedproduct = AllData.find((elem) => elem.id == id)
  }
  console.log(selectedproduct);
  return (
    <div className="elements">
      <img src={selectedproduct.image} />
      <h2>{selectedproduct.title}</h2>
    </div>
  );
};

export default ProductData; */


import { useContext } from "react";
import { productdatacontext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductData = () => {
  const AllData = useContext(productdatacontext);
  const { id } = useParams();

  const selectedproduct =
    AllData.length > 0
      ? AllData.find((elem) => elem.id == id)
      : null;

  if (!selectedproduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={selectedproduct.image}
            alt={selectedproduct.title}
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {selectedproduct.title}
          </h1>

          <p className="text-gray-500 mb-2 capitalize">
            Category: {selectedproduct.category}
          </p>

          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${selectedproduct.price}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              ⭐ {selectedproduct.rating.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({selectedproduct.rating.count} reviews)
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {selectedproduct.description}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button
              className="px-6 py-3 border border-black rounded hover:bg-black hover:text-white transition"
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductData;

