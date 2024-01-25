'use client'
import ServiceCard from "./ServiceCard";
import { useInView } from "react-intersection-observer";
import UseAPI from "@/hooks/UseAPI";
import { useEffect, useRef, useState } from 'react';

function ServiceListing() {
  const [services,setServices] = useState()
  useEffect(() => {
    if(!services){
      const query = `query {
        servicesCollection{
          items{
            sys{
              id
            }
            title
            image{
              url
            }
          }
        }
      }`
      UseAPI(query).then(res => {        
        setServices(res.data.servicesCollection.items)        
      })
    }
  },[])
  const serviceContainer = useRef()
  let options = {
    threshold:0.1,
    rootMargin: '0px',    
  }  
  const { ref: myref, inView, entry } = useInView(options); 
  if(services){
    return (
      <section className={`pt-20`} ref={myref} id='servicescontainer' style={{backgroundImage:"url('/images/backgrounds/6.36962145.jpeg')"}}>
      <div>
        <div className={`${inView?'services-zoom-in':null} container mx-auto`} ref={serviceContainer} style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`}}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">              
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-slate-600 font-light sm:text-xl">
                Discover a world of possibilities with Swasau Technologies. We offer a diverse range of cutting-edge services designed to elevate your digital presence and empower your business.
                </p>
              </div>
            </div>
          </div>
  
          <div className="container justify-center items-center flex flex-wrap">
          {services && services.map((item => (
            <ServiceCard key={item.sys.id} icon={item.image.url} title={item.title}/>
          )))}          
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default ServiceListing