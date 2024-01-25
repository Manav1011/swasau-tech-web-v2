'use client'
import Image from "next/image"
import { useGlobalState } from "@/context/GlobalStateProvider"

function LogoLoader() {      
    const { showLoader} = useGlobalState()    
    if(showLoader){
        return (            
            <div className="flex  items-center justify-center h-screen w-full absolute z-30 backdrop-blur-sm">            
                <Image
                        width={600}
                        height={384}
                        className="loader-in-out object-contain h-auto sm:w-1/3 w-full mix-blend-darken"
                        src="/images/Logo/Swasau-Logo-png.png"
                        alt="Your Company"
                 />
            </div>            
        )
    }
}

export default LogoLoader