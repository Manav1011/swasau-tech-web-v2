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
      <section className={`pt-20 bg-indigo-200`} ref={myref} id='servicescontainer'>
        <div className={`${inView?'services-zoom-in':null} container mx-auto`} ref={serviceContainer}>
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">              
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
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
      </section>
    )
  }
}

export default ServiceListing