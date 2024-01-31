import FounderComponent from "./FounderComponent"
function Founders() {
  return (
    <section className="relative pt-20" id="fouderssection">
        <div className="text-center mb-12 w-full sm:w-1/2  mx-auto">
            <h2 className="mb-8 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                Meet The Founders
            </h2>
        </div>
        <div className="container px-4 mx-auto flex justify-evenly  items-start flex-wrap">
            <FounderComponent DP={'/images/Founders/CEO.jpg'} NAME='Kiran Shah' DESIGNATION={'CEO & Co-Founder'} DESC={
    <>
      Completed Diploma Commercial Practice from Government Girls Polytechnic, Ahmedabad in 1990
      and B.Com from Gujarat University in 1992. <br/><br/>As the co-founder of Swasau Technology,
      brings a unique blend of creativity, strategic thinking, and a deep understanding
      of market dynamics. Her entrepreneurial spirit is evident in every aspect of her work,
      from developing groundbreaking solutions to fostering a culture of innovation within the organization
    </>
  }
/>
            <FounderComponent DP={'/images/Founders/CTO.jpg'} NAME='Dr. Mihir Shah' DESIGNATION={'CTO & Founder'} DESC={
            <>An accomplished academician, holding degrees in BE (Electronics), ME (Electronics and Communication with VLSI specialization), and Ph.D. (Electrical Engineering) from esteemed institutions.<br/><br/>With over 26 years of teaching experience and 3.5 years in R&D, served in administrative roles at Gujarat Technological University and related committees. <br/><br/>A prolific researcher, published over 33 papers in national and international journals and conferences.</>}/>
        </div>
        </section>
        

  )
}


export default Founders