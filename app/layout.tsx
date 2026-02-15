
// import "./globals.css";
// import type { Metadata } from "next";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import PageWrapper from "../components/PageWrapper";
// import { CartProvider } from "../context/CartContext";

// import { Playfair_Display, Inter } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Knera Store",
//   description:
//     "Premium handmade crochet bags and decor crafted with timeless design.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-[#f5f3ef] text-gray-900 antialiased`}>
//         <CartProvider>
//           <Navbar />
//           <main className="pt-32">
//             <PageWrapper>{children}</PageWrapper>
//           </main>
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { CartProvider } from "../context/CartContext";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knera Store",
  description:
    "Premium handmade crochet bags and decor crafted with timeless design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f5f3ef] text-gray-900 antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main className="pt-32">
            <PageWrapper>{children}</PageWrapper>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
