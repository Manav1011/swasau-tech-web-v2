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
    triggerOnce:true,
    rootMargin: '0px',    
  }  
  const { ref: myref, inView, entry } = useInView(options); 
  if(services){
    return (
      <section className={`bg-opacity-100 pt-20`} ref={myref} id='servicescontainer'>
      <div>
        <div className={`${inView?'services-zoom-in':null} container mx-auto`} ref={serviceContainer}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 w-full sm:w-1/2 text-center lg:mb-20">              
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