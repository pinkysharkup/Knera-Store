

// export type Product = {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   images: string[];
// };

// export const products: Product[] = [
//   {
//     id: 1,
//     name: "Sunflower Handmade Bag",
//     description:
//       "A warm handmade crochet bag inspired by sunflower tones and natural textures.",
//     price: 450,
//     image: "/images/bag-1.jpg",
//     images: [
//       "/images/bag-1.jpg",
//       "/images/bag-4.jpg",
//       "/images/bag-5.jpg",
//     ],
//   },
//   {
//     id: 2,
//     name: "Green Crochet Bag",
//     description:
//       "Elegant handcrafted crochet bag in calming green shades, designed for everyday style.",
//     price: 520,
//     image: "/images/bag-2.jpg",
//     images: [
//       "/images/bag-2.jpg",
//       "/images/bag-7.jpg",
//       "/images/bag-4.jpg",
//     ],
//   },
//   {
//     id: 3,
//     name: "Floral Tote Bag",
//     description:
//       "Floral-inspired handmade tote bag combining soft yarn details with functional design.",
//     price: 480,
//     image: "/images/bag-6.jpg",
//     images: [
//       "/images/bag-6.jpg",
//       "/images/bag-5.jpg",
//       "/images/bag-7.jpg",
//     ],
//   },
// ];
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sunflower Handmade Bag",
    description:
      "A warm handmade crochet bag inspired by sunflower tones and natural textures.",
    price: 450,
    image: "/images/bag-1.jpg",
    images: [
      "/images/bag-1.jpg",
      "/images/bag-4.jpg",
      "/images/bag-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Green Crochet Bag",
    description:
      "Elegant handcrafted crochet bag in calming green shades.",
    price: 520,
    image: "/images/bag-2.jpg",
    images: [
      "/images/bag-2.jpg",
      "/images/bag-7.jpg",
      "/images/bag-4.jpg",
    ],
  },
  {
    id: 3,
    name: "Floral Tote Bag",
    description:
      "Floral-inspired handmade tote bag with soft yarn details.",
    price: 480,
    image: "/images/bag-6.jpg",
    images: [
      "/images/bag-6.jpg",
      "/images/bag-5.jpg",
      "/images/bag-7.jpg",
    ],
  },

  // ================= Decor Items =================

  {
    id: 101,
    name: "Macramé Wall Art",
    description:
      "Handwoven macramé wall decor crafted with natural cotton threads.",
    price: 380,
    image: "/images/macrame1.jpg",
    images: [
      "/images/macrame1.jpg",
      "/images/macrame2.jpg",
      "/images/room.jpg",
    ],
  },
  {
    id: 102,
    name: "Macramé Hanging",
    description:
      "Minimal handmade hanging decor piece for calm interiors.",
    price: 320,
    image: "/images/macrame2.jpg",
    images: [
      "/images/macrame2.jpg",
      "/images/macrame1.jpg",
      "/images/room.jpg",
    ],
  },
  {
    id: 103,
    name: "Handmade Mirror",
    description:
      "Decorative handmade mirror surrounded by woven detailing.",
    price: 650,
    image: "/images/mirror.jpg",
    images: [
      "/images/mirror.jpg",
      "/images/room.jpg",
      "/images/macrame1.jpg",
    ],
  },
  {
    id: 104,
    name: "Calm Handmade Room",
    description:
      "A curated handmade decor setup inspired by natural textures.",
    price: 590,
    image: "/images/room.jpg",
    images: [
      "/images/room.jpg",
      "/images/macrame2.jpg",
      "/images/mirror.jpg",
    ],
  },
];
