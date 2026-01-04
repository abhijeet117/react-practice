import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-20 bg-[#484545]">
      <div className="p-5  w-screen  flex justify-evenly ">
        <h2>Sheriyans</h2>

        <div className="flex gap-10">
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='Contact'>Contact</Link>
          <Link to='Product'>Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
