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

const suitableBrandsRow1 = [
  { name: 'Volvo', img: '/images/suitable_for/logo-1.png', className: 'h-11 sm:h-13 md:h-14 max-w-[110px]' },
  { name: 'CAT', img: '/images/suitable_for/logo-9.png', className: 'h-11 sm:h-13 md:h-14 max-w-[130px]' },
  { name: 'Mercedes-Benz', img: '/images/suitable_for/logo-4.png', className: 'h-9 sm:h-11 md:h-12 max-w-[140px]' },
  { name: 'Toyota', img: '/images/suitable_for/logo-2.png', className: 'h-11 sm:h-13 md:h-14 max-w-[120px]' },
  { name: 'Perkins', img: '/images/suitable_for/logo-3.png', className: 'h-8 sm:h-9 md:h-10 max-w-[150px]' },
];

const suitableBrandsRow2 = [
  { name: 'Scania', img: '/images/suitable_for/logo-5.png', className: 'h-10 sm:h-12 md:h-13 max-w-[130px]' },
  { name: 'Ashok Leyland', img: '/images/suitable_for/logo-6.png', className: 'h-11 sm:h-13 md:h-14 max-w-[100px]' },
  { name: 'IVECO', img: '/images/suitable_for/logo-7.png', className: 'h-9 sm:h-10 md:h-11 max-w-[150px]' },
  { name: 'Deutz', img: '/images/suitable_for/logo-10.png', className: 'h-11 sm:h-13 md:h-14 max-w-[100px]' },
  { name: 'Mack', img: '/images/suitable_for/logo-8.png', className: 'h-10 sm:h-12 md:h-13 max-w-[130px]' },
  { name: 'Atlas Copco', img: '/images/suitable_for/logo-11.png', className: 'h-7 sm:h-8 md:h-9 max-w-[140px]' },
];

const suitableBrandsRow3 = [
  { name: 'Lister Petter', img: '/images/suitable_for/logo-12.png', className: 'h-10 sm:h-11 md:h-12 max-w-[110px]' },
  { name: 'Massey Ferguson', img: '/images/suitable_for/logo-14.png', className: 'h-11 sm:h-12 md:h-13 max-w-[140px]' },
  { name: 'FIAT', img: '/images/suitable_for/logo-13.png', className: 'h-7 sm:h-8 md:h-9 max-w-[140px]' },
  { name: 'Zetor', img: '/images/suitable_for/logo-15.png', className: 'h-9 sm:h-11 md:h-12 max-w-[140px]' },
  { name: 'UTB', img: '/images/suitable_for/logo-16.png', className: 'h-11 sm:h-13 md:h-14 max-w-[90px]' },
];

