import ServiceCard from "./ServiceCard";

function ServiceListing({services}) {      
  if(services){
    return (
      <section className={`bg-opacity-100 pt-20`} id='servicescontainer'>
      <div>
        <div className={`container mx-auto`}>
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