// Preview for Scarlet by Kashfia Mahbub (facebook.com/Scarlet.Fashion.bd)
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  theme: "premium",
  accent: "#8C1C2B",
  name: "Scarlet",
  nameLatin: "by Kashfia Mahbub",
  tagline: "Easy co-ords, everyday three-pieces and embroidered pieces, designed in Dhanmondi.",
  about:
    "Scarlet is a Dhanmondi fashion house by Kashfia Mahbub. Pieces are made in small runs, so when a design sells out it's usually gone for good.",

  previewNote: "This is a demo. Product names and prices are samples and will be replaced with yours.",

  whatsapp: "8801712112517",
  messengerUsername: "Scarlet.Fashion.bd",
  facebookUrl: "https://www.facebook.com/Scarlet.Fashion.bd",
  phoneDisplay: "01712-112517",
  address: "Dhanmondi, Dhaka",
  hours: "Open every day",

  delivery: [
    { id: "dhaka", label: "Inside Dhaka", fee: 80, time: "1–2 days" },
    { id: "bd", label: "Outside Dhaka", fee: 150, time: "3–5 days" },
  ],
  payment: ["Cash on delivery", "bKash"],

  lang: "en",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://kashshafcodes.github.io/",

  categories: [
    { id: "coords", label: "Co-ord sets" },
    { id: "threepiece", label: "Three-piece" },
    { id: "kurta", label: "Kurtas" },
  ],

  products: [
    {
      id: "s1",
      name: "Lilac Lounge Co-ord",
      category: "coords",
      price: 3450,
      image: "photos/s1.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Relaxed shirt and wide-leg trousers in a soft lilac. Easy to wear out or at home.",
      tag: "New in",
    },
    {
      id: "s2",
      name: "Black Polka Co-ord",
      category: "coords",
      price: 3450,
      image: "photos/s2.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Black and white polka dot shirt with matching wide-leg trousers.",
    },
    {
      id: "s3",
      name: "Teal Print Three-piece",
      category: "threepiece",
      price: 2850,
      image: "photos/s3.jpg",
      sizes: ["M", "L", "XL"],
      description: "Printed kameez with teal salwar and a contrast red dupatta.",
      tag: "Bestseller",
    },
    {
      id: "s4",
      name: "Navy Embroidered Kurta",
      category: "kurta",
      price: 3950,
      image: "photos/s4.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Deep navy with dense multicolour floral embroidery and a tie neck.",
    },
  ],
};
