function CompanyInformation() {
    return (
        <div className="px-4 mt-20  mx-auto sm:w-1/3 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col">
            <div className="text-center mb-2 bg-slate-400 text-center text-gray-200 mx-auto rounded-lg p-3">
                <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                </svg>
            </div>
            <span htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Company Information</span>
            <span htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">Swasau Technology</span>
        </div>
        <div className="text-center flex flex-col mt-10">
            <div className="text-center mb-2 bg-slate-400 text-center text-gray-200 mx-auto rounded-lg p-3">
                <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/> 
                </svg>
            </div>
            <span htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Address</span>
            <span htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">D/2, Natubhai Appartment, Opp. Motinagar  Society, Near Jogers park, Iswarbhuvan, Navarangpura Ahmedabad Gujarat 380014</span>
            <span className="block mb-2 text-sm font-medium text-gray-900">Find on <a target="_blank" href="https://maps.app.goo.gl/TrFbift6UhB1Ppcq7"><img className="inline" src="/images/Logo/Google_Maps_Logo_2020.svg" width="32" height="32"></img></a></span>
        </div>
        <div className="text-center flex flex-col mt-10">
            <div className="text-center mb-2 bg-slate-400 text-center text-gray-200 mx-auto rounded-lg p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
            </div>
            <span htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Call Us</span>
            <span htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">+91 94264 04816</span>
        </div>
        </div>
    )
}

export default CompanyInformation