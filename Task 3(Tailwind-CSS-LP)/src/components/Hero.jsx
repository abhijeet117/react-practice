const Hero = () => {
  return (
    <div className="p-4 rounded- overflow-hidden h-screen">
      <div className=" bg-[url('./assets/hero-section1.png')] h-full bg-cover bg-center w-ful rounded-2xl overflow-hidden relative">
        <div className="p-4 flex flex-col justify-center w-full absolute bottom-12 ">
          <div className="">
            <h1 className="text-9xl font-light ">DESIGN </h1>
            <h1 className="text-9xl font-light ml-30">& FREEDOM</h1>
          </div>

          <div className="flex justify-around p-4 ">
            <p className="text-xl">
              Explore independent Style by Embracing Uniqueness
              <br />
              with Our Exclusive Designer Appare!
            </p>
            <div className="flex flex-row items-center gap-3 p-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                <i className="ri-arrow-down-line text-white text-lg"></i>
              </div>

              <button className="text-white">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
