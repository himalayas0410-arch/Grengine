import React, { useState } from 'react';
import { ArrowRight, Award, ZoomIn, X, Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const compressorPhotos = [
  { url: '/images/products/air_compressor/compressor_1.jpeg', title: 'Industrial Air Compressor Cylinder & Piston Repair Kit' },
  { url: '/images/products/air_compressor/compressor_2.jpeg', title: 'Heavy Duty Air Compressor Block & Ring Assembly' }
];

const compatibleBrands = [
  { name: "GR Engine Parts", badge: "GR", desc: "Precision replacement air compressor kits, cylinders & pistons manufactured by GEE AAR." },
  { name: "IR (Ingersoll Rand)", badge: "IR", desc: "Heavy-duty compressor overhaul kits & replacement cylinder blocks for IR air systems." },
  { name: "Atlas Copco", badge: "ATLAS COPCO", desc: "High pressure compressor replacement kits & valves built to OEM specifications." },
  { name: "Betico", badge: "BETICO", desc: "Large bore 230mm & heavy industrial air compressor cylinder blocks & overhaul assemblies." }
];

export function AirCompressorKitsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="w-full bg-white font-sans">
      <SEO
        title="Air Compressor Kits | GR, IR, Atlas Copco & Betico"
        description="Air brake compressor repair overhaul kits, cylinder blocks, pistons & ring assemblies for GR, IR (Ingersoll Rand), Atlas Copco, and Betico compressors manufactured in Agra, India by GEE AAR."
        canonicalPath="/products/air-compressor-kits"
        image="https://geeaar.com/images/air_compressor_kits.jpeg"
      />

      {/* Hero Banner */}
      <section className="bg-zinc-950 text-white py-16 md:py-20 relative overflow-hidden border-b border-orange-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center space-x-2 bg-[#EA580C] text-black font-black text-xs px-3.5 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <Award className="w-4 h-4 mr-1" /> GEE AAR Engine Parts
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Air Compressor <span className="text-[#EA580C]">Kits & Blocks</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Precision-cast replacement air compressor kits, cylinder blocks, pistons, and valve assemblies for <strong>GR, IR (Ingersoll Rand), Atlas Copco, and Betico</strong> air systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="px-6 py-3 bg-[#EA580C] text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-orange-700 transition-colors shadow-lg">
                Get Quotation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Copy Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-zinc-700 leading-relaxed text-sm md:text-base">
              <span className="text-[#EA580C] text-xs font-black uppercase tracking-widest block mb-2">
                Pneumatic Engineering Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900 mb-6">
                Air Compressor Repair Kits & Blocks
              </h2>

              <p>
                GEE AAR manufactures high-precision <strong>Air Compressor Kits, Cylinder Blocks, Pistons, and Valves</strong> for heavy commercial vehicle air brake compressors, agricultural air systems, and industrial compressor units.
              </p>

              <p>
                Engineered with close-grained wear-resistant cast iron and precision honed cylinder bores to deliver maximum air delivery and extended seal life.
              </p>
            </div>

            <div
              onClick={() => setSelectedPhoto('/images/products/air_compressor/compressor_1.jpeg')}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 cursor-pointer group bg-zinc-50 p-4"
            >
              <img
                src="/images/products/air_compressor/compressor_1.jpeg"
                alt="Air Compressor Kit"
                className="w-full h-80 md:h-[400px] object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-8 right-8 bg-black/85 backdrop-blur-md text-white text-xs font-black px-3.5 py-1.5 rounded-lg border border-orange-500/50 shadow-xl flex items-center gap-1.5 uppercase tracking-widest pointer-events-none">
                <Check className="w-3.5 h-3.5 text-[#EA580C]" /> GR® Genuine
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 text-zinc-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                  <ZoomIn className="w-4 h-4 mr-2 text-[#EA580C]" /> Click to Zoom
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands Section */}
      <section className="py-16 bg-[#F8FAFC] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#EA580C] text-xs font-black uppercase tracking-widest block mb-2">
              Industry Compatible Coverage
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 uppercase tracking-tight">
              Air Compressor Kits & Brand Coverage
            </h2>
            <div className="w-16 h-1 bg-[#EA580C] mx-auto mt-3 rounded-full" />
            <p className="text-zinc-600 text-xs md:text-sm mt-4">
              We manufacture precision overhaul air compressor kits and replacement cylinder blocks compatible with leading international manufacturers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compatibleBrands.map((brand, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:border-[#EA580C] hover:shadow-md transition-all">
                <div className="inline-block bg-orange-50 text-[#EA580C] border border-orange-200 font-black text-xs px-3 py-1 rounded-md mb-3 uppercase tracking-wider">
                  {brand.badge}
                </div>
                <h3 className="font-extrabold text-zinc-900 text-base mb-2">{brand.name}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Product Photo Gallery Grid */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[#EA580C] text-xs font-extrabold uppercase tracking-widest block mb-2">
                Factory Product Gallery
              </span>
              <h2 className="text-3xl font-extrabold text-zinc-900">
                Air Compressor Product Lineup
              </h2>
            </div>
            <p className="text-zinc-500 text-xs mt-2 md:mt-0">
              Actual manufactured products from GEE AAR Agra factory
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {compressorPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="h-72 overflow-hidden bg-white p-6 flex items-center justify-center relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md border border-orange-500/50 shadow-md flex items-center gap-1 uppercase tracking-widest">
                    <Check className="w-3 h-3 text-[#EA580C]" /> GR® GENUINE
                  </div>
                </div>
                <div className="p-4 bg-zinc-900 text-white flex items-center justify-between">
                  <span className="font-bold text-xs truncate">{photo.title}</span>
                  <ZoomIn className="w-4 h-4 text-[#EA580C] shrink-0 ml-2 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Quote */}
      <section className="py-16 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Inquire About Air Compressor Kits</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm">
            Contact GEE AAR for volume air compressor pricing and technical specs for GR, IR, Atlas Copco, and Betico units.
          </p>
          <Link to="/quote" className="inline-flex items-center px-8 py-3.5 bg-[#EA580C] text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-orange-700 transition-colors shadow-lg">
            Request Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 p-4">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800 p-2 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="h-[75vh] flex items-center justify-center bg-white rounded-xl p-4">
              <img
                src={selectedPhoto}
                alt="Product Enlarged"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
