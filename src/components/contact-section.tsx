import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Send, CheckCircle } from "lucide-react";
import { services } from "@/lib/utils";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        contact: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden mb-8 max-w-4xl mx-auto"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-lime-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/10 to-lime-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mb-4">
            Let's Work Together
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your
            <span className="bg-orange-600 bg-clip-text text-transparent">
              {" "}
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Let's discuss your goals and create a custom strategy that drives
            real results.
          </p>
        </div>

        {/*Contact Form */}
        <div
          className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                    placeholder="Your contact number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your business goals, current challenges, and what success looks like to you..."
                ></textarea>
              </div>

              <Button
                className={`w-full bg-green-700 hover:bg-green-800 text-white font-bold py-6 text-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                <span className="relative flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Thank you for reaching out. I'll review your information and get
                back to you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
