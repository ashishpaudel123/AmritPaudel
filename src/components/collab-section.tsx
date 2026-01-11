import { useState } from "react";

export function CollabSection() {
  const companies = [
    {
      name: "VizaNation",
      logo: "collab/vnation.png",
      url: "https://www.facebook.com/profile.php?id=61571326718352",
    },
    {
      name: "getjobnepal.com",
      logo: "collab/getjob.png",
      url: "https://www.facebook.com/getjobnep",
    },
    {
      name: "Vizanation Dhangadhi Branch",
      logo: "collab/vnation-dhangadhi.png",
      url: "https://www.facebook.com/profile.php?id=61574117789962",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const logosPerPage = 3;
  const totalPages = Math.ceil(companies.length / logosPerPage);

  const visibleCompanies = companies.slice(
    currentPage * logosPerPage,
    (currentPage + 1) * logosPerPage
  );

  return (
    <section className="pb-20 bg-white dark:bg-neutral-900 text-center">
      <div className="mb-1" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          COLLABORATED WITH
        </h2>
        <div className="flex justify-center mt-3">
          <div className="w-80 h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>
        </div>
      </div>

      <div className="relative overflow-hidden p-8">
        <div className="flex justify-center items-center gap-12 transition-opacity duration-500">
          {visibleCompanies.map((company, index) => (
            <a
              key={currentPage * logosPerPage + index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={index * 150}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden dark:bg-neutral-800 shadow-lg flex items-center justify-center dark:border-neutral-700">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>
              <p className="text-lg text-wrap capitalize pt-2 font-semibold text-gray-700 dark:text-gray-300 text-center">
                {company.name}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`transition-all duration-300 ${
                index === currentPage
                  ? "bg-gray-800 dark:bg-white w-8 h-2"
                  : "bg-gray-300 dark:bg-gray-600 w-2 h-2"
              } rounded-full`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
