import { useContext } from "react";
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

export default ProductData;
