import { useState } from "react";
import axios from "axios";

const App = () => {
  const [allData, setallData] = useState([]);

  async function onClick() {
    let data = await axios.get("https://picsum.photos/v2/list");

    setallData(data.data);
    console.log(allData);
  }

  return (
    <div className="p-10">
      <button onClick={onClick} className="px-8 py-4 bg-red-500">
        Get
      </button>

      {allData.map((elem, idx) => {
        return <h1 key={idx}>{elem.author}</h1>;
      })}
    </div>
  );
};

export default App;
