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
  builtByUrl: "https://wa.me/8801700000000",

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
      image: "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/848995685_1848696586896332_5509342243109396037_n.jpg?stp=dst-jpg_tt6&cstp=mx1120x1404&ctp=s1120x1404&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3Y4DPnkJCtQQ7kNvwGd7F2v&_nc_oc=AdpKQ9ozb6OWLa2-BipGIvPCWV4R5PMgZm67W4tQIvHZwNfx5SduEGxSo7-Fny-yXf4&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=ozcK9U0-wX3nfEoCtcy6bg&_nc_ss=792a8&oh=00_AQT96fLWyQ5wll-vO-cmdgRCqzERmsB3ANNnHSX30FMdbQ&oe=6AEEC02A",
      sizes: ["S", "M", "L", "XL"],
      description: "Relaxed shirt and wide-leg trousers in a soft lilac. Easy to wear out or at home.",
      tag: "New in",
    },
    {
      id: "s2",
      name: "Black Polka Co-ord",
      category: "coords",
      price: 3450,
      image: "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/850270594_1848696556896335_4451550618464001852_n.jpg?stp=dst-jpg_tt6&cstp=mx1120x1404&ctp=s1120x1404&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ytK5kfKz4MIQ7kNvwF9V3De&_nc_oc=Adps4vBOKpkVko6ZH4VXBGUYr3Rrc7WlBnhusoj1zDYrpXngiYamOxnNXi2AQr2Li-E&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=RIcA6mTzh-PSuikql98O6A&_nc_ss=792a8&oh=00_AQSO90SobjOOrxkOMWCc-jkCAlIgV8w3xxeDKuoYnln0zQ&oe=6AEE9D9B",
      sizes: ["S", "M", "L", "XL"],
      description: "Black and white polka dot shirt with matching wide-leg trousers.",
    },
    {
      id: "s3",
      name: "Teal Print Three-piece",
      category: "threepiece",
      price: 2850,
      image: "https://scontent.fdac198-2.fna.fbcdn.net/v/t39.30808-6/846613312_1846440910455233_3255428780109477207_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1440&ctp=s1080x1440&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VTlmkGhpUGkQ7kNvwH7Nkgl&_nc_oc=AdoM6erMaJeQHoVWvBjaBUUyDNyACBmyxtF4oyq0WYLUAlbc82IX1ZSv_EOvdIso6F8&_nc_zt=23&_nc_ht=scontent.fdac198-2.fna&_nc_gid=g9pt-2cRpKOqhAqHPvJV4Q&_nc_ss=792a8&oh=00_AQRbijM5SqmkIoqfSABkDOgkukWnbngpIZUMvpMuApsqJA&oe=6AEEBBA5",
      sizes: ["M", "L", "XL"],
      description: "Printed kameez with teal salwar and a contrast red dupatta.",
      tag: "Bestseller",
    },
    {
      id: "s4",
      name: "Navy Embroidered Kurta",
      category: "kurta",
      price: 3950,
      image: "https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/835217298_1835485184884139_576267324536073983_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx960x1280&ctp=s960x1280&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cNF1kN5t_l4Q7kNvwHqh4m8&_nc_oc=Adq2PpNbCcATI1x9kQbbslQKnH_iAJlFQaTd4zT9ZTw0Sj9QsGso5-B743lgOQ0_vpM&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=dLaObfrwTcv-jlbq3og6rA&_nc_ss=792a8&oh=00_AQR7mbM9sExJh18l3aSkkrqPF_2RxvwE6IIsHPHjRBh2OQ&oe=6AEEA80C",
      sizes: ["S", "M", "L", "XL"],
      description: "Deep navy with dense multicolour floral embroidery and a tie neck.",
    },
  ],
};
