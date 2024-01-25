async function MainGraphic({grad}) {
    const graphics_arr = [
        "Collaboration-cuate.svg",
        "Printed-circuit-board-amico.svg",
        "Printed-circuit-board-rafiki.svg",
        "Creative-team-bro.svg",
        "Printed-circuit-board-bro.svg",
        "Process-cuate.svg",
        "Hand-coding-pana.svg",
        "Printed-circuit-board-cuate.svg",
        "Server-status-cuate.svg",        
        "Printed-circuit-board-pana.svg",
    ]
    const choosed_graphic_index = Math.floor(Math.random() * graphics_arr.length)
  return (
    <div className={`${grad}`}>
      <div className="sm:justify-center justify-start text-center sm:bg-center bg-bottom sm:mx-20 mx-5 sm:bg-right your-custom-class flex  flex-col" style={{ height: 'calc(100vh - 5rem)', backgroundImage: `url(/images/main-graphics/${graphics_arr[choosed_graphic_index]})`, backgroundRepeat:'no-repeat'}}>
          <div className='mt-10 backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-md bg-clip-padding p-10 bg-gray-400 border border-gray-100 text-center xl:border-0 xl:backdrop-blur-0 xl:bg-opacity-100 xl:text-left xl:bg-transparent'>
            <h1 className="block w-50 text-black text-2xl xs:text-3xl sm:text-5xl font-extrabold" style={{fontFamily:'Azonix'}}>Swasau Technology</h1>
            <div className="mt-3 text-md xs:text-lg sm:text-3xl block font-medium" style={{fontFamily:'MoonLight'}}>
                Creating Dream Sollutions
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainGraphic