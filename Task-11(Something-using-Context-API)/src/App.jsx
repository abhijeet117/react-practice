import { useContext, useState } from "react"
import Navbar from "./components/Navbar";

import {data} from "./context/UserContext"



const App = () => {
  const [behave, setBehave] = useState('good');
  
  const changeTheme = (newBehave) => {
    setBehave(newBehave)
  }

 const Udata = useContext(data)
 console.log(Udata)


  return (
    
    <div className="p-20">
      <h1>The class is {behave}</h1>
      <Navbar changeTheme={changeTheme}  />
    </div>
  )
}

export default App