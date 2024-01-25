'use client'
import Image from "next/image"
import { useGlobalState } from "@/context/GlobalStateProvider"

function LogoLoader() {      
    const { showLoader} = useGlobalState()  
    console.log(showLoader);      
    if(showLoader){
        return (            
            <div className="flex items-center justify-center h-screen w-full absolute z-30 backdrop-blur-sm">
                <Image
                        width={600}
                        height={384}
                        className="loader-in-out h-auto w-1/3 mix-blend-darken"
                        src="/images/Logo/Swasau-Logo-png.png"
                        alt="Your Company"
                 />
            </div>            
        )
    }
}

export default LogoLoader