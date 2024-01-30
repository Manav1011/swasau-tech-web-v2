'use client'
import { useInView } from "react-intersection-observer";
const ServiceCard = ({ icon, title }) => {    
  let options = {        
    triggerOnce:true
  }  
  const { ref: myref, inView, entry } = useInView(options); 
    const backgroundImageStyle = {
        backgroundImage: `url('${icon}')`,        
      };
    return (
      <>
        <div
            className={`${inView?'bottom-up':'translate-y-full'} hover:scale-110 transition ease-in-out delay-100 duration-300 relative sm:m-10 m-5 grid h-[15rem] w-full max-w-[15rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700`} ref={myref}>
            <div
              className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={backgroundImageStyle}>
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative mb-6 px-2">
              <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-white" style={{fontFamily:'Azonix'}}>
                {title}
              </h5>              
            </div>
          </div> 
      </>
    );
  };

export default ServiceCard