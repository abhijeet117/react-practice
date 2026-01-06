import { useState } from "react"
import Navbar from "./components/Navbar";

const App = () => {
  const [behave, setBehave] = useState('good');
  
  const changeTheme = (newBehave) => {
    setBehave(newBehave)
  }

  return (
    <div className="p-20">
      <h1>The class is {behave}</h1>
      <Navbar changeTheme={changeTheme}  />
    </div>
  )
}

export default App