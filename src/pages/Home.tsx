import { motion } from 'framer-motion';
import { ArrowRight, Package, Eye, Target, CheckCircle2, Building2, MapPin, Phone, Mail, Award, Truck, ShieldCheck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';
import { useState } from 'react';
import { SEO } from '../components/SEO';

const productsGrid = [
  { 
    name: 'CYLINDER ENGINE HEADS', 
    desc: 'Precision engineered replacement cylinder heads for diesel engines, pumpsets, and industrial units.', 
    img: '/images/kat.jpeg', 
    path: '/products/cylinder-engine-heads' 
  },
  { 
    name: 'CYLINDER AIR COOLED BLOCKS', 
    desc: 'Air-cooled cylinder blocks cast with extended cooling fins for maximum heat exchange and durability.', 
    img: '/images/in_cylinder_liners.jpeg', 
    path: '/products/cylinder-air-cooled-blocks' 
  },
  { 
    name: 'PISTONS', 
    desc: 'Durable eutectic silicon-aluminum alloy pistons with Ni-Resist ring groove carrier inserts.', 
    img: '/images/pistons.jpeg', 
    fallbackImg: '/images/piston_hero.jpg',
    path: '/products/pistons' 
  },
  { 
    name: 'AIR BRAKE COMPRESSOR KITS', 
    desc: 'Complete repair overhaul kits including cylinder block, pistons, and piston rings for heavy-duty trucks.', 
    img: '/images/air_compressor_kits.jpeg', 
    path: '/products/air-compressor-kits' 
  },
  { 
    name: 'PISTON RINGS & PINS', 
    desc: 'Engineered compression ring sets with chrome and nitriding coatings for minimal blow-by.', 
    img: '/images/piston_hero.jpg', 
    path: '/products/piston-rings' 
  },
  { 
    name: 'PRECISION CASTINGS', 
    desc: 'Custom shell-moulded grey iron, SG iron, and aluminum gravity castings built to technical drawings.', 
    img: '/images/our_castings.jpeg', 
    path: '/custom-manufacturing' 
  }
];

const domesticLocations = [
  { name: 'Agra - UP', hub: 'Central HQ & Manufacturing Plant' },
  { name: 'Punjab', hub: 'Agricultural & Tractor Spare Hub' },
  { name: 'Srinagar', hub: 'J&K Distribution Network' },
  { name: 'UTTARAKHAND', hub: 'Industrial & Transport Network' },
  { name: 'Mumbai', hub: 'Port & Commercial Fleet Hub' },
  { name: 'Haryana', hub: 'Heavy Equipment & Agro Parts' },
  { name: 'Jaipur', hub: 'Rajasthan Distribution Center' },
  { name: 'Gujarat', hub: 'Industrial & Marine Engine Hub' },
  { name: 'Lucknow', hub: 'UP Regional Distribution' },
  { name: 'Delhi', hub: 'Capital Transport & Aftermarket Market' },
  { name: 'Bihar', hub: 'Agricultural Pumpset Parts Network' },
  { name: 'West Bengal', hub: 'Kolkata Commercial Engine Supply' },
  { name: 'Hyderabad', hub: 'Telangana & AP Distribution' },
  { name: 'Bengaluru', hub: 'Karnataka Industrial Network' },
  { name: 'Chennai', hub: 'Automotive & Engine Components Hub' },
  { name: 'Kerala', hub: 'South Coast Supply Network' },
  { name: 'Manipur', hub: 'North-East Engine Parts Supply' }
];

const faqs = [
  { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our MOQ is 300 pieces per order per line item." },
  { q: "Are you a certified engine parts manufacturer?", a: "Yes, GEE AAR (GR Engine Parts) is a premier manufacturer committed to precision manufacturing and strict quality control." },
  { q: "Do you supply Cylinder Engine Heads and Air Cooled Blocks?", a: "Yes! We specialize in Cylinder Engine Heads and Cylinder Air Cooled Blocks engineered to exact manufacturer specifications." },
  { q: "Where is GEE AAR located and when was it established?", a: "GEE AAR was established in 1993 in C-59 Foundary Nagar, Agra, UP, India, with 33 years of engineering excellence." },
  { q: "Which states and cities are covered in your domestic network?", a: "We have an extensive domestic presence across 17 major hubs including Agra, Punjab, Srinagar, Uttarakhand, Mumbai, Haryana, Jaipur, Gujarat, Lucknow, Delhi, Bihar, West Bengal, Hyderabad, Bengaluru, Chennai, Kerala, and Manipur." }
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="w-full bg-white text-zinc-900 font-sans">
      <SEO 
        title="GEE AAR (GR) - Auto & Agricultural Engine Spare Parts Manufacturer Agra"
        description="GEE AAR (GR) - Premier manufacturer of Cylinder Engine Heads, Cylinder Air Cooled Blocks & Pistons in C-59 Foundary Nagar, Agra, India since 1993."
        canonicalPath="/"
      />

      {/* Hero Section - Matching Exact Original Structure */}
      <section className="w-full relative overflow-hidden min-h-[550px] md:min-h-[620px] flex items-center bg-[#EEF1F5] border-b border-zinc-100">
        <img 
          src="/images/newbanner.png" 
          alt="GEE AAR GR Engine Parts Hero Banner" 
          className="absolute inset-0 w-full h-full object-cover object-right z-0"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 md:py-24">
          <div className="max-w-xl lg:max-w-2xl bg-white/40 md:bg-transparent p-6 md:p-0 rounded-3xl backdrop-blur-sm md:backdrop-blur-none">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-block bg-[#EA580C] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider shadow-sm">
                BEST AUTO PARTS MANUFACTURERS
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 leading-[1.18] mb-4 tracking-tight max-w-xl">
                {companyConfig.tagline}
              </h1>
              <div className="text-base md:text-lg font-bold text-[#EA580C] mb-3 leading-snug">
                Manufacturer of Engine Heads, Air Cooled Blocks & Pistons
              </div>
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                Leading engine parts manufacturer & exporter serving global OEMs and aftermarket with 33 years of engineering excellence.
              </p>
              <div>
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-8 py-4 bg-[#EA580C] text-white font-bold text-sm rounded-full hover:bg-orange-700 transition-all shadow-md"
                >
                  More Details <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Props & Key Stats */}
      <section className="py-10 md:py-14 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'QUALITY', desc: 'Renowned for high precision quality and commitment to engineering excellence since 1993' },
              { icon: Eye, title: 'VISION', desc: 'Our aim is to be a market leader in precision machined engine components across global markets' },
              { icon: Target, title: 'MISSION', desc: 'Delivering precision-engineered engine components with reliability, innovation, and long-term partnership.' }
            ].map((prop, i) => (
              <div key={i} className="flex items-start space-x-4 p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200/70 hover:border-orange-200 transition-colors">
                <div className="p-2.5 bg-orange-50 text-[#EA580C] rounded-xl shrink-0">
                  <prop.icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-zinc-900 text-base mb-1 tracking-wide">{prop.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-orange-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl shrink-0">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-600 tracking-tight leading-none mb-1">33</div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">Years Experience</div>
                <div className="text-zinc-500 text-[11px] font-medium">Established 1993 in Agra</div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-orange-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl shrink-0">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-blue-600 tracking-tight leading-none mb-1">17+</div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">Domestic Hubs</div>
                <div className="text-zinc-500 text-[11px] font-medium">Pan-India Network</div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-orange-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-orange-500/10 text-orange-600 rounded-2xl shrink-0">
                <Package className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-3xl font-black text-orange-600 tracking-tight leading-none mb-1">500K+</div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">Monthly Capacity</div>
                <div className="text-zinc-500 text-[11px] font-medium">High Volume Production</div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-zinc-200/70 hover:border-orange-200 transition-colors flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 rounded-2xl shrink-0">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-purple-600 tracking-tight leading-none mb-1 uppercase">OEM Quality</div>
                <div className="text-zinc-800 text-xs font-extrabold uppercase tracking-wide">Engine Grade Standard</div>
                <div className="text-zinc-500 text-[11px] font-medium">Precision Manufacturing</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OUR PRODUCTS Section - Matching Exact Original Layout */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Our Core Offerings
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 uppercase">
              OUR PRODUCTS
            </h2>
            <p className="text-zinc-600 text-sm">
              Explore our precision-engineered engine components. Each links to its dedicated specification page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsGrid.map((product, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 flex flex-col justify-between group">
                <div className="h-56 overflow-hidden relative bg-zinc-50 flex items-center justify-center p-4">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    onError={(e) => {
                      if (product.fallbackImg) {
                        (e.target as HTMLImageElement).src = product.fallbackImg;
                      }
                    }}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* GR Watermark overlay badge */}
                  <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-md border border-orange-500/50 shadow-lg flex items-center gap-1 uppercase tracking-widest pointer-events-none">
                    <Check className="w-3 h-3 text-orange-500" /> GR® GENUINE
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-black text-white drop-shadow-md">{product.name}</h3>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">{product.desc}</p>
                  <Link 
                    to={product.path} 
                    className="inline-flex items-center text-[#EA580C] font-extrabold text-xs uppercase tracking-wider group-hover:text-orange-700 transition-colors"
                  >
                    View Product Page <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMESTIC NETWORK & PRESENCE Section - Clean Image Display */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Pan-India Supply & Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-3 uppercase tracking-tight">
              DOMESTIC NETWORK & PRESENCE
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mb-4 rounded-full" />
            <p className="text-zinc-600 text-sm leading-relaxed">
              Headquartered in C-59 Foundary Nagar, Agra, UP, GEE AAR maintains a robust distribution network ensuring fast order fulfillment across India.
            </p>
          </div>

          {/* Map Image Display Only */}
          <div className="rounded-3xl overflow-hidden bg-[#F8FAFC] border border-zinc-200 p-4 md:p-8 shadow-sm flex items-center justify-center">
            <img 
              src="/images/neworangemap.png" 
              alt="GEE AAR Pan-India Domestic Network & Presence Map" 
              className="max-h-[600px] w-auto object-contain rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* SINGLE BRAND GEE AAR Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-8 md:p-10 shadow-xs">
            <div className="inline-flex items-center space-x-2 mb-4">
              <img src="/images/gr_logo.jpeg" alt="GR Logo" className="h-10 w-auto object-contain" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-3 tracking-tight">
              GEE AAR Engine Parts
            </h2>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-6">
              Under our brand name <strong>GEE AAR</strong>, we manufacture high-performance Cylinder Engine Heads, Cylinder Air Cooled Blocks, Pistons, and precision engine components from C-59 Foundary Nagar, Agra, India.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex items-center text-xs font-bold text-zinc-800 bg-white px-4 py-2 rounded-lg border border-zinc-200">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] mr-2" /> 100% Quality Inspected
              </div>
              <div className="flex items-center text-xs font-bold text-zinc-800 bg-white px-4 py-2 rounded-lg border border-zinc-200">
                <Award className="w-4 h-4 text-[#EA580C] mr-2" /> Precision Engineering
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block mb-2">
            Trusted Quality
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 mb-3">Client Testimonials</h2>
          <p className="text-zinc-500 text-xs mb-12">See what engine parts distributors say about GEE AAR</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 text-left">
              <div className="text-amber-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-600 text-xs leading-relaxed mb-6 italic">
                "GEE AAR delivers high quality Cylinder Air Cooled Blocks consistently on time. Communication with their Agra office is seamless."
              </p>
              <div>
                <div className="font-extrabold text-zinc-900 text-xs">Aftermarket Parts Distributor</div>
                <div className="text-zinc-400 text-[11px]">North India Regional Partner</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200 text-left">
              <div className="text-amber-400 text-lg mb-4">★★★★★</div>
              <p className="text-zinc-600 text-xs leading-relaxed mb-6 italic">
                "We have worked with GEE AAR for years. Their dimensional tolerances on Cylinder Engine Heads and pistons are excellent."
              </p>
              <div>
                <div className="font-extrabold text-zinc-900 text-xs">Agro Equipment Dealer</div>
                <div className="text-zinc-400 text-[11px]">Western India Representative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900">Frequently Asked Questions</h2>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-zinc-200 last:border-0">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-zinc-800 hover:bg-zinc-50 transition-colors text-sm"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#EA580C] font-black shrink-0 text-lg">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-zinc-600 text-xs leading-relaxed bg-zinc-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
