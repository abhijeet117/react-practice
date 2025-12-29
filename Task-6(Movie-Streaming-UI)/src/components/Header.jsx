const Header = () => {
  return (
    <div className=" flex justify-between items-center p-1 " >
        <div className="flex gap-4 pr-20 pl-2 py-1 border-2 opacity-70 border-purple-400 rounded-sm justify-center items-center">
            <i class="ri-search-line"></i>
            <h3>Seach for films, directors, or actors...</h3>
        </div>

        <div className="flex gap-4 ">
            <div className="h-10 w-10 bg-[#1D1626] rounded-full flex items-center justify-center border ">
                <i className="ri-notification-line"></i>
            </div>
           
            
            <div className="h-10 w-10 ">
                <img className=" h-full w-full rounded-full object-cover" src="https://images.unsplash.com/photo-1766858667597-a9ba9d49473a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
        </div>
    </div>
  )
}

export default Header