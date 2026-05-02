import Hero from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import React from "react";

const Services = () => {
  const detailedServices = [
    {
      title: "Education & Skills",
      icon: "📚",
      description:
        "Providing quality education and vocational training to underserved populations.",
      details: [
        "School construction and learning centers and support",
        "Digital and skill-based education programs",
        "Scholarships for deserving students",
        "Teacher training and capacity building",
      ],
    },
    {
      title: "Environmental Conservation",
      icon: "🌱",
      description:
        "Protecting ecosystems and promoting sustainable practices for future generations.",
      details: [
        "Reforestation initiatives",
        "Water conservation projects",
        "Renewable energy promotion",
        "Waste management solutions",
      ],
    },
    {
      title: "Community Development",
      icon: "🌍",
      description:
        "Empowering local communities through education, healthcare, and economic opportunities.",
      details: [
        "Microfinance programs for small businesses",
        "Community infrastructure development",
        "Vocational skills training",
        "Women entrepreneurship support",
      ],
    },
    {
      title: "Healthcare Access",
      icon: "🏥",
      description:
        "Ensuring access to essential healthcare services in remote and underserved areas.",
      details: [
        "Organizing health camps and awareness drives",
        "Supporting preventive healthcare initiatives",
        "Promoting mental and physical well-being",
        "Medical equipment provision",
      ],
    },
    {
      title: "Women Empowerment",
      icon: "👩‍💼",
      description:
        "Supporting women's rights, entrepreneurship, and leadership development.",
      details: [
        "Leadership training programs",
        "Economic independence initiatives",
        "Safety awareness workshops",
        "Mentorship opportunities",
      ],
    },
    {
      title: "Disaster Relief",
      icon: "🆘",
      description:
        "Rapid response and support during natural disasters and humanitarian crises.",
      details: [
        "Emergency response coordination",
        "Shelter and food provision",
        "Medical aid delivery",
        "Long-term rehabilitation support",
      ],
    },
  ];
  return (
    <section className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10 ">
      <Hero
        title="What We Offer"
        subtitle="Discover our range of services aimed at empowering individuals and strengthening communities."
      />

      <div className=" max-w-10/12 mx-auto">
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Detailed Services */}
        <div className="py-12 md:py-20 px-4 bg-card border-y ">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-lime-700 mb-12 text-center">
              Service Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {detailedServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-background border border-border rounded-lg p-6 cursor-pointer group transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-600 transition-colors group-hover:text-lime-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-base mb-4">
                    {service.description}
                  </p>

                  <h4 className="font-semibold text-gray-600 text-xs md:text-lg mb-3">
                    Key Programs:
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-xs md:text-base text-muted-foreground"
                      >
                        <span className="text-blue-600 font-bold mt-1">
                          <ArrowRight />
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Work */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Approach
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Assess",
                  description:
                    "We thoroughly understand community needs and local contexts before implementing programs.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "We create tailored solutions that address specific challenges with sustainable outcomes.",
                },
                {
                  step: "03",
                  title: "Implement",
                  description:
                    "We execute programs with local communities, ensuring active participation and ownership.",
                },
                {
                  step: "04",
                  title: "Monitor",
                  description:
                    "We continuously track progress and adapt strategies to maximize impact.",
                },
                {
                  step: "05",
                  title: "Evaluate",
                  description:
                    "We measure outcomes and share learnings to improve future initiatives.",
                },
                {
                  step: "06",
                  title: "Scale",
                  description:
                    "Successful programs are expanded and adapted for other communities.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-lime-700 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
