const BrandPillars = () => {
  return (
    <div className="p-4 flex gap-2">
        <div className=" bg-[#1E1E1E] text-[#B4B4B4] flex flex-col w-1/4 p-8 gap-4 rounded-bl-xl ">
            <h2>INDEPENDENCY</h2>
            <p>Explore the  creativity of independent designers from around the globe.</p>

            <div className="flex flex-row  gap-3 mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>

              <button className="">LEARN MORE</button>
            </div>
        </div>

        <div className=" bg-[#1E1E1E] text-[#B4B4B4] flex flex-col w-1/4 p-8 gap-4 rounded-bl-xl ">
            <h2>UNIQUITY</h2>
            <p>Discover the charm of unique pieces that stand out effortlessly.</p>

            <div className="flex flex-row  gap-3 mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>

              <button className="">LEARN MORE</button>
            </div>
        </div>

        <div className=" bg-[#1E1E1E] text-[#B4B4B4] flex flex-col w-1/4 p-8 gap-4 rounded-bl-xl ">
            <h2>QUALITY</h2>
            <p>Experience unparalleled craftmanship and attention to detail.</p>

            <div className="flex flex-row  gap-3 mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>

              <button className="">LEARN MORE</button>
            </div>
        </div>

        <div className=" bg-[#1E1E1E] text-[#B4B4B4] flex flex-col w-1/4 p-8 gap-4 rounded-bl-xl ">
            <h2>SUSTAINABLITY</h2>
            <p>Embrance eco-conscious fashion choices without comromisissing on style.</p>

            <div className="flex flex-row  gap-3 mt-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                <i class="ri-arrow-right-up-long-line"></i>
              </div>

              <button className="">LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}

export default BrandPillars