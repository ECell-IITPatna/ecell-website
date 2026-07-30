import ButtonDual from "@/components/ui/Button_Dual";
export default function Hero() {
  return (
    <section className="hero relative h-screen w-full mx-auto rounded-xl bg-black max-sm:bg-[url('/images/hero/bg-mobile.png')] bg-cover bg-top max-sm:backdrop-blur-lg">
      <video
        muted
        autoPlay
        loop
        poster="/images/hero/bg.png"
        className="h-full w-full object-cover mx-auto rounded-xl object-center max-sm:hidden"
        playsInline
        controlsList="nofullscreen nodownload noremoteplayback"
        disablePictureInPicture
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="overlay backdrop-blur-[1px] absolute top-0 left-0 w-full h-full"></div>

      <header className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4 flex flex-col items-center justify-center">
        <h1 className="hero-heading md:text-7xl sm:text-4xl text-3xl text-white font-clash font-extrabold">E-CELL IIT PATNA</h1>
        <p className="hero-para md:text-xl sm:text-lg text-md text-[#D0D0D0] font-inter">Join our vibrant alumni community and relive your E-Cell journey with fellow innovators and leaders.</p>
        <ButtonDual content1="Join Us" content2="Learn More" css1="bg-white text-black text-sm min-w-[150px]" css2="bg-[#0F172A] text-white text-sm min-w-[150px]" />
      </header>
    </section>
  );
}