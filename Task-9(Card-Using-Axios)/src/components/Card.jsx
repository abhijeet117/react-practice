import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    handleSubmit();
    console.log("works", { count });
  }, [count]);

  const [quote, setquote] = useState("");

  async function handleSubmit() {
    let res = await axios.get("https://dummyjson.com/quotes/");
    let ranIndex = Math.floor(Math.random() * 29);
    setquote(res.data.quotes[ranIndex].quote);
  }

  return (
    <div className="border h-60 w-[50%] w-[90%] flex flex-col items-center justify-evenly bg-[#FBA594] rounded-xl">
      <div className="flex items-center justify-center">
        <h1 className="text-center w-[90%] md:text-xl font-semibold">
          " {quote} "
        </h1>
      </div>

      <button className="bg-pink-700 rounded p-2" onClick={handleCount}>
        Generate
      </button>

      <div className="p-4">{count}</div>
    </div>
  );
};

export default Card;
