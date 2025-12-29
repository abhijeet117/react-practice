import Header from "./Header"
import Hero from "./Hero"
import ContinueW from "./ContinueW"
import YouMLike from "./YouMLike"

const Mainscreen = () => {
  return (
    <div className="p-4 w-[100%] h-[100%]">
        <Header />
        <Hero />
        <ContinueW /> 
        <YouMLike />       
    </div>
  )
}

export default Mainscreen