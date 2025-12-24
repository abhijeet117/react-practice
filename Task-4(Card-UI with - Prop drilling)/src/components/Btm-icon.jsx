const Btmicon = ({icon , iName , count}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center gap-1">
        {icon}
        <span>{iName}</span>
      </div>
      <h1 className="">{count}</h1>
    </div>
  );
};

export default Btmicon;
