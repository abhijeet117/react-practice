import Counter from "./components/Counter"
import ShowHideText from "./components/ShowHideText"

const App = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <Counter />
      <ShowHideText />
    </div>
  )
}

export default App