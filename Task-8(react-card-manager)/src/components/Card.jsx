const Card = (props) => {
  return (
    <div className="h-90 w-70 border-2 rounded-2xl mt-20 ml-10 overflow-hidden flex flex-col items-center justify-between"> 
        <img className=" h-4/6 w-full object-center object-cover" src={props.img}/>

        <h1 className="text-xl text-bold">{props.name}</h1>

        <h3>{props.role}</h3>

        <div className="flex gap-2">
            <i class="ri-facebook-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-pinterest-fill"></i>

            <button className="h-12 w-12 border-2" onClick={()=>{
              props.deleteHandler(props.idx)
            }}>remove</button>
        </div>
    </div>
  )
}

export default Card