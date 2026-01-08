import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [RealData, setRealData] = useState([]);

  async function getData() {
    const productData = await axios.get("https://fakestoreapi.com/products");
    setRealData(productData.data);
    console.log(RealData);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className="webpage">
        {RealData.map(function(elem, idx) {
        return <a className="returning-data" href="">
          <div className="elements">
            <img src={elem.image}/>
            <h2>{elem.title}</h2>

          </div>
        </a>
      })}
      </div>
    </div>
  );
};

export default App;
