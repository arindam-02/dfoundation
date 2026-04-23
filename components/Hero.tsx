interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="relative min-w-full text-white min-h-25 flex items-center justify-center text-center px-4 bg-linear-to-r from-white via-rose-700 to-white">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight my-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
