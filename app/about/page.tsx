import Hero from "@/components/Hero";
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10">
      <Hero
        title="About Foundation"
        subtitle="Our mission is to create sustainable change and empower communities worldwide through innovative programs and partnerships."
      />
      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* left */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 indent-10">
                To empower communities and create sustainable positive change
                through collaborative initiatives, education, healthcare access,
                and environmental stewardship. We believe that when communities
                are empowered, lasting change becomes possible.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed indent-10">
                Since our founding, we have impacted over 500,000 lives across
                25 countries, touching education, healthcare, environment, and
                community development sectors.
              </p>
            </div>

            {/* right */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 indent-10">
                A world where every individual has the opportunity to thrive,
                where communities are self-sufficient and resilient, and where
                resources are managed sustainably for current and future
                generations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6 indent-10">
                We envision a future where poverty is eliminated, education is
                universal, health care is accessible, and our environment is
                protected for all.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed indent-10">
                To transform lives through education by creating accessible,
                innovative, and community-driven learning opportunities that
                foster knowledge, skills, and values.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
