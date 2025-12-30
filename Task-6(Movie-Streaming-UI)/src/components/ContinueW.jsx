import CwCards from "./CwCards";
import Bgbutton from "./Bgbutton";
import Firstimg from "../assets/cw-1.webp"
import Secondimg from "../assets/cw-2.avif"
import Thirdimg from "../assets/cw-3.avif"
import Fourthimg from "../assets/cw-4.avif"
import Fifthimg from "../assets/cw-5.webp"


const ContinueW = () => {
  return (
    <div className="pb-10">
      <div className="mt-4 flex justify-between p-4">
        <h1 className="text-xl font-semibold">Continue Watching</h1>
        <Bgbutton text={"Sell All"} />
      </div>

      <div className="flex gap-4 overflow-x-auto flex-nowrap px-4 hide-scrollbar">
        <CwCards
          img={Firstimg}
          name="Moana"
          btn="S1, Ep-5"
          time="33min 05sec"
          hr={<hr />}
        />

        <CwCards
          img={Secondimg}
          name="The Wild Robot"
          btn="S2, Ep-7"
          time="30min 55sec"
          hr={<hr />}
        />

        <CwCards
          img={Thirdimg}
          name="Elio"
          btn="S1, Ep-6"
          time="23min 53sec"
          hr={<hr />}
        />

        <CwCards
          img={Fourthimg}
          name="Boss Baby"
          btn="S2, Ep-1"
          time="40min 55sec"
          hr={<hr />}
        />
        <CwCards
          img={Fifthimg}
          name="The Good Dinasour"
          btn="S1, Ep-3"
          time="10min 55sec"
          hr={<hr />}
        />
      </div>
    </div>
  );
};

export default ContinueW;
