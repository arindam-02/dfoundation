interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    // <section className="relative min-w-full text-white min-h-25 flex items-center justify-center text-center px-4 bg-linear-to-r from-white via-rose-700 to-white">
    <section
      className="
        relative w-full min-h-62.5
        flex items-center justify-center text-center px-4
        text-white overflow-hidden bg-linear-150
        from-rose-700  to-slate-950
        
       "
    >
      {/* bg-[linear-gradient(to_bottom,#f8f000_0%,#093C5D_25%,#65a30d_75%,#f8fafc_100%)] */}
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight my-4">
          {title}
        </h1>
        <p className="text-sm md:text-lg leading-relaxed mb-8">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;
