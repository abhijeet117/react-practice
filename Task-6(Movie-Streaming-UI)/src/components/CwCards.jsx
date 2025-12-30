import Bgbutton from "./Bgbutton";

const CwCards = ({ img, name, btn, time, hr }) => {
  return (
    <div  className="min-w-[320px] h-[210px] bg-cover bg-center rounded-xl border flex flex-col justify-end "
        style={{ backgroundImage: `url(${img})` }}
    >
      <div className="p-4 flex flex-col gap-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <div className="flex justify-between">
          <Bgbutton text={btn} />
          <h2>{time}</h2>
        </div>

        <div className="h-2 mt-2">
          {hr}
        </div>
      </div>
    </div>
  );
};

export default CwCards;
