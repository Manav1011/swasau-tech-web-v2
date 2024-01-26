import "./globals.css";
import './fonts.css'
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { GlobalStateProvider } from "@/context/GlobalStateProvider";
import LogoLoader from "@/components/Loaders/LogoLoader";

export const metadata = {
  title: "Swasau Tech",
  description: "Swasau Technologies, your gateway to innovative solutions and digital transformation. At Swasau, we empower individuals and businesses to turn their dreams into reality through cutting-edge technology and personalized solutions. Our team is dedicated to crafting bespoke, user-centric experiences that elevate your digital presence and drive success. Discover the power of tailored solutions with Swasau Technologies - where innovation meets your aspirations",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={`bg-slate-200`} style={{backgroundImage:"url('/images/backgrounds/8.de377256.jpeg')"}}>      
      <div  style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`}}>
      <GlobalStateProvider>
        <LogoLoader/>
        <NavBar/>        
        {children}        
        <Footer/>
      </GlobalStateProvider>
      </div>
      </body>
    </html>
  );
}
