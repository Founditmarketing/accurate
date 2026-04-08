export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  excerpt: string;
  description: string[];
  signs?: string[];
  highlights?: string[];
}

export const services: Service[] = [
  {
    slug: "foundation-repair",
    title: "Foundation Repair",
    shortTitle: "Foundation",
    image: "/images/foundation-repair.png",
    excerpt: "Specializing in concrete foundation support and repairs for residential and commercial structures.",
    description: [
      "The integrity of your home's foundation is crucial to the well-being of your house. A cracked, bulging, or sinking foundation must be repaired before the rest of your structure becomes unsound.",
      "The professionals at Accurate Shoring & Foundation specialize in concrete foundation support and repairs and house leveling for residential and commercial structures. We understand the moisture variations in Louisiana's clay soil is a cause for foundation problems.",
      "Just as the earth swells when over saturated by heavy rains, the soil contracts as temperatures rise. During periods of dry weather, moisture in the soil evaporates which causes the soil to shrink.",
    ],
    signs: [
      "Cracks in Exterior or Interior Brick",
      "Sloping, Sagging, or Buckling of Floors or Walls",
      "Cracks in Floor, Floor Tiles, or Foundation",
      "Spaces Between Wall and Ceiling or Floor",
      "Cracked or Displaced Moldings",
      "Improperly Fitting Doors & Windows",
      "Water Damage & Excess Moisture in Crawlspace",
      "Wall Rotation or Bowing of Walls",
    ],
    highlights: ["30 years of professional experience", "Financing through Regions Bank", "Licensed with LA State Licensing Board", "Free estimates available"],
  },
  {
    slug: "crawlspace-repair",
    title: "Crawlspace Repair",
    shortTitle: "Crawlspace",
    image: "/images/crawl-space.png",
    excerpt: "Tools, products, and 30 years of experience to resolve your structural crawlspace problems.",
    description: [
      "If you have concerns with your crawlspace, Accurate Shoring & Foundation has the tools, products, and 30 years of experience to help resolve your structural problems.",
      "Crawlspace issues can lead to moisture problems, wood rot, and structural instability. Our professionals assess each situation and develop a repair plan tailored to your property.",
    ],
    signs: ["Sagging or uneven floors", "Musty odors from beneath the house", "Visible wood rot or mold", "Standing water in crawlspace", "Cracks in interior walls", "Doors or windows sticking"],
    highlights: ["Comprehensive moisture solutions", "Licensed and insured", "30 years of experience"],
  },
  {
    slug: "house-leveling",
    title: "House Leveling",
    shortTitle: "Leveling",
    image: "/images/house-leveling.png",
    excerpt: "Expert assessment and the right repair plan to level your structure safely and effectively.",
    description: [
      "Our team of experts are able to assess how critical the damage to your structure may be. This allows us to administer the right repair plan needed to level the structure.",
      "House leveling is a critical service for maintaining the structural integrity and value of your home. Whether your foundation has shifted due to soil conditions, water damage, or age, our experienced team has the expertise to restore your home to its proper level.",
    ],
    signs: ["Uneven or sloping floors", "Cracks in walls or ceilings", "Doors and windows that won't close properly", "Visible gaps between walls and floors", "Foundation settling or shifting"],
    highlights: ["Precise leveling techniques", "Minimal disruption to your home", "30 years of experience"],
  },
  {
    slug: "shoring-house-raising",
    title: "Shoring & House Raising",
    shortTitle: "Shoring",
    image: "/images/shoring.png",
    excerpt: "Protecting homes from future severe weather damage with professional shoring and house raising.",
    description: [
      "Our foundation professionals at Accurate Shoring & Foundation have the valuable information clients need to protect their homes from future severe weather damage.",
      "Shoring and house raising are essential services in Louisiana where flooding and severe weather can threaten the structural integrity of your home.",
    ],
    signs: ["Home located in a flood zone", "Previous flood damage", "Foundation below current flood standards", "Insurance requirements for elevation"],
    highlights: ["Flood protection expertise", "Compliance with local building codes", "FEMA guidelines adherence"],
  },
  {
    slug: "drainage",
    title: "Drainage Solutions",
    shortTitle: "Drainage",
    image: "/images/drainage.png",
    excerpt: "Extensive knowledge to properly evaluate and design sustainable drainage systems.",
    description: [
      "With over thirty years of experience, Accurate Shoring & Foundation's professionals have the extensive knowledge to properly evaluate and design a sustainable drain system.",
      "Proper drainage is essential for protecting your foundation and preventing water damage. Louisiana's heavy rainfall and clay soils require carefully designed drainage solutions.",
    ],
    signs: ["Standing water around foundation", "Basement or crawlspace flooding", "Soil erosion near your home", "Water stains on foundation walls"],
    highlights: ["Custom drainage design", "French drain installation", "30 years of drainage expertise"],
  },
  {
    slug: "concrete-repair",
    title: "Concrete Repair",
    shortTitle: "Concrete",
    image: "/images/concrete-repair.png",
    excerpt: "Restoring strength and stability to cracked or damaged concrete with proven techniques.",
    description: [
      "If you have concerns with cracked or damaged concrete, Accurate Shoring & Foundation has the tools, products, and 30 years of experience to restore strength and stability.",
      "Concrete damage can worsen over time if left unaddressed, leading to safety hazards and costly repairs.",
    ],
    signs: ["Visible cracks in concrete slabs", "Uneven or sunken concrete surfaces", "Spalling or flaking concrete", "Water pooling on concrete areas", "Trip hazards from raised slabs"],
    highlights: ["Concrete slab repair and leveling", "Crack sealing and waterproofing", "30 years of concrete expertise"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const locations = [
  { city: "Alexandria", address: "2002 Melrose Street, Pineville, LA 71360", phone: "(318) 321-3000", phoneRaw: "3183213000" },
  { city: "Lafayette", address: "310 E Gloria Switch Rd, Lafayette, LA 70507", phone: "(337) 346-2200", phoneRaw: "3373462200" },
  { city: "Baton Rouge", address: "11940 Industriplex Blvd. Suite 2, Baton Rouge, LA 70809", phone: "(225) 255-3070", phoneRaw: "2252553070" },
];

export const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Before and after foundation repair" },
  { src: "/images/gallery-2.jpg", alt: "Foundation repair project" },
  { src: "/images/gallery-3.jpg", alt: "Structural support installation" },
  { src: "/images/gallery-4.jpg", alt: "House leveling in progress" },
  { src: "/images/gallery-5.jpg", alt: "Foundation stabilization" },
  { src: "/images/gallery-6.jpg", alt: "Commercial foundation project" },
  { src: "/images/gallery-7.jpg", alt: "Crawlspace repair work" },
  { src: "/images/gallery-8.jpg", alt: "Concrete repair project" },
  { src: "/images/gallery-9.jpg", alt: "Drainage system installation" },
  { src: "/images/gallery-10.jpg", alt: "Shoring project" },
  { src: "/images/gallery-11.jpg", alt: "Foundation pier installation" },
  { src: "/images/gallery-12.jpg", alt: "Completed foundation repair" },
];
