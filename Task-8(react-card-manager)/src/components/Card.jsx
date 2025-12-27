const Card = () => {
  return (
    <div className="h-90 w-70 border-2 rounded-2xl mt-20 ml-10 overflow-hidden flex flex-col items-center justify-between"> 
        <img className=" h-4/6 w-full object-center object-cover" src="https://i.pinimg.com/736x/f4/35/85/f4358576ef07465c85f7038eb2e61582.jpg"/>

        <h1 className="text-xl text-bold">Melina James</h1>

        <h3>Front-End Developer</h3>

        <div className="flex gap-2">
            <i class="ri-facebook-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-pinterest-fill"></i>
        </div>
    </div>
  )
}

export default Card