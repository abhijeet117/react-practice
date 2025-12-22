const Advantages = () => {
  return (
    <div>
      <h1 className="text-4xl p-10">OUR ADVANTAGES</h1>

      <div className="flex p-4 gap-4">
        <div className="w-2/4 bg-[url('./assets/hero-section2.png')] bg-cover bg-center rounded-2xl overflow-hidden"></div>

        <div className="w-2/4 flex flex-col gap-4">
          <div className="bg-[#1E1E1E] p-8 rounded-2xl flex flex-col gap-4">
            <h1>INDEPENDENT DESIGNERS</h1>

            <div className="flex gap-16">
              <h4>Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.</h4>
              <div className="flex flex-row  gap-3 items-center justify-end">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-[#393E38]">
                  <i class="ri-arrow-right-up-long-line"></i>
                </div>

                <button>EXPLORE</button>
              </div>
            </div>
          </div>

          <div className="bg-[#1E1E1E] p-8 rounded-2xl flex flex-col gap-4">
            <h1>EXCLUSIVE & UNIQUITY</h1>

            <div className="flex gap-16">
              <h4>Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.</h4>
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

export default Advantages;
