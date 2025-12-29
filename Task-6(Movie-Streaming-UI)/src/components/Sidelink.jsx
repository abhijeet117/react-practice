const Sidelink = (props) => {
  return (
    <div className="flex gap-3 opacity-70">
      {props.icon}
      <h2 className="">{props.iName}</h2>
    </div>
  );
};

export default Sidelink; 
