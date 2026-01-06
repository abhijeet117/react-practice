import { useState } from "react"
import Navbar from "./components/Navbar";

const App = () => {
  const [behave, setBehave] = useState('good');
  return (
    <div className="p-20">
      <h1>The class is {behave} </h1>
      <Navbar />
    </div>
  )
}

export default App