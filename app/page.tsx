import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/constants";
import { Star } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen w-full md:max-w-10/12 mx-auto  px-5 pt-10">
        {/* Mission & Vision Section */}
        <section className="pt-12 md:py-20 px-4">
          {/* <div className="max-w-10/12 mx-auto text-justify"> */}
          <div className="max-w-7xl mx-auto md:w-full">
            <div className="md:flex justify-start md:gap-3  mb-0 py-0 ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-lime-600">
                Welcome to
              </h2>
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-lime-900 mb-4">
                Dakshinamurty Foundation
              </h2>
            </div>
            {/* content section */}
            <div className=" mb-3 text-justify text-muted-foreground">
              <p className="indent-10 mb-5 text-xs md:text-lg">
                Dakshinamurty Foundation is a purpose-driven trust committed to
                creating meaningful and lasting change in society. Rooted in the
                belief that education is the cornerstone of progress, we
                primarily focus on transforming lives through accessible,
                inclusive, and quality learning opportunities.
              </p>
              <p className="text-xs md:text-lg">
                As we grow, we are expanding our efforts into other vital
                sectors such as healthcare, environmental sustainability, and
                community development—because true progress is holistic.
              </p>
            </div>
            {/* our Vision */}
            <div className="mb-3 text-justify">
              <h2 className="text-sm md:text-lg font-bold mb-1 text-gray-700">
                Our Vision
              </h2>
              <p className="indent-10 text-xs md:text-lg text-muted-foreground">
                To build an equitable and empowered society where every
                individual has access to education, good health, and a
                sustainable environment.
              </p>
            </div>
            {/* our Mission */}
            <div className="mb-3 text-justify">
              <h2 className="text-sm md:text-lg font-bold mb-1 text-gray-700">
                Our Mission
              </h2>

              <ul className="list-disc list-inside ">
                <li className="text-muted-foreground flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To provide quality education to underprivileged communities
                  </span>
                </li>
                <li className="text-muted-foreground flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To support holistic development through skill-building and
                    awareness programs
                  </span>
                </li>
                <li className="text-muted-foreground flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To promote accessible healthcare initiatives
                  </span>
                </li>
                <li className="text-muted-foreground flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To collaborate with communities and partners for long-term
                    social impact
                  </span>
                </li>
              </ul>

              <p></p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="pb-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-xs md:text-lg">
                We work across multiple areas to create lasting impact in
                communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
