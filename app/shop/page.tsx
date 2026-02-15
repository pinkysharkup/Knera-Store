
// "use client";

// import { useState, useMemo } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { products } from "../../data/products";

// const decorItems = [
//   {
//     id: 101,
//     name: "Macramé Wall Art",
//     image: "/images/macrame1.jpg",
//     price: 80,
//     description: "Handwoven macramé wall decor crafted with care.",
//   },
//   {
//     id: 102,
//     name: "Macramé Hanging",
//     image: "/images/macrame2.jpg",
//     price: 65,
//     description: "Minimal handmade hanging decor piece.",
//   },
//   {
//     id: 103,
//     name: "Handmade Mirror",
//     image: "/images/mirror.jpg",
//     price: 120,
//     description: "Decorative handmade mirror with woven details.",
//   },
//   {
//     id: 104,
//     name: "Calm Handmade Room",
//     image: "/images/room.jpg",
//     price: 95,
//     description: "Handcrafted decor for calm natural spaces.",
//   },
// ];

// export default function ShopPage() {
//   const allItems = [...products, ...decorItems];

//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("default");

//   const filteredItems = useMemo(() => {
//     let filtered = allItems.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     );

//     if (sort === "low") {
//       filtered = [...filtered].sort((a, b) => a.price - b.price);
//     }

//     if (sort === "high") {
//       filtered = [...filtered].sort((a, b) => b.price - a.price);
//     }

//     return filtered;
//   }, [search, sort, allItems]);

//   return (
//     <section className="space-y-16">

//       {/* Header */}
//       <div className="text-center space-y-4">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           The Collection
//         </h1>
//         <p className="text-gray-600 max-w-xl mx-auto">
//           A curated selection of handmade pieces created thoughtfully.
//         </p>
//       </div>

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row gap-4 md:justify-between">

//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border px-4 py-2 rounded w-full md:w-1/3"
//         />

//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="border px-4 py-2 rounded w-full md:w-48"
//         >
//           <option value="default">Default</option>
//           <option value="low">Price: Low to High</option>
//           <option value="high">Price: High to Low</option>
//         </select>

//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

//         {filteredItems.map((item) => (
//           <Link
//             key={item.id}
//             href={`/product/${item.id}`}
//             className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
//           >
//             <div className="relative aspect-[4/5] w-full">
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 fill
//                 className="object-cover group-hover:scale-105 transition duration-500"
//                 sizes="(max-width: 768px) 100vw, 33vw"
//               />
//             </div>

//             <div className="p-5 space-y-1">
//               <h3 className="font-medium text-lg">{item.name}</h3>
//               <p className="text-sm text-gray-600">
//                 {item.price} EGP
//               </p>
//             </div>
//           </Link>
//         ))}

//       </div>

//       {filteredItems.length === 0 && (
//         <p className="text-center text-gray-500">
//           No products found.
//         </p>
//       )}
//     </section>
//   );
// }
"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredItems = useMemo(() => {
    let filtered = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "low") filtered.sort((a, b) => a.price - b.price);
    if (sort === "high") filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [search, sort]);

  return (
    <section className="space-y-24">

      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          The Collection
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          A curated selection of handmade pieces created thoughtfully.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 md:justify-between items-center">

        <input
          type="text"
          placeholder="Search pieces..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 px-6 py-3 rounded-full w-full md:w-1/3 focus:outline-none focus:ring-1 focus:ring-black"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-200 px-6 py-3 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
        >
          <option value="default">Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.price} EGP</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
