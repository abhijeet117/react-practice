import Sidebar from "./components/Sidebar"
import Mainscreen from "./components/Mainscreen"



const App = () => {
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 overflow-y-auto">
          <Mainscreen /> 
          </div> 
        
        
      </div>
    </div>
  )
}

export default App  
