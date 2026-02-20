import "./globals.css";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Knera Store",
  description: "Premium handmade crochet bags and decor crafted with timeless design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f3ef] overflow-x-hidden antialiased`}>
        <CartProvider>
          {/* Top navigation elements */}
          <TopBar />
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}