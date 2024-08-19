
const Hero = () => {
  return (
    <header className="bg-slate-100 text-slate-600 font-inter h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="absolute top-36 w-full max-w-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
          Gourmet is an AI-Powered Recipe Generator
        </h1>

        <p className="text-base text-slate-400 font-inter md:text-lg lg:text-lg">
          Simply input your preferences, and get creative, personalized recipes in seconds!
        </p>
      </div>
    </header>
  );
};

export default Hero;