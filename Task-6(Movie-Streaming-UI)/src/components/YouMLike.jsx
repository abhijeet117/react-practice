import CwCards from "./CwCards";
import Bgbutton from "./Bgbutton";
import First from "../assets/c-1.avif"
import Second from "../assets/c-2.avif"
import Third from "../assets/c-3.avif"
import Fourth from "../assets/c-4.avif"
import Fifth from "../assets/c-5.avif"



const YouMLike = () => {
return (
    <div className="pb-10">
      <div className="mt-4 flex justify-between p-4">
        <h1 className="text-xl font-semibold">You Might Like</h1>
        <Bgbutton text={"Sell All"} />
      </div>

      <div className="flex gap-4 overflow-x-auto flex-nowrap px-4 hide-scrollbar">
        <CwCards
          img={First}
          
        />

        <CwCards
          img={Second}
          
        />

        <CwCards
          img={Third}
          
        />

        <CwCards
          img={Fourth}
          
        />
        <CwCards
          img={Fifth}
          
        />
      </div>
    </div>
  );
}

export default YouMLike