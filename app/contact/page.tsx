import DonateSectionBtn from "@/components/DonateSectionBtn";
import Hero from "@/components/Hero";
import { faqs, foundationDetails } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <section className="min-h-screen w-full md:max-w-10/12 mx-auto text-justify px-5 pt-10">
      <Hero
        title="Get In Touch"
        subtitle="Have questions? We'd love to hear from you. Reach out and let's create impact together."
      />

      {/* Contact Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl md:text-2xl text-lime-800 font-bold  mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white">
                      <Mail />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm md:text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {foundationDetails.email}
                    </p>
                    <p className="text-xs text-slate-500">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white">
                      <Phone />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm md:text-lg mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {foundationDetails.phone}
                    </p>
                    <p className="text-xs text-slate-500">
                      Mon-Fri, 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 text-white">
                      <MapPin />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-600 text-sm md:text-lg mb-1">
                      Address
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {foundationDetails.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl md:text-2xl text-lime-800 font-bold  mb-8">
                Send us a Message
              </h2>

              {/* <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-background text-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-background text-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Type of Inquiry
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-background text-foreground"
                  >
                    <option value="inquiry">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="volunteer">Volunteer Request</option>
                    <option value="donation">Donation Related</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-background text-foreground"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-background text-foreground resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {submitMessage && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form> */}
            </div>
          </div>

          {/* Donation Section */}
          <DonateSectionBtn />
        </div>
      </section>

      <div className="w-8/12 mx-auto mb-20">
        <h2 className="text-lg md:text-2xl text-lime-800 font-semibold text-center">
          Frequently Asked Questions
        </h2>
        <Accordion defaultValue={["why"]} className="max-w-7xl">
          {faqs &&
            faqs.map((faq) => (
              <AccordionItem value={faq.value} key={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Contact;
