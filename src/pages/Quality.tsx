import { ShieldCheck, Ruler, Focus, Microscope, FileText, CheckSquare, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Quality() {
  const qualitySteps = [
    { title: 'Incoming Material Inspection', desc: 'Spectrographic analysis of raw material to ensure chemical composition matches metallurgical standards.' },
    { title: 'Process Control', desc: 'Continuous monitoring of temperature, pressure, and time during casting, forging, and heat treatment.' },
    { title: 'Dimensional Inspection', desc: 'Precision measurement using CMMs (Coordinate Measuring Machines) and bore gauges to verify tolerances.' },
    { title: 'Surface Inspection', desc: 'Profilometer testing to ensure surface roughness meets exact engineering specifications for optimal oil retention.' },
    { title: 'Performance Testing', desc: 'Hardness testing, ultrasonic flaw detection, and simulated load testing.' },
    { title: 'Final Inspection & Packaging', desc: '100% visual inspection and secure, anti-corrosive export packaging.' },
  ];

  const measuringTools = [
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

  return (
    <div className="w-full pt-24 bg-white min-h-screen font-sans">
      <SEO
        title="Quality Standards & Spectro Analysis | GEE AAR (GR)"
        description="Learn about GEE AAR (GR Engine Parts) quality assurance system: CMM dimensional inspection, spectro alloy analysis & surface profiling in Agra."
        canonicalPath="/quality"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="max-w-3xl mb-16">
          <div className="inline-block bg-[#EA580C] text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
            Quality Assurance
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">Quality Is Engineered Into Every Component.</h1>
          <p className="text-lg text-zinc-600">
            Our commitment to quality is non-negotiable. We employ a rigorous, multi-stage inspection process to ensure zero-defect delivery to our global OEM and aftermarket partners.
          </p>
        </div>

        {/* Measuring Section - Matching Exact User Request */}
        <div className="mb-24 bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
                Measuring & Inspection
              </h2>

              <div className="space-y-3">
                {measuringTools.map((tool, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EA580C] shrink-0" />
                    <span className="text-zinc-800 text-sm md:text-base font-semibold">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Indian QA Engineer Image */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-white p-2">
                <img 
                  src="/images/indian_qa_measuring.jpg" 
                  alt="Indian QA Mechanical Engineer Measuring Engine Block Bore Gauge" 
                  className="w-full h-80 md:h-[420px] object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Quality Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['100% Dimensional Inspection', 'Spectro Melt Alloy Control', 'OEM Grade Tolerances'].map((cert, index) => (
              <div key={index} className="bg-zinc-50 border border-zinc-200 p-6 rounded-2xl flex items-start group hover:border-[#EA580C] hover:shadow-sm transition-all">
                <ShieldCheck className="w-8 h-8 text-[#EA580C] mr-4 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1">{cert}</h3>
                  <p className="text-sm text-zinc-500">Certified for Excellence</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">The Quality Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualitySteps.map((step, index) => (
              <div key={index} className="bg-white border border-zinc-200 p-8 rounded-2xl relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute -top-4 -right-4 p-4 opacity-5 font-bold text-8xl text-[#EA580C] select-none">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-zinc-600 relative z-10 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 border-b border-zinc-200 pb-4">Inspection Equipment</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Focus, name: 'Coordinate Measuring Machine (CMM)' },
              { icon: Ruler, name: 'Surface Roughness Tester' },
              { icon: Microscope, name: 'Metallurgical Microscope' },
              { icon: CheckSquare, name: 'Hardness Tester' },
              { icon: FileText, name: 'Profile Projector' },
              { icon: Ruler, name: 'Bore Gauges & Micrometers' },
            ].map((eq, index) => (
              <div key={index} className="flex items-center p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
                <eq.icon className="w-5 h-5 text-[#EA580C] mr-3 shrink-0" />
                <span className="text-sm text-zinc-700 font-semibold">{eq.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
