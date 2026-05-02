import { Star } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen w-full md:max-w-10/12 mx-auto  px-5 pt-10">
        {/* Mission & Vision Section */}
        <section className="py-12 md:py-20 px-4">
          {/* <div className="max-w-10/12 mx-auto text-justify"> */}
          <div className="max-w-7xl mx-auto md:w-full">
            {/* <h2 className="text-xl text-center w-full md:text-3xl font-bold text-foreground mb-4 "> */}
            <div className="md:flex justify-start md:gap-3  mb-0 py-0 ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-lime-600">
                Welcome to
              </h2>
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-lime-900 mb-4">
                Dakshinamurty Foundation
              </h2>
            </div>
            {/* content section */}
            <div className=" mb-3 text-justify">
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
            <div className="mb-3 text-justify">
              <h2 className="text-sm md:text-lg font-bold mb-1 text-gray-500">
                Our Vision
              </h2>
              <p className="indent-10 text-xs md:text-lg">
                To build an equitable and empowered society where every
                individual has access to education, good health, and a
                sustainable environment.
              </p>
            </div>
            <div className="mb-3 text-justify">
              <h2 className="text-sm md:text-lg font-bold mb-1 text-gray-500">
                Our Mission
              </h2>

              <ul className="list-disc list-inside">
                <li className="text-gray-600 flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To provide quality education to underprivileged communities
                  </span>
                </li>
                <li className="text-gray-600 flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To support holistic development through skill-building and
                    awareness programs
                  </span>
                </li>
                <li className="text-gray-600 flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To promote accessible healthcare initiatives
                  </span>
                </li>
                <li className="text-gray-600 flex items-center gap-1">
                  <Star className="size-3 shrink-0 text-lime-600" />
                  <span className="text-xs md:text-lg tracking-normal">
                    To collaborate with communities and partners for long-term
                    social impact
                  </span>
                </li>
              </ul>

              {/* <li>
                  * To support holistic development through skill-building and
                  awareness programs
                </li>
                <li>* To promote accessible healthcare initiatives</li>
                <li>
                  * To encourage environmental responsibility and sustainable
                  practices
                </li>
                <li>
                  * To collaborate with communities and partners for long-term
                  social impact
                </li> */}

              <p></p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
