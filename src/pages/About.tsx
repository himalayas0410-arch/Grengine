import { Award, CheckCircle2, ArrowRight, ShieldCheck, Building2, Target, Globe, MapPin, TrendingUp, Sparkles } from 'lucide-react';
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
        title="About GEE AAR (GR) - Established 1993 in Agra, India"
        description="Learn about GEE AAR (GR Engine Parts). Established in 1993 in C-59 Foundary Nagar, Agra, India, we are a premier manufacturer of Cylinder Engine Heads, Air Cooled Blocks, and Pistons."
        canonicalPath="/about"
      />

      {/* Hero Banner */}
      <section className="bg-zinc-950 text-white py-16 md:py-24 relative overflow-hidden border-b border-orange-600/30">
        <div className="absolute inset-0 bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-[#EA580C] text-black font-black text-xs px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-md">
              <Award className="w-4 h-4 mr-1" /> ESTABLISHED 1993 | AGRA, INDIA
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight leading-tight">
              About GEE AAR <span className="text-[#EA580C]">GR</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              33 years of engineering precision, quality manufacturing, and pan-India presence in auto & agricultural engine spare parts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-12 text-zinc-700 leading-relaxed text-sm md:text-base">
              
              {/* Company History */}
              <div className="p-6 md:p-8 rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Company History & Heritage</h2>
                <p className="text-zinc-800 font-semibold leading-relaxed">
                  Established in 1993 in C-59 Foundary Nagar, Agra, India, <strong>GEE AAR (GR Engine Parts)</strong> has been a trusted pioneer in manufacturing precision auto and agricultural engine spare parts for 33 years.
                </p>
                <p className="text-zinc-600 text-sm">
                  From humble beginnings in 1993, GEE AAR has expanded into a state-of-the-art manufacturing operation equipped with modern shell moulding foundries, CNC machining centers, and comprehensive quality assurance testing equipment.
                </p>
                <p className="text-zinc-600 text-sm">
                  We specialize in heavy-duty replacement engine components including <strong>Cylinder Engine Heads, Cylinder Air Cooled Blocks, Eutectic Silicon Pistons, Air Compressor Kits, and Piston Rings</strong>.
                </p>
              </div>

              {/* Why GEE AAR? */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-200/90 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">
                      Why GEE AAR?
                    </h2>
                    <ul className="space-y-3 text-xs md:text-sm text-zinc-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                        <span><strong>Flexible MOQs:</strong> Tailored solutions for businesses of all sizes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                        <span><strong>In-House Manufacturing:</strong> Total quality control with every process under one roof.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                        <span><strong>Custom Branding:</strong> Aligning with your brand identity through customized products and packaging.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                        <span><strong>Global Expertise:</strong> Trusted by businesses in international markets, including the USA.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                        <span><strong>Commitment to Excellence:</strong> Precision engineering, durable products, and timely delivery define our services.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-zinc-50 h-64 md:h-72">
                      <img 
                        src="/images/our_castings.jpeg" 
                        alt="GEE AAR Manufacturing & Packaging Excellence" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Vision and Mission */}
              <div className="bg-[#F8FAFC] rounded-3xl p-6 md:p-8 border border-zinc-200 space-y-6">
                <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">
                  Our Vision and Mission
                </h2>
                <div className="space-y-4 text-xs md:text-sm">
                  <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs">
                    <h3 className="font-extrabold text-zinc-900 text-sm md:text-base mb-1.5 flex items-center">
                      <Globe className="w-4 h-4 text-[#EA580C] mr-2" /> Vision
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      To become a global leader in the auto parts manufacturing industry by consistently exceeding customer expectations with innovative and reliable solutions.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs">
                    <h3 className="font-extrabold text-zinc-900 text-sm md:text-base mb-1.5 flex items-center">
                      <Target className="w-4 h-4 text-[#EA580C] mr-2" /> Mission
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      To provide superior engine components that enhance the performance and reliability of our customers' engines, while upholding the highest standards of integrity and quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality and Innovation / Measuring */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-zinc-200/90 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-6 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">
                      Quality and Innovation
                    </h2>
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      At GEE AAR, quality is not just a standard; it's our tradition. We operate an <strong>in-house foundry</strong> and <strong>machine shop</strong>, allowing us to <strong>maintain stringent quality control</strong> and provide limitless <strong>customization options</strong>.
                    </p>
                    <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                      Our commitment to innovation ensures that we are always at the <strong>forefront of technological advancements</strong>, delivering products that meet and exceed our customer's requirements.
                    </p>

                    <div className="pt-2 border-t border-zinc-100">
                      <h3 className="font-extrabold text-zinc-900 text-sm mb-3">Precision Measuring & Inspection Tools:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-zinc-700">
                        {[
                          "Bore Gauges",
                          "Micron Dials & Comparators",
                          "Vernier Calipers",
                          "Rockwell Hardness Tester",
                          "Piston Chamber Measuring",
                          "Air Gauge Digital Readout",
                          "Height Gauge",
                          "CE Melt Meter",
                          "Microstructure Analysis",
                          "Resin Sand Analysis"
                        ].map((tool, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0" />
                            <span>{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-6">
                    <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-zinc-50">
                      <img 
                        src="/images/qa_measuring_inspection.png" 
                        alt="Quality Assurance Technician Measuring Engine Block Bore Gauge in Metrology Lab" 
                        className="w-full h-80 md:h-[380px] object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Growth & Expansion */}
              <div className="bg-[#F8FAFC] rounded-3xl p-6 md:p-8 border border-zinc-200 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight mb-2">
                    Our Growth & Expansion
                  </h2>
                  <p className="text-zinc-600 text-xs md:text-sm">
                    We are making significant advancements to expand our capabilities and drive growth.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200 space-y-4">
                  <h3 className="font-black text-zinc-900 text-sm md:text-base border-b border-zinc-100 pb-2">
                    Recent Advancements (FY 2024-25):
                  </h3>
                  <ul className="space-y-3 text-xs md:text-sm text-zinc-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                      <span><strong>1.5x Increase in Casting Capacity:</strong> Expanded both aluminium & grey cast iron casting capacity.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                      <span><strong>40%+ Increase in Production Output:</strong> Achieved through process optimization & efficiency improvements. Also, adding new machinery.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                      <span><strong>20% Increase in Workforce:</strong> Strengthened our team to support higher production demands.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                      <span><strong>Eliminating Bottlenecks:</strong> Focused on increasing throughput & streamlining manufacturing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                      <span><strong>On-Time Delivery & Product Expansion:</strong> Prioritizing shipment reliability while expanding our product range.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#EA580C] mt-2 mr-3 shrink-0" />
                      <span><strong>New Workforce Training:</strong> Investing in skill development to maintain GEE AAR's high-quality standards.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Future Growth Initiatives */}
              <div className="bg-zinc-950 text-white rounded-3xl p-6 md:p-8 border border-zinc-800 space-y-6 shadow-xl">
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">
                    Future Growth Initiatives
                  </h2>
                  <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block">
                    (FY 2025-2026)
                  </span>
                </div>

                <ul className="space-y-3.5 text-xs md:text-sm text-zinc-300">
                  <li className="flex items-start">
                    <Sparkles className="w-4 h-4 text-[#EA580C] mt-0.5 mr-3 shrink-0" />
                    <span><strong className="text-white">New CNC Machining Capacity:</strong> Expanding precision & efficiency with new CNC machines.</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-4 h-4 text-[#EA580C] mt-0.5 mr-3 shrink-0" />
                    <span><strong className="text-white">2x Increase in Grey Cast Iron Casting:</strong> Investing in a higher-capacity furnace.</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-4 h-4 text-[#EA580C] mt-0.5 mr-3 shrink-0" />
                    <span><strong className="text-white">Expanded Aluminium Capacity:</strong> Increasing aluminium melting capabilities to meet rising demand.</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-4 h-4 text-[#EA580C] mt-0.5 mr-3 shrink-0" />
                    <span><strong className="text-white">Product Diversification:</strong> Utilising our casting & machining capacity to manufacture a wide variety of high-quality components as per buyer requirements.</span>
                  </li>
                </ul>

                <p className="text-xs md:text-sm text-zinc-400 border-t border-zinc-800/80 pt-4 italic">
                  These strategic initiatives position GEE AAR for long-term success, ensuring we remain a trusted partner for high-quality components.
                </p>
              </div>

              {/* Uncompromising Quality Policy */}
              <div className="p-6 md:p-8 bg-zinc-900 text-white rounded-3xl border border-zinc-800 shadow-xl">
                <h3 className="text-xl font-extrabold text-[#EA580C] mb-3">Uncompromising Quality Policy</h3>
                <p className="mb-4 text-zinc-300 text-xs md:text-sm leading-relaxed">
                  At GEE AAR, quality is engineered into every stage of production. From raw material melt analysis on multi-channel optical emission spectrometers to final dimensional inspection, every part meets rigorous OE-grade standards.
                </p>
                <div className="font-extrabold text-white text-sm border-l-4 border-[#EA580C] pl-4 py-1">
                  Quality is never an accident—it is the result of 33 years of disciplined processes and technical excellence.
                </div>
              </div>

              {/* Domestic Presence Grid */}
              <div className="bg-zinc-50 rounded-3xl p-6 md:p-8 border border-zinc-200/80 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6 text-[#EA580C]" />
                  <h3 className="text-xl font-extrabold text-zinc-900">Domestic Network & Presence</h3>
                </div>
                <p className="text-zinc-600 text-sm mb-6">
                  Supplying stockists, OEMs, and aftermarket distributors across 17 key states and commercial hubs in India:
                </p>

                <div className="mb-6 rounded-2xl overflow-hidden bg-white border border-zinc-200 p-3 shadow-sm flex items-center justify-center">
                  <img 
                    src="/images/neworangemap.png" 
                    alt="GEE AAR Pan-India Network Map" 
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

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 shadow-sm text-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-950/60 text-[#EA580C] border border-orange-800/40 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-black text-2xl text-zinc-900 mb-1 tracking-tight">GEE AAR</h3>
                <div className="text-xs font-extrabold text-[#EA580C] uppercase tracking-wider mb-4">Brand: GR • Est. 1993</div>
                <div className="p-4 rounded-xl bg-white border border-zinc-200 text-xs font-bold text-zinc-800">
                  C-59 Foundary Nagar, Agra, UP, India<br/>
                  <span className="text-zinc-500 font-normal">Phone: +91 6396566120</span>
                </div>
              </div>

              <div className="bg-zinc-950 text-white p-8 rounded-3xl shadow-xl border border-zinc-800">
                <h4 className="font-bold text-base mb-4 text-[#EA580C] uppercase tracking-wider">Core Product Range</h4>
                <ul className="space-y-3 text-xs">
                  {[
                    "Cylinder Engine Heads",
                    "Cylinder Air Cooled Blocks",
                    "Pistons & Pin Assemblies",
                    "Air Brake Compressor Kits",
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
