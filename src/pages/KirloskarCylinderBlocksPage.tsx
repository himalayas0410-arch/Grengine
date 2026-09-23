import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Wrench, Package, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { SEO } from '../components/SEO';

export function KirloskarCylinderBlocksPage() {
  const specs = [
    { label: "Compatible Engines", value: "Agricultural Diesel & Air-Cooled Engines" },
    { label: "Cooling Type", value: "Air-Cooled (Extended Deep Thermal Cooling Fins)" },
    { label: "Casting Process", value: "Centrifugal & Shell Moulded Fine Grain Grey Iron" },
    { label: "Hardness Range", value: "210 - 240 BHN for Maximum Scuff & Wear Resistance" },
    { label: "Quality Compliance", value: "OE Manufacturing Standards" },
    { label: "MOQ", value: companyConfig.moq }
  ];

  const features = [
    "Heavy-duty deep fin design optimizing forced air heat dissipation under continuous high temperature operation.",
    "High wear-resistant centrifugally cast alloy iron composition preventing sleeve distortion and bore wear.",
    "Micro-honed cross-hatch bore finish for superior oil film retention and immediate ring seating.",
    "Direct replacement fitment guaranteed for agricultural diesel engines and pumpsets.",
    "Strict metallurgical spectro-analysis and CMM inspection on every production batch."
  ];

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Cylinder Air Cooled Blocks Manufacturer | GEE AAR (GR)"
        description="GEE AAR (GR) manufactures heavy-duty cylinder air cooled blocks with deep cooling fins and centrifugally cast iron in Agra, India."
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
            High-durability cylinder air cooled block assemblies engineered with extended cooling fins for agricultural tractors, diesel pumps, and industrial generators.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Product Image with GR Watermark */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100 p-4">
              <img 
                src="/images/in_cylinder_liners.jpeg" 
                alt="Cylinder Air Cooled Block by GEE AAR (GR)" 
                className="w-full h-80 md:h-[420px] object-cover rounded-xl"
              />
              <div className="absolute top-8 right-8 bg-black/85 backdrop-blur-md text-white text-xs font-black px-3.5 py-1.5 rounded-lg border border-orange-500/50 shadow-xl flex items-center gap-1.5 uppercase tracking-widest">
                <Shield className="w-3.5 h-3.5 text-[#EA580C]" /> GR® Genuine
              </div>
              <div className="absolute bottom-8 left-8 bg-black/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-lg border border-orange-500/30">
                Deep Fin Air-Cooled Design
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-4 tracking-tight">
                Superior Air Cooling & Dimensional Stability
              </h2>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                GEE AAR (GR) Cylinder Air Cooled Blocks are cast from fine-grain alloy grey iron with precision-engineered cooling fins. The high thermal dissipation prevents cylinder distortion and bore scuffing under severe environmental conditions and long working hours.
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
                  className="bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-sm px-6 py-3.5 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all flex items-center uppercase tracking-wider"
                >
                  Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href={`tel:${companyConfig.phone}`}
                  className="bg-black hover:bg-zinc-800 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all flex items-center"
                >
                  Call +91 6396566120
                </a>
              </div>
            </div>

          </div>

          {/* Specifications Table */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 md:p-8 mb-16 shadow-sm">
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
