import Sidebar from "./components/Sidebar"
import Mainscreen from "./components/Mainscreen"



const App = () => {
  return (
    <div>
      <div className="flex h-screen">
        <Sidebar /> 
        <Mainscreen />
        
      </div>
    </div>
  )
}

export default App  
