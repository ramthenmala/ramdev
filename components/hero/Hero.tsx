const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-12">
        <h1 className="text-6xl font-bold">Ram</h1>
        <h2>Front End Engineer</h2>
        <h3>
          Helping developers build a faster web. Teaching about web development,
          serverless, and React / Next.js.
        </h3>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto"></div>
    </section>
  );
};

export default HeroSection;
