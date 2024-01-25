import { Inter } from "next/font/google";
import "./globals.css";
import './fonts.css'
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { GlobalStateProvider } from "@/context/GlobalStateProvider";
import LogoLoader from "@/components/Loaders/LogoLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swasay Tech",
  description: "Swasau Technologies, your gateway to innovative solutions and digital transformation. At Swasau, we empower individuals and businesses to turn their dreams into reality through cutting-edge technology and personalized solutions. Our team is dedicated to crafting bespoke, user-centric experiences that elevate your digital presence and drive success. Discover the power of tailored solutions with Swasau Technologies - where innovation meets your aspirations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-200`}>
      <GlobalStateProvider>
        <LogoLoader/>
        <NavBar/>
        {children}
        <Footer/>
      </GlobalStateProvider>
      </body>
    </html>
  );
}
