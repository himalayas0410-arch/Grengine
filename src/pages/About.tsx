import { Award, CheckCircle2, ArrowRight, ShieldCheck, Building2, Target, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { SEO } from '../components/SEO';

const domesticLocations = [
  "Agra - UP", "Punjab", "Srinagar", "UTTARAKHAND", "Mumbai", 
  "Haryana", "Jaipur", "Gujarat", "Lucknow", "Delhi", 
  "Bihar", "West Bengal", "Hyderabad", "Bengaluru", "Chennai", "Kerala", "Manipur"
];

export function About() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans">
      <SEO 
        title="About GEE ARR (GR) - Established 1960 in Agra, India"
        description="Learn about GEE ARR (GR Engine Parts). Established in 1960 in Foundry Nagar, Agra, India, we are a premier manufacturer of Kirloskar Engine Heads, Cylinder Blocks, Liners, and Pistons."
        canonicalPath="/about"
      />

      {/* Hero Banner */}
      <section className="bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-orange-600/30">
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-[#EA580C] text-black font-black text-xs px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-md">
              <Award className="w-4 h-4 mr-1" /> ESTABLISHED 1960 | AGRA, INDIA
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
              About GEE ARR <span className="text-[#EA580C]">GR</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Over 65 years of engineering precision, quality manufacturing, and pan-India presence in auto & agricultural engine spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
              <div className="p-6 md:p-8 rounded-3xl bg-zinc-50 border border-zinc-200 mb-8 shadow-sm">
                <h2 className="text-2xl font-black text-zinc-900 mb-3 tracking-tight">Company History & Heritage</h2>
                <p className="text-zinc-800 font-semibold leading-relaxed">
                  Established in 1960 in Foundry Nagar, Agra, India, <strong>GEE ARR (GR Engine Parts)</strong> has been a trusted pioneer in manufacturing precision auto and agricultural engine spare parts for over six decades.
                </p>
              </div>

              <p>
                From humble beginnings in 1960, GEE ARR has expanded into a state-of-the-art manufacturing operation equipped with modern shell moulding foundries, CNC machining centers, and comprehensive quality assurance testing equipment.
              </p>

              <p>
                We specialize in heavy-duty replacement engine components including <strong>Kirloskar Engine Heads, Air-Cooled Kirloskar Cylinder Blocks, Centrifugally Cast Cylinder Liners, Eutectic Silicon Pistons, Air Compressor Kits, Hardened Bush Pins, and Piston Rings</strong>.
              </p>

              <div className="my-8 p-6 md:p-8 bg-zinc-900 text-white rounded-3xl border border-zinc-800 shadow-xl">
                <h3 className="text-xl font-extrabold text-[#EA580C] mb-3">Uncompromising Quality Policy</h3>
                <p className="mb-4 text-zinc-300 text-xs md:text-sm leading-relaxed">
                  At GEE ARR, quality is engineered into every stage of production. From raw material melt analysis on multi-channel optical emission spectrometers to final CMM dimensional inspection, every part meets rigorous OE-grade standards.
                </p>
                <div className="font-extrabold text-white text-sm border-l-4 border-[#EA580C] pl-4 py-1">
                  Quality is never an accident—it is the result of 65+ years of disciplined processes and technical excellence.
                </div>
              </div>

              {/* Domestic Presence Grid */}
              <div className="my-10 bg-zinc-50 rounded-3xl p-6 md:p-8 border border-zinc-200/80 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#EA580C]" />
                  <h3 className="text-xl font-extrabold text-zinc-900">Domestic Network & Presence</h3>
                </div>
                <p className="text-zinc-600 text-sm mb-6">
                  Supplying stockists, OEMs, and aftermarket distributors across 17 key states and commercial hubs in India:
                </p>

                <div className="mb-6 rounded-2xl overflow-hidden bg-white border border-zinc-200 p-3 shadow-sm flex items-center justify-center">
                  <img 
                    src="/images/orangemap.png" 
                    alt="GEE ARR Pan-India Network Map" 
                    className="max-h-96 w-auto object-contain rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {domesticLocations.map((loc, idx) => (
                    <div key={idx} className="bg-white border border-zinc-200 rounded-xl p-3 text-center text-xs font-bold text-zinc-800 shadow-xs">
                      {loc}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black text-white mt-8">
                <div className="flex items-center space-x-3 mb-2 text-[#EA580C] font-bold text-xs uppercase tracking-wider">
                  <Target className="w-5 h-5" /> Our Mission
                </div>
                <p className="text-base md:text-lg font-bold">
                  To manufacture high performance engine parts that keep commercial vehicles and agricultural machinery running reliably across India and global markets.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 shadow-sm text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-950/60 text-[#EA580C] border border-orange-800/40 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl text-zinc-900 mb-1 tracking-tight">GEE ARR</h3>
                <div className="text-xs font-extrabold text-[#EA580C] uppercase tracking-wider mb-4">Brand: GR • Est. 1960</div>
                <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs font-bold text-zinc-800">
                  G-59 Foundry Nagar, Agra, UP, India<br/>
                  <span className="text-zinc-500 font-normal">Phone: +91 6396566120</span>
                </div>
              </div>

              <div className="bg-zinc-950 text-white p-8 rounded-3xl shadow-xl border border-zinc-800">
                <h4 className="font-bold text-base mb-4 text-[#EA580C] uppercase tracking-wider">Core Product Range</h4>
                <ul className="space-y-3 text-xs">
                  {[
                    "Kirloskar Engine Heads",
                    "Kirloskar Cylinder Blocks (Air Cooled)",
                    "Cylinder Liners & Sleeves",
                    "Pistons & Pin Assemblies",
                    "Air Brake Compressor Kits",
                    "Hardened Bush Pins",
                    "Compression Piston Rings",
                    "Precision Shell-Moulded Castings"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] mr-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/quote" className="mt-8 block w-full py-3.5 text-center bg-[#EA580C] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-orange-700 transition-colors shadow-md">
                  Contact Sales Office
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
