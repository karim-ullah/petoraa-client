import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import NextThemesProvider from "@/providers/NextThemesProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PetoRaa",
  description: "Your trusted pet adopt platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemesProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>

          <Toaster></Toaster>
        </NextThemesProvider>
      </body>
    </html>
  );
}
