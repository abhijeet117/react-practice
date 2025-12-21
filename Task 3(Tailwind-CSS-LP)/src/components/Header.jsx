const Header = () => {
  return (
    <div className="p-4 mt-2 flex justify-between">
        <div className="right p-2 font-semibold text-xl">DVSY</div>
        <div className="left flex gap-2">
            <a className="bg-[#1F1E1C] p-2 rounded-bl-md">DESIGNERS</a>
            <a className="bg-[#1F1E1C] p-2 rounded-bl-md">COLLABS</a>
            <a className="bg-[#1F1E1C] p-2 rounded-bl-md">EVENTS</a>
            <a className="bg-[#1F1E1C] p-2 rounded-bl-md">BLOG</a>
            <a className="bg-[#1F1E1C] p-2 rounded-bl-md">CARD</a>
            <a className="bg-[#EE6D5B] text-black font-medium p-2 rounded-bl-md">GET IN TOUCH</a>
                
        </div>
    </div>
  )
}

export default Header