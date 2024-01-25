import UseAPI from "@/hooks/UseAPI"
import TestiMonial from "./TestiMonial"

async function Testimonials() {
    const query = `query {
        clientsCollection{
          items{
            companyName
            description
            siteLink
          }
        }
      }`      
      const response = await UseAPI(query)      
      const clients = response.data.clientsCollection.items
  return (
    <section className="pt-5 " id='clientssection'>
        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <div className="text-center w-full sm:w-1/2  mx-auto">
            <h2 className="mb-5 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                Our Clients
            </h2>
            <p className="mb-8 text-slate-600 font-light sm:text-xl">
                At Swasau Technologies, we take pride in the strong relationships we've built with our clients. From startups to established enterprises, our engineering services have left a lasting impact. Join the ranks of satisfied clients who have experienced the transformative power of Swasau's tailored solutions.
            </p>
            </div>
            <div className="justify-center items-center flex flex-wrap">
            {clients && 
                clients.map((client,index) => (
                <TestiMonial client={client} key={index}/>
                ))
            }
            </div>
        </div>
        </section>
  )
}

export default Testimonials