const suitableBrandsRow4 = [
  { name: 'Lombardini', img: '/images/suitable_for/logo-17.png', className: 'h-7 sm:h-8 md:h-8 max-w-[160px]' },
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

        {/* Soft gradient wash on the left to guarantee zero image overlap */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 md:w-3/5 lg:w-1/2 bg-gradient-to-r from-white/95 via-white/80 to-transparent z-[1] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 md:py-24">
          <div className="max-w-[460px] lg:max-w-[520px]">
            <div className="inline-block bg-[#EA580C] text-white text-[11px] font-black px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
              Best Auto Parts Manufacturers • Est. 1993
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 leading-[1.12] mb-3 tracking-tight uppercase">
              Cylinder Engine Heads, Air Cooled Blocks &amp; Pistons
            </h1>
            <div className="text-sm sm:text-base md:text-lg font-black text-[#EA580C] mb-3 leading-snug">
              Engineered for Maximum Durability &amp; Heat Dissipation
            </div>
            <p className="text-zinc-700 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-[440px] font-medium">
              Headquartered in C-59 Foundary Nagar, Agra, UP, GEE AAR delivers precision OE-standard engine spare parts for diesel, automotive, and industrial applications.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#EA580C] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-orange-700 transition-colors"
              >
                Explore Products <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-zinc-950 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-zinc-800 transition-colors"
              >
                Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GEE AAR Section */}
      <section className="py-16 md:py-20 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Engineering Reliability
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 uppercase tracking-tight">
              Why Choose GEE AAR Engine Parts?
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mb-4 rounded-full" />
            <p className="text-zinc-600 text-sm leading-relaxed">
              Serving domestic &amp; international engine markets since 1993 with 33 years of casting, CNC machining, and quality assurance excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-zinc-900 text-base mb-2">In-House Foundry</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Inductotherm melting furnaces and precision shell moulding deliver high-grade cast iron and aluminum alloys with zero porosity.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-zinc-900 text-base mb-2">Precision CNC Turning</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Multi-axis CNC turning and VMC machining centers ensure tight micron tolerances and consistent dimensional accuracy.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-zinc-900 text-base mb-2">33 Years Heritage</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Established in 1993 in Agra, India, GEE AAR provides 33 years of specialized expertise in engine components.
              </p>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-6 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-zinc-900 text-base mb-2">Pan-India Logistics</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Prompt dispatch and reliable freight connections across 17 Indian states and major transport hubs.
              </p>
            </div>
          </div>

          {/* Quick Stats Ribbon */}
          <div className="mt-12 bg-gradient-to-r from-orange-50/80 via-white to-orange-50/80 border border-orange-200/80 rounded-2xl p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xs">
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-black text-[#EA580C] tracking-tight">1993</div>
              <div className="text-zinc-700 text-xs font-extrabold uppercase tracking-wider mt-1.5">Established Year</div>
            </div>
            <div className="border-l border-orange-200/60 p-2">
              <div className="text-3xl md:text-4xl font-black text-[#EA580C] tracking-tight">33+</div>
              <div className="text-zinc-700 text-xs font-extrabold uppercase tracking-wider mt-1.5">Years Experience</div>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-orange-200/60 p-2 pt-4 sm:pt-2">
              <div className="text-3xl md:text-4xl font-black text-[#EA580C] tracking-tight">17+</div>
              <div className="text-zinc-700 text-xs font-extrabold uppercase tracking-wider mt-1.5">States Covered</div>
            </div>
            <div className="border-t sm:border-t-0 lg:border-l border-orange-200/60 p-2 pt-4 sm:pt-2">
              <div className="text-3xl md:text-4xl font-black text-[#EA580C] tracking-tight">300 Pcs</div>
              <div className="text-zinc-700 text-xs font-extrabold uppercase tracking-wider mt-1.5">Standard MOQ</div>
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

      {/* SUITABLE FOR Section - Matching Reference Design */}
      <section className="py-20 md:py-24 bg-white border-t border-zinc-200/80 overflow-hidden relative">
        {/* Subtle radial center highlight matching user design */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.035)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight uppercase mb-3">
              SUITABLE FOR
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mb-5 rounded-full" />
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
              Precision-engineered engine spare parts, cylinder engine heads, air cooled blocks, pistons &amp; components suitable for leading global commercial vehicle, tractor, agricultural &amp; industrial engine brands.
            </p>
          </div>

          {/* Logo Showcase - 4 Balanced Clean Rows Matching Reference Image */}
          <div className="space-y-10 md:space-y-14 max-w-5xl mx-auto">
            
            {/* Row 1: Volvo, CAT, Mercedes-Benz, Toyota, Perkins */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              {suitableBrandsRow1.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110 p-2 cursor-pointer"
                  title={`Suitable for ${logo.name}`}
                >
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className={`${logo.className} w-auto object-contain drop-shadow-xs transition-opacity hover:opacity-90`}
                  />
                </div>
              ))}
            </div>

            {/* Row 2: Scania, Ashok Leyland, IVECO, Deutz, Mack, Atlas Copco */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-11 md:gap-14">
              {suitableBrandsRow2.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110 p-2 cursor-pointer"
                  title={`Suitable for ${logo.name}`}
                >
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className={`${logo.className} w-auto object-contain drop-shadow-xs transition-opacity hover:opacity-90`}
                  />
                </div>
              ))}
            </div>

            {/* Row 3: Lister Petter, Massey Ferguson, FIAT, Zetor, UTB */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              {suitableBrandsRow3.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110 p-2 cursor-pointer"
                  title={`Suitable for ${logo.name}`}
                >
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className={`${logo.className} w-auto object-contain drop-shadow-xs transition-opacity hover:opacity-90`}
                  />
                </div>
              ))}
            </div>

            {/* Row 4: Lombardini */}
            <div className="flex flex-wrap items-center justify-center">
              {suitableBrandsRow4.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center transition-transform duration-300 hover:scale-110 p-2 cursor-pointer"
                  title={`Suitable for ${logo.name}`}
                >
                  <img
                    src={logo.img}
                    alt={logo.name}
                    className={`${logo.className} w-auto object-contain drop-shadow-xs transition-opacity hover:opacity-90`}
                  />
                </div>
              ))}
            </div>

          </div>

          {/* Disclaimer Note */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-[11px] text-zinc-400 leading-relaxed italic bg-zinc-50 p-4 rounded-xl border border-zinc-200/70">
              * Note: All manufacturer names, numbers, symbols, and logos used herein are for reference purposes only. The parts supplied are high-quality precision aftermarket replacement engine components manufactured by GEE AAR (GR Engine Parts).
            </p>
          </div>

        </div>
      </section>

      {/* DOMESTIC NETWORK & PRESENCE Section - Clean Image Display */}
      <section className="py-16 md:py-20 bg-white border-b border-zinc-100">
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

          {/* Map Image Display - No background box or border */}
          <div className="flex items-center justify-center">
            <img
              src="/images/neworangemap.png"
              alt="GEE AAR Pan-India Domestic Network & Presence Map"
              className="max-h-[640px] w-auto object-contain"
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
