import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white">
      
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Modern Wear
        </h1>

        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          Discover premium clothing designed for comfort and confidence.
        </p>

        <button
          onClick={() => navigate("/product")}
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Explore Collection
        </button>
      </div>

    </div>
  );
};

export default Home;
