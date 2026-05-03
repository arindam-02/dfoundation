import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

const Donate = () => {
  return (
    <section className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10">
      <Hero
        title="Be the Change"
        subtitle="Every contribution you make empowers lives, builds futures, and strengthens communities."
      />

      <div className="w-full md:w-10/12 mx-auto py-20 indent-10 text-xs md:text-lg">
        <p className="mb-5 text-gray-600">
          Your generous contribution directly impacts lives through our welfare
          programs. Every donation helps us provide healthcare, education, food,
          and essential services to those in need. Join us in creating
          sustainable change and hope for vulnerable communities. Your support
          transforms individual lives and strengthens entire communities for a
          better future.
        </p>
        <div className="flex flex-col text-gray-600">
          <h3 className="text-lg md:text-2xl text-center font-extrabold text-lime-800 mb-3">
            Make your Contribution
          </h3>
          <div className="grid md:grid-cols-2 ">
            {/* left side */}
            <div className="w-full sm:w-1/2 my-5">
              <table
                style={{
                  height: "96px",
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  <tr style={{ height: "24px" }}>
                    <td
                      style={{
                        width: "33.3333%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      Bank Name
                    </td>
                    <td
                      style={{
                        width: "6.8151%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      :
                    </td>
                    <td style={{ width: "59.8515%", height: "24px" }}>
                      <span style={{ fontWeight: 400 }}># bankName</span>
                    </td>
                  </tr>
                  <tr style={{ height: "24px" }}>
                    <td
                      style={{
                        width: "33.3333%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      Branch Name
                    </td>
                    <td
                      style={{
                        width: "6.8151%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      :
                    </td>
                    <td style={{ width: "59.8515%", height: "24px" }}>
                      <span style={{ fontWeight: 400 }}># branchName</span>
                    </td>
                  </tr>
                  <tr style={{ height: "24px" }}>
                    <td
                      style={{
                        width: "33.3333%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      Acc. No
                    </td>
                    <td
                      style={{
                        width: "6.8151%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      :
                    </td>
                    <td style={{ width: "59.8515%", height: "24px" }}>
                      <span style={{ fontWeight: 400 }}># A/c No</span>
                    </td>
                  </tr>
                  <tr style={{ height: "24px" }}>
                    <td
                      style={{
                        width: "33.3333%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      IFSC Code
                    </td>
                    <td
                      style={{
                        width: "6.8151%",
                        height: "24px",
                        fontWeight: "bolder",
                      }}
                    >
                      :
                    </td>
                    <td style={{ width: "59.8515%", height: "24px" }}>
                      <span style={{ fontWeight: 400 }}># IFSC Code</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* right side */}
            <div className="w-full sm:w-1/2 my-5 mx-auto">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/payment.png"
                  alt="qrCode"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
