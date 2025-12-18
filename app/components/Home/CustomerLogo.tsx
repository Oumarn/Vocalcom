"use client";

const companies = [
  { name: "Bouygues", image: "/assets/bouygues.png", class: "w-28 h-16 object-contain" },
  { name: "Armatis", image: "/assets/armatis.png", class: "w-28 h-16 object-contain" },
  { name: "anheuse", image: "/assets/anheuse.svg", class: "w-28 h-16 object-contain" },
  { name: "Abu Dhabi", image: "/assets/abu_dhabi.svg", class: "w-28 h-16 object-contain" },
  { name: "Bouygues Telecom", image: "/assets/bouygues_telecom.png", class: "w-28 h-16 object-contain" },
  { name: "mcdonalds", image: "/assets/mcdonalds.svg", class: "w-28 h-16 object-contain" },
  { name: "mm", image: "/assets/mm.png", class: "w-28 h-16 object-contain" },
  { name: "renault", image: "/assets/renault.svg", class: "w-28 h-16 object-contain" },
  { name: "mauritius", image: "/assets/mauritius.jpg", class: "w-28 h-16 object-contain" },
  { name: "Vinci", image: "/assets/Vinci_Unternehmen_logo.svg", class: "w-28 h-16 object-contain" },
  { name: "Nespresso", image: "/assets/Monogramme_Nespresso.png", class: "w-28 h-16 object-contain" },
  { name: "Barcelona", image: "/assets/barcelona.png", class: "w-28 h-16 object-contain" },
  { name: "Bioderma", image: "/assets/bioderma-logo.png", class: "w-28 h-16 object-contain" },
  { name: "Petroleum Institute", image: "/assets/The-Petroleum-Institute.png", class: "w-28 h-16 object-contain" },
  { name: "AXA", image: "/assets/AXA_Logo.svg", class: "w-28 h-16 object-contain" },
  { name: "Majid", image: "/assets/majid.png", class: "w-28 h-16 object-contain" },
];

export default function CustomerLogo() {
  return (
    <section className="py-12 bg-[#F8FAFC] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-10 text-center">
        <p className="text-xl lg:text-3xl font-bold text-slate-900">
          Ils nous font confiance :
        </p>
      </div>

      <div className="infinite-scroll-container">
        <div className="infinite-scroll">
          {/* liste originale */}
          <div className="logos gap-10 md:gap-14 lg:gap-16">
            {companies.map((company, idx) => (
              <img
                key={idx}
                src={company.image}
                alt={company.name}
                className={company.class}
              />
            ))}
          </div>

          {/* clone */}
          <div className="logos gap-10 md:gap-14 lg:gap-16" aria-hidden="true">
            {companies.map((company, idx) => (
              <img
                key={`clone-${idx}`}
                src={company.image}
                alt=""
                className={company.class}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
