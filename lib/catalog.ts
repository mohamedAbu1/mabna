export type CatalogCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
  items: string[];
};

export type CatalogProduct = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  summary: string;
  spec: string;
  useCase: string;
  image: string;
  badge?: string;
};

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "structural-materials",
    title: "Structural Materials",
    eyebrow: "01 / Structure",
    description: "The dependable base for foundations, walls, slabs and the structure around them.",
    image: "/assets/cat-cement-materials.png",
    accent: "Foundation-ready",
    items: ["Blocks & bricks", "Aggregates", "Concrete accessories", "Formwork essentials"],
  },
  {
    slug: "cement-materials",
    title: "Cement & Materials",
    eyebrow: "02 / Mix",
    description: "Core materials for a clean, consistent mix from the first pour to the final repair.",
    image: "/assets/planner-cement.png",
    accent: "Built for the mix",
    items: ["Cement", "Mortar & repair", "Sand & aggregates", "Admixtures & sealants"],
  },
  {
    slug: "steel-sections",
    title: "Steel & Sections",
    eyebrow: "03 / Frame",
    description: "Sections, reinforcement and metalwork selected for the load, span and finish you have in mind.",
    image: "/assets/cat-steel-sections.png",
    accent: "Frame the future",
    items: ["Rebar", "Hollow sections", "Angles & flats", "Mesh & binding wire"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    eyebrow: "04 / Work",
    description: "Reliable hand and power tools that keep the site moving through every stage of the build.",
    image: "/assets/cat-building-tools.png",
    accent: "Ready for the work",
    items: ["Hand tools", "Power tools", "Measuring tools", "Material handling"],
  },
  {
    slug: "site-setup",
    title: "Site Setup",
    eyebrow: "05 / Prepare",
    description: "Practical site essentials that make the work area safer, cleaner and easier to manage.",
    image: "/assets/cat-site-setup.png",
    accent: "Start with control",
    items: ["Storage & protection", "Access equipment", "Site signage", "Temporary supplies"],
  },
  {
    slug: "safety-ppe",
    title: "Safety & PPE",
    eyebrow: "06 / Protect",
    description: "Personal protection and site safety essentials for crews, workshops and day-to-day work.",
    image: "/assets/hero-storefront.png",
    accent: "Protect the crew",
    items: ["Helmets & eyewear", "Gloves", "Safety footwear", "High-visibility wear"],
  },
  {
    slug: "finishes-waterproofing",
    title: "Finishes & Waterproofing",
    eyebrow: "07 / Finish",
    description: "The systems that protect the build and give every surface a considered final layer.",
    image: "/assets/mabna-desktop-reference.png",
    accent: "Finish with confidence",
    items: ["Waterproofing", "Tile adhesives", "Paint & coatings", "Grouts & sealants"],
  },
  {
    slug: "plumbing-electrical",
    title: "Plumbing & Electrical",
    eyebrow: "08 / Connect",
    description: "Everyday infrastructure materials for water, power and the systems behind the finished space.",
    image: "/assets/planner-tools.png",
    accent: "Connect the details",
    items: ["Pipes & fittings", "Cables & conduits", "Switches & sockets", "Valves & accessories"],
  },
];

export const catalogProducts: CatalogProduct[] = [
  {
    slug: "structural-cement",
    name: "Structural cement",
    category: "cement-materials",
    categoryLabel: "Cement & Materials",
    summary: "A dependable starting point for structural mixes and everyday site work.",
    spec: "50 kg bag · project quote",
    useCase: "Foundations, slabs and masonry",
    image: "/assets/3d/unique/products/structural-cement-v2.png",
    badge: "Core material",
  },
  {
    slug: "reinforcement-steel",
    name: "Reinforcement steel",
    category: "steel-sections",
    categoryLabel: "Steel & Sections",
    summary: "Rebar and reinforcement options organised around the structure you are building.",
    spec: "Standard diameters · cut to brief",
    useCase: "Columns, slabs and footings",
    image: "/assets/3d/unique/products/reinforcement-steel-v2.png",
    badge: "Structural",
  },
  {
    slug: "site-tool-set",
    name: "Site tool set",
    category: "tools-equipment",
    categoryLabel: "Tools & Equipment",
    summary: "The essential hand tools for measuring, preparing and finishing daily site work.",
    spec: "Curated set · ready to quote",
    useCase: "General construction work",
    image: "/assets/3d/unique/products/site-tool-set-v2.png",
    badge: "Site essential",
  },
  {
    slug: "masonry-blocks",
    name: "Masonry blocks",
    category: "structural-materials",
    categoryLabel: "Structural Materials",
    summary: "Practical walling materials for dependable partitions, boundaries and build stages.",
    spec: "Bulk quantities · delivery planning",
    useCase: "Walls, partitions and site works",
    image: "/assets/3d/unique/products/masonry-blocks-v2.png",
  },
  {
    slug: "waterproofing-system",
    name: "Waterproofing system",
    category: "finishes-waterproofing",
    categoryLabel: "Finishes & Waterproofing",
    summary: "A considered system of membranes, coatings and sealants for exposed areas.",
    spec: "System-based · technical guidance",
    useCase: "Roofs, wet areas and basements",
    image: "/assets/3d/unique/products/waterproofing-system-v2.png",
    badge: "Protection",
  },
  {
    slug: "site-safety-kit",
    name: "Site safety kit",
    category: "safety-ppe",
    categoryLabel: "Safety & PPE",
    summary: "A clear starting point for safer daily work across a small or growing crew.",
    spec: "Crew quantities · quote-based",
    useCase: "Active sites and workshops",
    image: "/assets/3d/unique/products/site-safety-kit-v2.png",
  },
];

export function getCategory(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return catalogProducts.find((product) => product.slug === slug);
}
