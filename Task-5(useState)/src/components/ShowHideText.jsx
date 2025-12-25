import { useState } from "react";

const ShowHideText = () => {
    const [show, setshow] = useState(true)

  return (
    <div className="mt-20 h-35 w-60 border-4 border-blue-300 rounded-2xl">
        <div className="flex flex-col items-center justify-evenly h-full">

            {show && <h2>Sheryians Coding School</h2>}
            
            <button onClick={() => setshow(!show)}  className="px-3 border-2 rounded">{show ? "Hide" : "Show"}</button>
                  
        </div>
    </div>
  )
}

export default ShowHideText