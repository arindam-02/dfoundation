import CustomButton from "@/components/CustomButton";
import DonateSectionBtn from "@/components/DonateSectionBtn";
import DonorCard from "@/components/DonorCard";
import Hero from "@/components/Hero";
import { donorList } from "@/lib/constants";
import React from "react";

const Donorlist = () => {
  return (
    <>
      <section className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10">
        <Hero
          title="Join Our Donor Community"
          subtitle="Help us continue our work by making a donation that truly matters"
        />

        <div className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-lime-800 mb-4">
                With Gratitude to Our Donors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donorList.map((donor) => (
                <DonorCard
                  key={donor.id}
                  name={donor.name}
                  location={donor.location}
                />
              ))}
            </div>
          </div>
        </div>

        <DonateSectionBtn />
      </section>
    </>
  );
};

export default Donorlist;
