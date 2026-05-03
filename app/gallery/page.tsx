"use client";

import DonateSectionBtn from "@/components/DonateSectionBtn";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import Hero from "@/components/Hero";
import { galleryImages } from "@/lib/constants";

const Gallery = () => {
  return (
    <>
      <section className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10">
        <Hero
          title="Our Impact Gallery"
          subtitle="Visual stories of transformation and positive change from communities around the world where we work."
        />

        {/* Gallery Section */}
        <div className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                Projects & Initiatives
              </h2>
              <p className="text-xs md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on any image to view it in full size. These moments
                represent the real impact we create together.
              </p>
            </div>

            <GalleryLightbox images={galleryImages} />
          </div>

          {/* Impact Summary */}
          <div className="py-12 md:py-20 px-4 bg-card border-t border-border">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg sm:text-lg md:text-2xl font-bold text-gray-700 mb-8 text-center">
                Stories From The Field
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Education Programs",
                    count: "10+",
                    description: "Schools built and supported",
                  },
                  {
                    title: "Healthcare Initiatives",
                    count: "4+",
                    description: "Medical camps conducted",
                  },
                  {
                    title: "Environmental Projects",
                    count: "6+",
                    description: "Tree planting drives",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow "
                  >
                    <p className="text-4xl font-bold text-blue-600 mb-2">
                      {item.count}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DonateSectionBtn />
      </section>
    </>
  );
};

export default Gallery;
