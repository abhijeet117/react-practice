const Card = (props, key) => {
  let cl1 = Math.floor(Math.random() * 256);
  let cl2 = Math.floor(Math.random() * 256);
  let cl3 = Math.floor(Math.random() * 256);

  return (
    <div className="flex flex-row">
      <div
        key={key}
        style={{ backgroundColor: `rgb(${cl1}, ${cl2}, ${cl3})` }}
        className=" mt-2 h-40 w-40 border"
      >
        <h1>{props.elem.author}</h1>
      </div>
    </div>
  );
};

export default Card;
