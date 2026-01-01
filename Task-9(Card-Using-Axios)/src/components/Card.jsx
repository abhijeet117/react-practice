import axios from "axios";
import { useState } from "react";

const Card = () => {
  const [quote, setquote] = useState("")

  async function handleSubmit() {
    let res = await axios.get("https://dummyjson.com/quotes/");
    let ranIndex = Math.floor(Math.random() * 29)
    console.log(res.data.quotes[ranIndex].quote);
    setquote(res.data.quotes[ranIndex].quote)
  }

  return (
    <div className="border h-60 w-[90%] flex flex-col items-center justify-evenly">
      <div className="flex items-center justify-center">
        <h1 className="text-center w-[90%]">" {quote} "</h1>
      </div>
      <div className="flex gap-2"></div>
      <button onClick={handleSubmit}>Generate</button>
    </div>
  );
};

export default Card;
