import CwCards from "./CwCards";
import Bgbutton from "./Bgbutton";
import Firstimg from "../assets/hero-banner.jpg";

const YouMLike = () => {
return (
    <div className="pb-10">
      <div className="mt-4 flex justify-between p-4">
        <h1 className="text-xl font-semibold">You Might Like</h1>
        <Bgbutton text={"Sell All"} />
      </div>

      <div className="flex gap-4 overflow-x-auto flex-nowrap px-4 hide-scrollbar">
        <CwCards
          img={Firstimg}
          name="Midnight Mischief Squad"
          btn="S1, Ep-3"
          time="30min 55sec"
        />

        <CwCards
          img={Firstimg}
          name="Midnight Mischief Squad"
          btn="S1, Ep-3"
          time="30min 55sec"
        />

        <CwCards
          img={Firstimg}
          name="Midnight Mischief Squad"
          btn="S1, Ep-3"
          time="30min 55sec"
        />

        <CwCards
          img={Firstimg}
          name="Midnight Mischief Squad"
          btn="S1, Ep-3"
          time="30min 55sec"
        />
        <CwCards
          img={Firstimg}
          name="Midnight Mischief Squad"
          btn="S1, Ep-3"
          time="30min 55sec"
        />
      </div>
    </div>
  );
}

export default YouMLike