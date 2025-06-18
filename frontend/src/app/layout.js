"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const showLayout = (
  [
    "/",
    "/contact",
    "/furnizori",
  ].some((route) => pathname === route || pathname.startsWith(route)) || pathname.startsWith("/evenimente")
) && !pathname.startsWith("/dashboard");


  return (
    <html lang="ro">
      <body>
        {showLayout && <Navbar />}
        {children}
        {showLayout && <Footer />}
      </body>
    </html>
  );
}
