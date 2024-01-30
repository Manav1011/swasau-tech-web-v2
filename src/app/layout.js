import "./globals.css";
import './fonts.css'
import NavBar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { GlobalStateProvider } from "@/context/GlobalStateProvider";
import LogoLoader from "@/components/Loaders/LogoLoader";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Swasau Tech",
  description: "Swasau Technologies, your gateway to innovative solutions and digital transformation. At Swasau, we empower individuals and businesses to turn their dreams into reality through cutting-edge technology and personalized solutions. Our team is dedicated to crafting bespoke, user-centric experiences that elevate your digital presence and drive success. Discover the power of tailored solutions with Swasau Technologies - where innovation meets your aspirations",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body style={{backgroundImage:"url('/images/backgrounds/8.de377256.jpeg')",fontFamily:'dosislight'}}>  
      <div  style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`}}>
      <NextTopLoader color="#2299DD" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} easing="ease" showSpinner={false} speed={200} shadow="0 0 10px #2299DD,0 0 5px #2299DD" zIndex={1600} showAtBottom={false} />
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
