import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        This is homepage........

        <button onClick={()=> {
            navigate('/product')
        }}>Product page</button>
    </div>
  )
}

export default Home