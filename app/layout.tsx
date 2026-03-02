
import "./globals.css";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair", // 👈 مهم
});

export const metadata = {
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
    <html lang="en" className={playfair.variable}>
      <body
        className={`${inter.className} bg-[#f5f3ef] overflow-x-hidden antialiased`}
      >
        <CartProvider>
          <TopBar />
          <Navbar />

          <main>{children}</main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}