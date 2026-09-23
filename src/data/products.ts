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
    name: 'Cylinder Engine Heads',
    slug: 'cylinder-engine-heads',
    shortDescription: 'Precision engineered cylinder heads designed for heavy duty engine performance.',
    description: 'GEE AAR (GR) manufactures heavy-duty cylinder engine heads built with premium alloy cast iron. Featuring precision valve seats and combustion chambers engineered for optimal heat dissipation and severe duty compression.',
    category: 'Cylinder Engine Heads',
    image: '/images/kat.jpeg',
    applications: ['Agricultural Pumpsets', 'Industrial Engines', 'Stationary Power Units'],
    materials: ['High-Grade Alloy Cast Iron', 'Grey Cast Iron'],
  },
  {
    id: '2',
    name: 'Cylinder Air Cooled Blocks',
    slug: 'cylinder-air-cooled-blocks',
    shortDescription: 'High-durability air-cooled cylinder blocks engineered for extreme thermal load.',
    description: 'Centrifugally and shell-moulded cylinder air-cooled blocks designed with extended cooling fins for maximum heat exchange and dimensional stability under continuous heavy loads.',
    category: 'Cylinder Air Cooled Blocks',
    image: '/images/in_cylinder_liners.jpeg',
    applications: ['Agricultural Machinery', 'Diesel Pumpsets', 'Industrial Generators'],
    materials: ['Centrifugally Cast Iron', 'Pearlitic Grey Iron'],
  },
  {
    id: '3',
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
    id: '4',
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
    id: '5',
    name: 'Compression Piston Rings',
    slug: 'compression-piston-rings',
    shortDescription: 'High-sealing compression and oil scraper ring sets with protective coatings.',
    description: 'Engineered sealing solution available with chrome plating, nitriding, and molybdenum coatings for reduced friction, zero blow-by, and exceptional durability.',
    category: 'Piston Rings',
    image: '/images/piston_hero.jpg',
    applications: ['Automotive Engines', 'Agricultural Diesel Engines', 'Air Compressors'],
    materials: ['Ductile Cast Iron', 'Alloy Steel'],
  }
];
