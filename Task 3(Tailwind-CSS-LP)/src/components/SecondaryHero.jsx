const SecondaryHero = () => {
  return (
    <div className="p-4 flex gap-4">
        <div className="p-8 bg-[#1E1E1E] w-2/4 flex flex-col items-start gap-8 rounded-2xl ">
          <div className="flex flex-col gap-16">
            <h2>ABOUT</h2>
            <h1 className="text-5xl">WHERE FASHION MEETS FREEDOM</h1>
          </div>

          <div className="flex flex-row gap-4">
           <h4>We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation,</h4>
           <h4>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</h4>
          </div>
        </div>

        <div className="w-2/4 bg-[url('./assets/hero-section2.png')] bg-cover bg-center rounded-2xl overflow-hidden"></div>
    </div>
  )
}

export default SecondaryHero