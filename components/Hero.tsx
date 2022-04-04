export type Hero = {
  title?: string;
  description?: string;
};

const HeroSection = ({ title, description }: Hero) => {
  return (
    <section>
      <h2 className="font-bold text-4xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        {title}
      </h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400 md:pr-20">
        {description}
      </p>
    </section>
  );
};

export default HeroSection;
