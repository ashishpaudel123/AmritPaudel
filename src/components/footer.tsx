import { services } from "@/lib/utils";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-lime-500/10 to-lime-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-12" data-aos="fade-up" data-aos-duration="800">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-4">
                  <a href="/" className="flex items-center space-x-2">
                    <img
                      className="w-40 h-auto"
                      src={logo}
                      alt="Amritya Logo"
                    />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href="mailto:paudelamrit2060@gmail.com">
                    paudelamrit2060@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a>+977 9865846429</a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <a
                    href="https://maps.app.goo.gl/icKGjmbH3DqCEVqRA"
                    target="_blank"
                  >
                    New Baneshwor, Kathmandu 44600
                  </a>
                </div>
                <a className="ps-8 text-slate-300">Nepal</a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {services.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.route}
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-300"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent mb-3">
                Get In Touch
              </h4>
              <div className="flex space-x-3">
                {/* LinkedIn - Official LinkedIn Blue Background */}
                <a
                  href="https://www.linkedin.com/in/amrit-paudel-9105722b0/"
                  className="group flex items-center justify-center w-10 h-10 bg-[#0077B5]/80 backdrop-blur-md hover:bg-[#0077B5] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                    />
                  </svg>
                </a>
                {/* X - Official Black Background */}
                {/* <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 bg-black/80 backdrop-blur-md hover:bg-black rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/25 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    />
                  </svg>
                </a> */}
                {/* Instagram - Official Instagram Gradient Background */}
                {/* <a
                  href="#"
                  className="group flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-[#833AB4] via-[#C13584] to-[#E1306C] backdrop-blur-md hover:from-[#7c2d8e] hover:via-[#b12a75] hover:to-[#d42c5c] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-lime-500/25 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <span>© {currentYear} Amritya | </span>
              <span>Design & Developed by Ashish Paudel</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300 mt-4 px-4 md:mt-0 mr-10 cursor-pointer"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
