async function MainGraphic() {    
  return (
    <div style={{ height: 'calc(100vh - 5rem)', backgroundImage: `url('/images/backgrounds/MainGraphic.jpg')`, backgroundRepeat:'no-repeat'}}>
      <div className="h-full flex justify-center items-center text-center backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-md bg-clip-padding p-10 bg-black">
          <div className='mt-10'>
            <h1 className="block w-50 text-slate-200 text-4xl leading-10 sm:leading-1 sm:text-6xl font-bold" style={{fontFamily:'Azonix'}}>creating dream sollutions</h1>
            <div className="mt-3 text-rose-700 text-2xl sm:text-4xl lg:text-6xl" style={{fontFamily:'dosislight',fontWeight:400}}>
                turning ideas into reality
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainGraphic