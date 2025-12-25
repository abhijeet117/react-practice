import { useActionState, useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="">
        <h1>Counter with useState</h1>
        <div className="p-4 h-80 w-60 rounded-3xl border border-4 border-green-600  flex flex-col items-center gap-10">
      <div className="h-30 w-30 border-4 rounded-full flex items-center justify-center">
        <h1 className="text-5xl">{count}</h1>
      </div>

      <div className="flex gap-4">
        <button onClick={() => setcount( (prev) => prev<11? prev+1: prev)} className="px-3 border-2 ">
          Increase
        </button>
        <button onClick={() => setcount((prev) => prev>0? prev-1 : prev)} className="px-3 border-2 ">
          Decrease
        </button>
      </div>
    </div>
    </div>
  );
};

export default Counter;
