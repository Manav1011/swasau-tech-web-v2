import Link from "next/link"
async function MainGraphic() {    
  return (
    <div style={{ height: 'calc(100vh - 5rem)', backgroundImage: `url('/images/backgrounds/MainGraphic.jpg')`, backgroundRepeat:'no-repeat'}}>
      <div className="h-full flex justify-center sm:items-center text-center backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-md bg-clip-padding p-10 bg-black">
          <div className='mt-10'>
            <h1 className="block w-50 text-slate-200 text-4xl leading-10 sm:leading-1 sm:text-6xl font-bold" style={{fontFamily:'Azonix'}}>creating dream sollutions</h1>
            <div className="font-semibold	sm:font-normal mt-3 text-rose-700 text-2xl sm:text-4xl lg:text-6xl" style={{fontFamily:'dosislight'}}>
                turning ideas into reality
            </div>
            <Link href="#servicescontainer" className="mt-20 flex justify-center text-white text-xl block sm:hidden" >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
            </svg>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default MainGraphic