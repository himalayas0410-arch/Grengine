import { ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/SEO';

const products = [
  { 
    id: '1', 
    slug: 'kirloskar-engine-heads', 
    name: 'Kirloskar Engine Heads', 
    category: 'Kirloskar Engine Parts', 
    shortDescription: 'Precision engineered replacement cylinder heads built with premium alloy cast iron for Kirloskar diesel engines and pumpsets.', 
    image: '/images/kat.jpeg' 
  },
  { 
    id: '2', 
    slug: 'kirloskar-cylinder-blocks', 
    name: 'Air-Cooled Kirloskar Cylinder Blocks', 
    category: 'Kirloskar Engine Parts', 
    shortDescription: 'Heavy-duty air-cooled cylinder blocks cast with extended cooling fins for maximum heat exchange under severe continuous duty.', 
    image: '/images/in_cylinder_liners.jpeg' 
  },
  { 
    id: '3', 
    slug: 'cylinder-liners', 
    name: 'Cylinder Liners (Dry & Wet)', 
    category: 'Engine Components', 
    shortDescription: 'Centrifugally cast grey iron cylinder liners with 95%+ pearlitic micro-structure, plateau honing, and high wear resistance.', 
    image: '/images/in_cylinder_liners.jpeg' 
  },
  { 
    id: '4', 
    slug: 'pistons', 
    name: 'Precision Engine Pistons', 
    category: 'Engine Components', 
    shortDescription: 'Precision engineered eutectic aluminum pistons with optional Ni-Resist ring carrier inserts and CNC machined skirts.', 
    image: '/images/pistons.jpeg' 
  },
  { 
    id: '5', 
    slug: 'air-compressor-kits', 
    name: 'Air Brake Compressor Repair Kits', 
    category: 'Braking & Air Systems', 
    shortDescription: 'Complete overhaul repair kits including cylinder block, pistons, and piston rings for heavy-duty truck air brake systems.', 
    image: '/images/air_compressor_kits.jpeg' 
  },
  { 
    id: '6', 
    slug: 'bush-pins', 
    name: 'Hardened Bush Pins', 
    category: 'Suspension & Mechanical Pins', 
    shortDescription: 'High grade alloy steel bush pins case-hardened and centerless ground for high load-bearing suspension and engine assemblies.', 
    image: '/images/air_compressor.jpeg' 
  },
  { 
    id: '7', 
    slug: 'engine-bearings', 
    name: 'Engine Bearings & Bushings', 
    category: 'Engine Components', 
    shortDescription: 'Bi-metal & tri-metal connecting rod and crankshaft main bearing shells engineered for heavy duty commercial and agricultural engines.', 
    image: '/images/air_compressor.jpeg' 
  },
  { 
    id: '8', 
    slug: 'custom-manufacturing', 
    name: 'Precision Shell-Moulded Castings', 
    category: 'Foundry & OEM', 
    shortDescription: 'Custom shell-moulded grey iron, ductile SG iron, and aluminum gravity die castings produced to exact CAD drawings.', 
    image: '/images/our_castings.jpeg' 
  }
];

export function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full pt-12 pb-24 bg-white min-h-screen font-sans">
      <SEO 
        title="Engine Spare Parts Catalog | GEE ARR (GR)"
        description="Explore GEE ARR (GR) complete catalog: Kirloskar Engine Heads, Air-Cooled Cylinder Blocks, Dry & Wet Cylinder Liners, Pistons, Air Compressor Kits, and Bush Pins."
        canonicalPath="/products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block bg-[#EA580C] text-white text-xs font-black px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-sm">
            GEE ARR (GR) Catalog
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
            Engineered Engine Spare Parts
          </h1>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Browse our core product catalog for automotive, agricultural, and industrial diesel engines. Custom OEM production available based on technical drawings or physical samples.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search catalog by component name, specification, or application..." 
              className="w-full bg-white border border-zinc-200 rounded-xl py-3.5 pl-12 pr-4 text-xs font-medium text-zinc-900 focus:outline-none focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden bg-zinc-50 p-6 flex items-center justify-center border-b border-zinc-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#EA580C] mb-2">{product.category}</div>
                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">{product.name}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link 
                  to={product.slug === 'custom-manufacturing' ? '/custom-manufacturing' : `/products/${product.slug}`} 
                  className="inline-flex items-center text-xs font-extrabold text-[#EA580C] hover:text-orange-700 transition-colors uppercase tracking-wider"
                >
                  View Details & Specs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}

          {/* Custom OEM Card */}
          <div className="group bg-zinc-950 rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between text-left p-8 border border-zinc-800 relative">
            <div>
              <div className="inline-block bg-[#EA580C] text-white text-[10px] font-black px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Custom OEM Engineering
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Custom Component Orders</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                Send us your CAD technical drawings or physical sample components. GEE ARR manufactures custom pistons, cylinder liners, and alloy castings to your exact specifications.
              </p>
            </div>
            <Link 
              to="/custom-manufacturing" 
              className="inline-flex justify-center items-center px-6 py-3.5 bg-[#EA580C] text-white font-extrabold rounded-xl hover:bg-orange-700 transition-colors w-full uppercase tracking-wider text-xs shadow-md"
            >
              Custom Inquiry Request
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
