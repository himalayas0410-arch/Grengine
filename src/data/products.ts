export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  applications: string[];
  materials: string[];
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kirloskar Engine Heads',
    slug: 'kirloskar-engine-heads',
    shortDescription: 'Precision engineered cylinder heads designed specifically for Kirloskar engine models.',
    description: 'GEE ARR (GR) manufactures heavy-duty Kirloskar cylinder heads built with premium alloy cast iron. Featuring precision valve seats and combustion chambers engineered for optimal heat dissipation and severe duty compression.',
    category: 'Kirloskar Engine Heads',
    image: '/images/kat.jpeg',
    applications: ['Agricultural Pumpsets', 'Industrial Engines', 'Stationary Power Units'],
    materials: ['High-Grade Alloy Cast Iron', 'Grey Cast Iron'],
  },
  {
    id: '2',
    name: 'Air-Cooled Kirloskar Cylinder Blocks',
    slug: 'kirloskar-cylinder-blocks',
    shortDescription: 'High-durability air-cooled cylinder blocks engineered for Kirloskar engines.',
    description: 'Centrifugally and shell-moulded air-cooled cylinder blocks designed with extended cooling fins for maximum heat exchange and dimensional stability under continuous heavy loads.',
    category: 'Kirloskar Cylinder Blocks',
    image: '/images/in_cylinder_liners.jpeg',
    applications: ['Agricultural Machinery', 'Diesel Pumpsets', 'Industrial Generators'],
    materials: ['Centrifugally Cast Iron', 'Pearlitic Grey Iron'],
  },
  {
    id: '3',
    name: 'Precision Cylinder Liners',
    slug: 'precision-cylinder-liners',
    shortDescription: 'Dry & wet cylinder liners centrifugally cast for long operational life.',
    description: 'Centrifugally cast cylinder liners honed with high-precision cross-hatching to ensure micro-oil retention, minimum friction, and maximum ring seating durability under extreme pressures.',
    category: 'Cylinder Liners',
    image: '/images/in_cylinder_liners.jpeg',
    applications: ['Automotive Diesel Engines', 'Tractors & Farm Equipment', 'Industrial Compressors'],
    materials: ['Centrifugally Cast Iron', 'Alloy Cast Iron'],
  },
  {
    id: '4',
    name: 'High-Performance Pistons',
    slug: 'high-performance-pistons',
    shortDescription: 'Engineered eutectic silicon-aluminum pistons with Ni-Resist inserts.',
    description: 'Manufactured with advanced thermal conductivity alloys, precision CNC machined skirt profiles, and optional Ni-Resist ring carrier inserts to withstand thermal stress and cylinder pressure.',
    category: 'Pistons',
    image: '/images/pistons.jpeg',
    applications: ['Commercial Vehicles', 'Tractors & Farm Machinery', 'Diesel Engines'],
    materials: ['Eutectic Aluminum Alloy', 'Forged Alloy'],
  },
  {
    id: '5',
    name: 'Air Compressor Repair Kits',
    slug: 'air-compressor-kits',
    shortDescription: 'Complete repair & overhaul kits including cylinder blocks, pistons, and rings.',
    description: 'Heavy-duty air brake compressor repair kits manufactured for truck and commercial air brake systems, featuring precision ground bore tolerances and severe-service piston ring packs.',
    category: 'Air Compressor Kits',
    image: '/images/air_compressor_kits.jpeg',
    applications: ['Heavy Commercial Trucks', 'Buses & Trailers', 'Air Brake Systems'],
    materials: ['Alloy Steel', 'Cast Iron', 'High-Grade Aluminum'],
  },
  {
    id: '6',
    name: 'Hardened Bush Pins',
    slug: 'hardened-bush-pins',
    shortDescription: 'Precision ground and case-hardened bush pins built for maximum load capacity.',
    description: 'Manufactured from high-grade alloy steel, case-hardened to precise depth tolerances, centerless ground, and lapped for smooth articulation and high wear resistance under heavy loads.',
    category: 'Bush Pins',
    image: '/images/air_compressor.jpeg',
    applications: ['Heavy Machinery', 'Suspension & Steering Systems', 'Engine Assemblies'],
    materials: ['Case-Hardened Alloy Steel', '20MnCr5 Steel'],
  },
  {
    id: '7',
    name: 'Compression Piston Rings',
    slug: 'compression-piston-rings',
    shortDescription: 'High-sealing compression and oil scraper ring sets with protective coatings.',
    description: 'Engineered sealing solution available with chrome plating, nitriding, and molybdenum coatings for reduced friction, zero blow-by, and exceptional durability.',
    category: 'Piston Rings',
    image: '/images/piston_hero.jpg',
    applications: ['Automotive Engines', 'Agricultural Diesel Engines', 'Air Compressors'],
    materials: ['Ductile Cast Iron', 'Alloy Steel'],
  },
  {
    id: '8',
    name: 'Heavy-Duty Engine Bearings',
    slug: 'engine-bearings',
    shortDescription: 'Bi-metal and tri-metal precision engine bearings and bushings.',
    description: 'Engineered main and connecting rod bearings delivering high fatigue strength, superior embeddability, and conformability for demanding engine operating environments.',
    category: 'Engine Bearings',
    image: '/images/air_compressor.jpeg',
    applications: ['Commercial Diesel Engines', 'Tractors', 'Industrial Machinery'],
    materials: ['Aluminum-Tin Alloy', 'Copper-Lead Tri-Metal'],
  }
];
