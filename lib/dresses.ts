export interface Dress {
  slug: string;
  name: string;
  poeticLine: string;
  year: string;
  fabric: string;
  silhouette: string;
  movement: string;
  story: string;
  images: string[];
}

export const dresses: Dress[] = [
  {
    slug: "lucy",
    name: "Lucy",
    poeticLine: "A dress that remembers silence.",
    year: "2026",
    fabric: "Silk organza with hand-gathered tulle",
    silhouette: "A-line",
    movement: "Gentle, like a breath held and released",
    story: "She didn't choose a dress. She chose herself.",
    images: [
      "/dressphoto/IMG_8010.JPG",
      "/dressphoto/IMG_8012.JPG",
      "/dressphoto/IMG_8013.JPG",
    ],
  },
  {
    slug: "eden",
    name: "Eden",
    poeticLine: "The beginning of everything unspoken.",
    year: "2026",
    fabric: "Mikado crepe with French lace overlay",
    silhouette: "Mermaid",
    movement: "Deliberate, unhurried, present",
    story: "There is a version of this moment she will carry forever.",
    images: [
      "/dressphoto/IMG_8014.JPG",
      "/dressphoto/IMG_8015.JPG",
      "/dressphoto/IMG_8016.JPG",
    ],
  },
  {
    slug: "noah",
    name: "Noah",
    poeticLine: "Quiet enough to hear your own heart.",
    year: "2026",
    fabric: "Italian duchess satin",
    silhouette: "Column",
    movement: "Still water. Certain.",
    story: "Not every dream is loud. Some arrive softly, and stay.",
    images: [
      "/dressphoto/IMG_8017.JPG",
      "/dressphoto/IMG_8018.JPG",
      "/dressphoto/IMG_8019.JPG",
    ],
  },
  {
    slug: "aurora",
    name: "Aurora",
    poeticLine: "Light before the world wakes.",
    year: "2026",
    fabric: "Chiffon over silk charmeuse",
    silhouette: "Ball gown",
    movement: "Expansive, uncontained",
    story: "She wore it like a decision she had already made.",
    images: [
      "/dressphoto/IMG_8020.JPG",
      "/dressphoto/IMG_8021.JPG",
      "/dressphoto/IMG_8022.JPG",
    ],
  },
  {
    slug: "celeste",
    name: "Celeste",
    poeticLine: "Everything above, worn below.",
    year: "2025",
    fabric: "Stretch crepe with beaded bodice",
    silhouette: "Sheath",
    movement: "Precise, architectural, confident",
    story: "The dress was not chosen. It arrived.",
    images: [
      "/dressphoto/IMG_8023.JPG",
      "/dressphoto/IMG_8010.JPG",
      "/dressphoto/IMG_8012.JPG",
    ],
  },
  {
    slug: "lumiere",
    name: "Lumière",
    poeticLine: "Where the light decides to stay.",
    year: "2025",
    fabric: "Pleated georgette with grosgrain detail",
    silhouette: "A-line",
    movement: "Effortless, the way evening becomes night",
    story: "She looked like she had always known this moment was coming.",
    images: [
      "/dressphoto/IMG_8013.JPG",
      "/dressphoto/IMG_8014.JPG",
      "/dressphoto/IMG_8015.JPG",
    ],
  },
];

export function getDressBySlug(slug: string): Dress | undefined {
  return dresses.find((d) => d.slug === slug);
}
