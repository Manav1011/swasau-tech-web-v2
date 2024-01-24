import GetInTouch from '@/components/ContactUS/GetInTouch'
import CompanyInformation from '@/components/ContactUS/CompanyInformation'
function page() {
  return (
    <section className="h-full mb-20 flex lg:mx-10 lg:flex-row flex-col" style={{fontFamily:'oswald'}}>    
    <GetInTouch/>
    <CompanyInformation/>
    </section>
  )
}

export default page