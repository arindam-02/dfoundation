import Hero from "@/components/Hero";
import TeamCard from "@/components/TeamCard";
import { advisoryMembers, teamMembers } from "@/lib/constants";
import React from "react";

const Team = () => {
  return (
    <>
      <main className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10">
        <Hero
          title="Our Team"
          subtitle="Dedicated professionals are working together to create meaningful change and sustainable impact in communities."
        />

        {/* Core Team Members  */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-lime-800 mb-4">
                Core Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  // bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Commitee Members  */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-lime-800 mb-4">
                Council of Advisors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisoryMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  // bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        {/* <section className="py-12 md:py-20 px-4 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Work With Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "Career Opportunities",
                  description:
                    "Join our growing team and make a difference. We offer meaningful work, professional growth, and the chance to impact thousands of lives.",
                },
                {
                  title: "Internship Programs",
                  description:
                    "Gain hands-on experience in international development. Our internship programs provide mentorship, training, and real-world impact.",
                },
                {
                  title: "Volunteer With Us",
                  description:
                    "Whether you have a few hours or months to spare, volunteer opportunities are available at our global offices and projects.",
                },
                {
                  title: "Partner Organizations",
                  description:
                    "Collaborate with us on projects and initiatives. We welcome partnerships that align with our mission and values.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Interested in joining our mission? Contact us to explore
                opportunities.
              </p>
              <a
                href="mailto:careers@dfoundation.org"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                Send Us Your Resume
              </a>
            </div>
          </div>
        </section> */}

        {/* Team Values */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-lime-800 mb-12 text-center">
              What Our Team Believes In
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🌟",
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, ensuring highest quality of work.",
                },
                {
                  emoji: "🤝",
                  title: "Collaboration",
                  description:
                    "We work together across cultures and backgrounds to achieve common goals.",
                },
                {
                  emoji: "🚀",
                  title: "Innovation",
                  description:
                    "We embrace new ideas and creative solutions to tackle challenges.",
                },
                {
                  emoji: "❤️",
                  title: "Compassion",
                  description:
                    "We lead with empathy and genuine care for the communities we serve.",
                },
                {
                  emoji: "🎯",
                  title: "Impact",
                  description:
                    "We measure success by the positive change we create in people's lives.",
                },
                {
                  emoji: "📚",
                  title: "Learning",
                  description:
                    "We are committed to continuous learning and professional development.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="text-5xl mb-4">{value.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-600 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Team;
