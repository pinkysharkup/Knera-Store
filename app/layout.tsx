
import "./globals.css";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
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
        className={`${inter.className} ${playfair.variable} bg-[#f5f3ef] overflow-x-hidden antialiased`}
      >
        <CartProvider>

          {/* ❌ شيلنا Navbar و TopBar من هنا */}
          
          <main>{children}</main>

          <Footer />

        </CartProvider>
      </body>
    </html>
  );
}