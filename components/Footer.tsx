
// import Link from "next/link";

// export default function Footer() {
//     return (
//         <footer className="bg-white border-t border-gray-200 mt-32">
//             <div className="max-w-6xl mx-auto px-6 py-16">
//                 {/* ================= Top Section ================= */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
//                     {/* Brand */}
//                     <div>
//                         <h3 className="text-2xl font-semibold text-primary mb-4">
//                             Knera
//                         </h3>

//                         <p className="text-sm text-muted leading-relaxed">
//                             Handmade crochet bags crafted with love, care,
//                             and attention to detail.
//                         </p>
//                     </div>

//                     {/* Shop Links */}
//                     <div>
//                         <h4 className="font-semibold mb-4">
//                             Shop
//                         </h4>

//                         <ul className="space-y-3 text-sm text-muted">
//                             <li>
//                                 <Link href="/shop" className="hover:text-primary transition">
//                                     All Products
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/shop" className="hover:text-primary transition">
//                                     Featured
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/shop" className="hover:text-primary transition">
//                                     New Arrivals
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Company Links */}
//                     <div>
//                         <h4 className="font-semibold mb-4">
//                             Company
//                         </h4>

//                         <ul className="space-y-3 text-sm text-muted">
//                             <li>
//                                 <Link href="/about" className="hover:text-primary transition">
//                                     About Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/about" className="hover:text-primary transition">
//                                     Our Story
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/about" className="hover:text-primary transition">
//                                     Values
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <h4 className="font-semibold mb-4">
//                             Contact
//                         </h4>

//                         <ul className="space-y-3 text-sm text-muted">
//                             <li>Instagram: @knera</li>
//                             <li>Email: info@knera.com</li>
//                             <li>Location: Handmade Studio</li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* ================= Bottom Section ================= */}
//                 <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted">
//                     <p>
//                         © {new Date().getFullYear()} Knera. All rights reserved.
//                     </p>

//                     <p className="mt-4 sm:mt-0">
//                         Handmade with care 🤍
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-40 border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">

          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              Knera
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium handmade crochet pieces crafted with care and timeless design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/shop" className="hover:text-black transition">All Products</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">Featured</Link></li>
              <li><Link href="/shop" className="hover:text-black transition">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-black transition">About</Link></li>
              <li><Link href="/about" className="hover:text-black transition">Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Instagram: @knera</li>
              <li>Email: info@knera.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Knera. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Handcrafted with care 🤍</p>
        </div>

      </div>
    </footer>
  );
}

