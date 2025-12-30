const Card = (props) => {
  return (
    <div className="h-90 w-70 border-2 rounded-2xl mt-20 ml-10 overflow-hidden flex flex-col items-center justify-between"> 
        <img className=" h-4/6 w-full object-center object-cover" src={props.img}/>

        <h1 className="text-xl text-bold">{props.name}</h1>

        <h3>{props.role}</h3>

        <div className="flex items-center gap-3">
  <i className="ri-facebook-fill text-xl cursor-pointer"></i>
  <i className="ri-instagram-line text-xl cursor-pointer"></i>
  <i className="ri-twitter-fill text-xl cursor-pointer"></i>
  <i className="ri-pinterest-fill text-xl cursor-pointer"></i>

  <button
    className="ml-2 px-3 py-1 border-2 rounded-md text-sm 
               hover:bg-red-500 hover:text-white transition"
    onClick={() => props.deleteHandler(props.idx)}
  >
    Remove
  </button>
</div>

    </div>
  )
}
 
export default Card