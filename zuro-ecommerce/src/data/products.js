import acid1_1 from "../assets/products/acid-wash/product-1/1.webp";
import acid1_2 from "../assets/products/acid-wash/product-1/2.webp";
import acid1_3 from "../assets/products/acid-wash/product-1/3.webp";

import acid2_1 from "../assets/products/acid-wash/product-2/1.webp";

import anime1_1 from "../assets/products/anime/product-1/1.webp";
import anime1_2 from "../assets/products/anime/product-1/2.webp";
import anime1_3 from "../assets/products/anime/product-1/3.webp";
import anime1_4 from "../assets/products/anime/product-1/4.webp";

import everyday1_1 from "../assets/products/everyday-essential/product-1/1.webp";

import hindu1_1 from "../assets/products/hindu-divine/product-1/1.webp";
import hindu1_2 from "../assets/products/hindu-divine/product-1/2.webp";
import hindu1_3 from "../assets/products/hindu-divine/product-1/3.webp";

import oversized1_1 from "../assets/products/oversized/product-1/1.webp";
import oversized1_2 from "../assets/products/oversized/product-1/2.webp";
import oversized1_3 from "../assets/products/oversized/product-1/3.webp";

export const products = [
  {
    id: 1,
    collection: "acid-wash",
    name: "Acid Wash Oversized Tee",
    slug: "acid-wash-oversized-tee",
    price: 1299,
    oldPrice: 1599,
    discount: 20,
    rating: 4.8,
    reviews: 120,
    stock: 10,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    images: [acid1_1, acid1_2, acid1_3],
  },

  {
    id: 2,
    collection: "acid-wash",
    name: "Acid Wash Graphic Tee",
    slug: "acid-wash-graphic-tee",
    price: 1399,
    oldPrice: 1699,
    discount: 18,
    rating: 4.9,
    reviews: 85,
    stock: 8,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    images: [acid2_1],
  },

  {
    id: 3,
    collection: "anime",
    name: "Anime Oversized Tee",
    slug: "anime-oversized-tee",
    price: 1399,
    oldPrice: 1699,
    discount: 18,
    rating: 4.9,
    reviews: 85,
    stock: 12,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    images: [anime1_1, anime1_2, anime1_3, anime1_4],
  },

  {
    id: 4,
    collection: "everyday-essential",
    name: "Everyday Essential Tee",
    slug: "everyday-essential-tee",
    price: 999,
    oldPrice: 1299,
    discount: 23,
    rating: 4.7,
    reviews: 42,
    stock: 0,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    images: [everyday1_1],
  },

  {
    id: 5,
    collection: "hindu-divine",
    name: "Hindu Divine Tee",
    slug: "hindu-divine-tee",
    price: 1499,
    oldPrice: 1799,
    discount: 17,
    rating: 4.9,
    reviews: 96,
    stock: 8,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    images: [hindu1_1, hindu1_2, hindu1_3],
  },

  {
    id: 6,
    collection: "oversized",
    name: "Oversized Graphic Tee",
    slug: "oversized-graphic-tee",
    price: 1199,
    oldPrice: 1499,
    discount: 20,
    rating: 4.8,
    reviews: 67,
    stock: 15,
    featured: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    images: [oversized1_1, oversized1_2, oversized1_3],
  },
];
