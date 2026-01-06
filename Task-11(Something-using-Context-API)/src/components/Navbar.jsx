

const Navbar = () => {
  return (
    <div>
        <form className="flex flex-col gap-12 w-fit" onSubmit={(e)=>{
            e.preventDefault()
        }} action="">

            <input className="border" type="text" />

            <button className="border">Submit</button>
        </form>
    </div>
  )
}

export default Navbar