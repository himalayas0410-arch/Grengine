import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Wrench, Package, ArrowRight, Shield, Layers, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { SEO } from '../components/SEO';

const airCooledBlockVariants = [
  {
    name: "Deutz 912 / 913 Air Cooled Cylinder Block",
    code: "DEUTZ 912 / 913",
    img: "/images/air_cooled_blocks/Deutz 912.jpeg",
    desc: "Heavy-duty 100mm bore air-cooled cylinder block with extended cooling fins for Deutz diesel engines."
  },
  {
    name: "Deutz 413F Air Cooled Cylinder Block",
    code: "DEUTZ 413F",
    img: "/images/air_cooled_blocks/Deutz 413f.jpeg",
    desc: "High performance deep-finned air cooled cylinder block engineered for heavy industrial power packs."
  },
  {
    name: "Lister Petter PH / ST Air Cooled Block",
    code: "LISTER PETTER",
    img: "/images/air_cooled_blocks/Lister Petter Blocks.jpeg",
    desc: "Precision centrifugally cast air-cooled cylinder block for Lister Petter agricultural & pumpset engines."
  },
  {
    name: "Mercedes 100mm AC 4-Fin Cylinder Block",
    code: "MERCEDES 100MM",
    img: "/images/air_cooled_blocks/Merc 100mm ac 4f new.jpeg",
    desc: "Alloy cast iron 4-fin deep cooling air-cooled block designed for commercial engine applications."
  },
  {
    name: "Mercedes 90mm AC Cylinder Block",
    code: "MERCEDES 90MM",
    img: "/images/air_cooled_blocks/Merc 90mm ac.jpeg",
    desc: "Precision honed 90mm air cooled cylinder block with deep heat dissipation fins."
  },
  {
    name: "Betico 230mm Industrial Compressor Block",
    code: "BETICO 230MM",
    img: "/images/air_cooled_blocks/Betico 230mm.jpeg",
    desc: "Large bore 230mm heavy-duty air compressor cylinder block for high pressure industrial air systems."
  },
  {
    name: "Elgi Compressor 100mm Cylinder Block",
    code: "ELGI 100MM",
    img: "/images/air_cooled_blocks/Elgi compressor 100mm.jpeg",
    desc: "Heavy-duty replacement 100mm air compressor block for industrial and automotive brake compressors."
  },
  {
    name: "Petter PH Air Cooled Block",
    code: "PETTER PH",
    img: "/images/air_cooled_blocks/Petter ph.jpeg",
    desc: "Classic deep-finned air-cooled cylinder block cast for single and multi-cylinder Petter diesel engines."
  }
];

