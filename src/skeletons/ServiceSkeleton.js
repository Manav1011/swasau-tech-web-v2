'use client'
function ServiceSkeleton() {
  return (    
    <>        
        <div className="container justify-center items-center flex flex-wrap">            
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
            <CardSkeleton/>
        </div>
    </>
  )
}

const CardSkeleton = () => {
    return (
        <>
            <div
                className="backdrop-blur-sm animate-pulse bg-opacity-10 rounded-md bg-clip-padding p-10 bg-gray-400 hover:scale-110 transition ease-in-out delay-100 duration-300 relative sm:m-10 m-5 grid h-[15rem] w-full max-w-[15rem] flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border text-center text-gray-700">
                <div
                className="">
                <div className=""></div>
                </div>
                <div className="relative mb-6 px-2">
                <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-white" style={{fontFamily:'Azonix'}}>                    
                </h5>              
                </div>
            </div> 
        </>
    )
}

export default ServiceSkeleton