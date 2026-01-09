import axios from "axios";

 export const getData = async () => {
    const productData = await axios.get("https://fakestoreapi.com/products");
    return productData.data;
  }