const Bgbutton = (props) => {
  return (
    <div className="flex bg-[#6b738155] w-fit rounded-md px-2 items-center ">
      {props.icon}
      <p className="text-sm">{props.text}</p>
    </div>
  );
};

export default Bgbutton;
