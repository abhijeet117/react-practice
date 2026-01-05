import { Link, Outlet } from "react-router";

const Product = () => {
  return (
    <>
      <div className="flex p-4 gap-10 ">
        <Link className="border w-fit px-4 active:scale-90" to="/Product/Mens">Men's Wear</Link>
        <Link className="border w-fit px-4 active:scale-90" to="/Product/Women">Women's Wear</Link>
      </div>

      <Outlet />
    </>
  );
};

export default Product;
