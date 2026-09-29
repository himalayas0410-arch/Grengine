import { CheckCircle2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';


const meltingItems = [
  "Inductotherm Melting Furnaces: More than 100 tons per month",
  "Non-Ferrous Melting Furnaces: x4"
];

const machiningItems = [
  "CNC Turning Machines",
  "VMC Milling Machine",
  "Over 30 Lathes, SPM's of Different Kinds (Turning, Drilling, Milling, Boring, Broaching etc.)",
  "Specialised Honing Machines for Cylinder Liners",
  "Plato Honing Machines for Superior Cylinder Surface Finish"
];

const measuringItems = [
  "Bore Gauges",
  "Micron Dials with Comparator Stands",
  "Vernier Calipers",
  "Rockwell Hardness Tester",
  "Piston Combustion Chamber Measuring",
  "Air Gauge with Digital Readout",
  "Height Gauge",
  "CE Meter",
  "Microstructure Analysis",
  "Resin Sand Analysis"
];

const otherEquipmentItems = [
  "Heat Treatment Furnace for Optimum Hardness",
  "Shot Blasting Machines",
  "Phosphate Coating Equipment",
  "Other Equipment for Surface Finishes Required by Customers"
];

const faqs = [
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "Our MOQ is 300 pieces per order."
  },
  {
    q: "Are you a certified manufacturer?",
    a: "Yes, GEE AAR (GR Engine Parts) is a certified precision manufacturer adhering to strict quality control."
  },
  {
    q: "Do you offer customized branding and packaging?",
    a: "Yes, we offer tailored OEM packaging, custom laser marking, and customized box branding according to client specifications."
  },
  {
    q: "Which markets do you serve?",
    a: "We export high-performance engine parts across international markets in Europe, Middle East, Africa, Latin America, and Asia."
  },
  {
    q: "Do you develop new engine parts?",
    a: "Yes, our engineering team manufactures custom pistons, cylinder air cooled blocks, and castings based on technical drawings or physical samples."
  }
];

export function Infrastructure() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-white font-sans">
      <SEO
        title="Manufacturing Infrastructure, Foundry & CNC Machining | GEE AAR"
        description="Explore GEE AAR (GR Engine Parts) manufacturing facility in Agra, India: Inductotherm melting furnaces, CNC turning, VMC milling, spectro analysis & honing."
        canonicalPath="/infrastructure"
      />

      {/* Hero Header */}
      <section className="bg-zinc-950 text-white py-16 md:py-20 relative overflow-hidden text-center border-b border-orange-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Manufacturing <span className="text-[#EA580C]">Infrastructure</span>
          </h1>
        </div>
      </section>

      {/* Section 1: Melting */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Melting
              </h2>
              <ul className="space-y-4 pt-2">
                {meltingItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EA580C] mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 p-2 bg-white">
                <img
                  src="/images/melting.jpeg"
                  alt="Inductotherm Melting Furnace Facility"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Machining */}
      <section className="py-16 md:py-24 bg-[#F4F6F9] border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Machining & Honing
              </h2>
              <ul className="space-y-4 pt-2">
                {machiningItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EA580C] mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Subcategory Showcase Cards */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Specialised Honing Machines for Cylinder Liners */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200 group hover:border-[#EA580C] transition-all flex flex-col justify-between">
                  <div className="h-56 overflow-hidden bg-zinc-100 relative">
                    <img
                      src="/images/machining.jpeg"
                      alt="Specialised Honing Machines for Cylinder Liners"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-[#EA580C] text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider border border-orange-500/40 shadow-md">
                      Honing Facility
                    </span>
                  </div>
                  <div className="p-5 bg-white border-t border-zinc-100">
                    <h3 className="font-extrabold text-zinc-900 text-sm sm:text-base leading-snug">
                      Specialised Honing Machines for Cylinder Liners
                    </h3>
                  </div>
                </div>

                {/* Plato Honing */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200 group hover:border-[#EA580C] transition-all flex flex-col justify-between">
                  <div className="h-56 overflow-hidden bg-zinc-100 relative">
                    <img
                      src="/images/pleto_honing.jpeg"
                      alt="Plato Honing Machine"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-[#EA580C] text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider border border-orange-500/40 shadow-md">
                      Plato Honing
                    </span>
                  </div>
                  <div className="p-5 bg-white border-t border-zinc-100">
                    <h3 className="font-extrabold text-zinc-900 text-sm sm:text-base leading-snug">
                      Plato Honing
                    </h3>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Measuring - Updated with Indian QA Engineer Image */}
      <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Measuring
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3 pt-2">
                {measuringItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EA580C] mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image with Indian Quality Assurance Mechanical Engineer */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 p-2 bg-zinc-50">
                <img
                  src="/images/indian_qa_measuring.jpg"
                  alt="Indian Quality Assurance Mechanical Engineer Measuring Engine Block Bore Gauge"
                  className="w-full h-[450px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Other Equipment */}
      <section className="py-16 md:py-24 bg-[#F4F6F9] border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 p-2 bg-white">
                <img
                  src="/images/shotblastingimage.jpeg"
                  alt="Industrial Shot Blasting Equipment"
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Other Equipment
              </h2>
              <ul className="space-y-4 pt-2">
                {otherEquipmentItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EA580C] mr-3 mt-0.5 shrink-0" />
                    <span className="text-zinc-700 text-sm md:text-base font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-10 text-center">
            FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-zinc-50 hover:bg-zinc-100/80 transition-colors font-bold text-zinc-900 text-sm md:text-base"
                  >
                    <span className="flex items-center">
                      <span className="text-[#EA580C] mr-2 font-mono">+</span> {faq.q}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-zinc-500 shrink-0 ml-4" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-500 shrink-0 ml-4" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-zinc-100 text-zinc-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
