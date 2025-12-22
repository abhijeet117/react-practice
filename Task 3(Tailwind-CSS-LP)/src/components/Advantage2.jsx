const Advantage2 = () => {
  return (
    <div>
      <div className="flex flex-row-reverse p-4 gap-4">
        <div className="w-2/4 bg-[url('./assets/advantage-2.jpeg')] bg-cover bg-center rounded-2xl overflow-hidden"></div>

        <div className="w-2/4 flex flex-col gap-4">
          <div className="bg-[#1E1E1E] p-8 rounded-2xl flex flex-col gap-4">
            <h1>HIGH QUALITY</h1>

            <div className="flex gap-16">
              <h4>
                Embrace superior craftsmanship with our meticulously curated,
                enduring high-quality garments. Discover garments crafted with
                utmost attention to detail and finest materials, promising
                longevity and timeless style.
              </h4>
              <div className="flex flex-row  gap-3 items-center justify-end">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                  <i class="ri-arrow-right-up-long-line"></i>
                </div>

                <button>EXPLORE</button>
              </div>
            </div>
          </div>

          <div className="bg-[#1E1E1E] p-8 rounded-2xl flex flex-col gap-4">
            <h1>ECO-FRIENDLY</h1>

            <div className="flex gap-16">
              <h4>
                Join our commitment to sustainability with eco-friendly fashion
                options, stylish yet mindful of our planet. Explore guilt-free
                shopping with our eco-conscious collections, crafted with
                planet-friendly materials and ethical practices.
              </h4>
              <div className="flex flex-row  gap-3 items-center justify-end">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                  <i class="ri-arrow-right-up-long-line"></i>
                </div>

                <button>EXPLORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage2;
