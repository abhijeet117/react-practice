import { useState } from "react"


const Navbar = (props) => {
  const [newBehave, setnewBehave] = useState('')

  return (

    
    <div>
        <form className="flex flex-col gap-12 w-fit" onSubmit={(e)=>{
            e.preventDefault();
            props.changeTheme(newBehave)
            setnewBehave('')
        }} action="">

            <input onChange={(e) => {
              setnewBehave(e.target.value)
            }} className="border" type="text" />

            <button className="border">Submit</button>
        </form>

        
    </div>
  )
}

export default Navbar