export function KirloskarCylinderBlocksPage() {
  const [activeImg, setActiveImg] = useState(airCooledBlockVariants[0].img);

  const specs = [
    { label: "Compatible Engines", value: "Deutz, Lister Petter, Mercedes, Petter PH, Agricultural Diesel Engines" },
    { label: "Cooling Type", value: "Air-Cooled (Extended Deep Thermal Cooling Fins)" },
    { label: "Casting Process", value: "Centrifugal & Shell Moulded Fine Grain Grey Iron (>95% Pearlite)" },
    { label: "Hardness Range", value: "210 - 240 BHN for Maximum Scuff & Wear Resistance" },
    { label: "Quality Compliance", value: "100% Dimensional Inspection & Spectro Melt Assurance" },
    { label: "MOQ", value: companyConfig.moq }
  ];

  const features = [
    "Heavy-duty deep fin design optimizing forced air heat dissipation under continuous high temperature operation.",
    "High wear-resistant centrifugally cast alloy iron composition preventing sleeve distortion and bore wear.",
    "Micro-honed cross-hatch bore finish for superior oil film retention and immediate ring seating.",
    "Direct replacement fitment guaranteed for Deutz, Lister Petter, Mercedes, and agricultural engines.",
    "Strict metallurgical spectro-analysis and dimensional inspection on every production batch."
  ];

  return (
    <div className="w-full bg-white font-sans">
      <SEO 
        title="Cylinder Air Cooled Blocks Manufacturer | GEE AAR (GR)"
        description="GEE AAR (GR) manufactures heavy-duty cylinder air cooled blocks for Deutz, Lister Petter, Mercedes & Petter engines in Agra, India."
        canonicalPath="/products/cylinder-air-cooled-blocks"
      />

      {/* Header Banner */}
      <section className="bg-zinc-950 text-white py-16 md:py-20 relative overflow-hidden border-b border-orange-600/30">
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block bg-[#EA580C] text-black text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            GEE AAR (GR) Core Offering
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Cylinder <span className="text-[#EA580C]">Air Cooled Blocks</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
            High-durability cylinder air cooled block assemblies engineered with extended cooling fins for Deutz, Lister Petter, Mercedes, tractors, diesel pumps, and industrial generators.
          </p>
        </div>
      </section>

      {/* Main Interactive Gallery Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Main Product Image Display with Watermark */}
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-50 p-4 flex items-center justify-center">
                <img 
                  src={activeImg} 
                  alt="Cylinder Air Cooled Block by GEE AAR (GR)" 
                  className="w-full h-80 md:h-[420px] object-contain rounded-2xl transition-all duration-300"
                />
                <div className="absolute top-6 right-6 bg-black/85 backdrop-blur-md text-white text-xs font-black px-3.5 py-1.5 rounded-lg border border-orange-500/50 shadow-xl flex items-center gap-1.5 uppercase tracking-widest pointer-events-none">
                  <Shield className="w-3.5 h-3.5 text-[#EA580C]" /> GR® Genuine
                </div>
                <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-lg border border-orange-500/30 pointer-events-none">
                  Deep Fin Air-Cooled Design
                </div>
              </div>

              {/* Thumbnails list */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {airCooledBlockVariants.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(item.img)}
                    className={`relative rounded-xl overflow-hidden border-2 h-16 bg-white p-1 transition-all ${
                      activeImg === item.img ? 'border-[#EA580C] ring-2 ring-orange-200 scale-105' : 'border-zinc-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-[#EA580C] text-xs font-black uppercase tracking-widest block mb-2">
                In-House Foundry & Machining Excellence
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-4 tracking-tight">
                Superior Air Cooling & Dimensional Stability
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                GEE AAR (GR) Cylinder Air Cooled Blocks are centrifugally and shell cast from fine-grain alloy grey iron with precision-engineered cooling fins. The high thermal dissipation prevents cylinder distortion and bore scuffing under severe environmental conditions and long working hours.
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#EA580C] mr-3 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 text-xs md:text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quote"
                  className="bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all flex items-center uppercase tracking-wider"
                >
                  Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="bg-black hover:bg-zinc-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center"
                >
                  Call +91 6396566120
                </a>
              </div>
            </div>

          </div>

          {/* Air Cooled Blocks Range Showcase */}
          <div className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#EA580C] text-xs font-black uppercase tracking-widest block mb-2">
                Real Manufactured Inventory
              </span>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">
                Air Cooled Cylinder Blocks Range
              </h2>
              <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {airCooledBlockVariants.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    setActiveImg(item.img);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative h-48 bg-zinc-50 p-4 border-b border-zinc-100 flex items-center justify-center">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md border border-orange-500/50 shadow-md flex items-center gap-1 uppercase tracking-widest">
                        <Check className="w-3 h-3 text-[#EA580C]" /> GR® GENUINE
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-2">
                        {item.code}
                      </span>
                      <h3 className="font-extrabold text-zinc-900 text-sm mb-2 group-hover:text-[#EA580C] transition-colors">{item.name}</h3>
                      <p className="text-zinc-600 text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <span className="inline-flex items-center text-xs font-extrabold text-[#EA580C] uppercase tracking-wider">
                      Inspect Model <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 md:p-8 mb-16 shadow-sm">
            <h3 className="text-xl font-extrabold text-zinc-900 mb-6 uppercase tracking-wider flex items-center">
              <Wrench className="w-5 h-5 text-[#EA580C] mr-2" /> Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specs.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-zinc-200/80 text-xs md:text-sm px-2">
                  <span className="font-bold text-zinc-600">{item.label}</span>
                  <span className="font-semibold text-zinc-900 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
