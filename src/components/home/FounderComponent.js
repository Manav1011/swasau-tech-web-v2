'use client'
import { useInView } from "react-intersection-observer";
import Image from "next/image"
function FounderComponent({DP,NAME,DESIGNATION,DESC}) {    
    let options = {        
        triggerOnce:true,
    }
    const { ref: myref, inView, entry } = useInView(options);   
  return (
        <div className={`${inView ? "left-right" : null} flex w-full mx-5 lg:w-1/4  flex-col justify-center items-center`} ref={myref}>
            <div className="mb-10 w-full">
                <Image alt="DP not found" className="mix-blend-darken w-full object-cover object-top rounded-xl" width={300} height={300}  src={DP}></Image>
            </div>
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center ">
                <div className="w-full px-4 lg:mb-0">
                    <h2 className="mb-4 text-4xl font-semibold font-heading">
                    {NAME}
                    </h2>
                    <p className="mb-10 font-heading">{DESIGNATION}</p>
                    <p className="mb-10 text-xl text-gray-500">
                    {DESC}
                    </p>
                </div>
                </div>
            </div>            
        </div>
  )
}

export default FounderComponent