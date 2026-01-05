import { useNavigate } from "react-router"


const Buttons = () => {

    let navigate = useNavigate();

    
  return (
    <div className="h-20 w-screen p-5 flex gap-5">
        <button onClick={()=> {
            navigate(-1)
        }} className="border w-fit px-4 active:scale-90"> back </button>
        <button onClick={()=> {
            navigate('/')
        }} className="border w-fit px-4 active:scale-90">home</button>
        <button onClick={()=> {
            navigate(+1)
        }} className="border w-fit px-4 active:scale-90"> next </button>
    </div>
  )
}

export default Buttons