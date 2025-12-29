import Bgbutton from "./Bgbutton";

const Hero = () => {
  return (
    <div className="w-full h-120] mt-4 ">
      <div className="w-full h-110 bg-[url('./assets/hero-banner.jpg')] bg-cover bg-no-repeat rounded-xl border  border-opacity-50">
        <div className="w-full h-full p-6 flex flex-col justify-between">
          <Bgbutton
            icon={<i className="ri-fire-fill text-yellow-500"></i>}
            text={"Now Trending"}
          />

          <div className="flex flex-col gap-5 ">
            <div className="flex gap-2 ">
              <Bgbutton text={"Drama"} />
              <Bgbutton text={"Fantasy"} />
            </div>

            <div className="w-[40%] flex flex-col gap-4">
              <h1 className="text-5xl font-medium">
                Dimensional Kids on an Adventure
              </h1>
              <p>
                When two curious kids stumble into a hidden portal, they travel
                across magical dimensions while trying to find their way
                home.....
              </p>
            </div>

            <div className="flex gap-2">
              <div className="bg-[#B795EB] px-2 py-1  rounded gap-2">
                <i className="ri-play-fill text-black"></i>
                <button>
                  <span className="text-black">Watch Now</span>
                </button>
              </div>

              <Bgbutton icon={<i class="ri-download-2-line"></i>} />
              <Bgbutton icon={<i class="ri-list-unordered"></i>} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
