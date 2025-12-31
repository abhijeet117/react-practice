import { useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [allData, setallData] = useState([]);

  async function onClick() {
    let data = await axios.get("https://picsum.photos/v2/list");

    setallData(data.data);
  }

  return (
    <div className="p-10 flex flex-wrap gap-10">
      <button onClick={onClick} className="px-8 py-4 bg-red-500">
        Get
      </button>

      {allData.map((elem, idx) => {
        return <Card elem={elem} idx={idx} />;
      })}
    </div>
  );
};

export default App;
