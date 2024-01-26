'use client'
import Link from "next/link"
import Markdown from "react-markdown"
import { useInView } from "react-intersection-observer";
function ProjectComponent({project}) {    
  let options = {    
    triggerOnce:true,
  }
  const { ref: myref, inView, entry } = useInView(options);    
  return (
    <figure  className={`${inView ? "bottom-up" : null} hover:scale-110 transition ease-in-out delay-100 duration-300 m-5 shadow-gray-900	rounded-md bg-clip-padding p-10 bg-gray-400 border border-gray-100  flex backdrop-filter backdrop-blur-sm bg-opacity-20 flex-col items-center justify-center p-8 text-center shadow-gray-500 rounded-t-lg md:rounded-t-none md:rounded-ss-lg`}  ref={myref} > 
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-900">{project.title}</h5>    
    <Markdown className="mb-3 font-normal text-gray-500 dark:text-gray-400">{project.description}</Markdown>    
    <Link href="/contact-us" className="inline-flex items-center text-blue-600 hover:underline">
        Wanna see the details? Connect With Us
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor"  strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </Link>
    </figure>
  )
}

export default ProjectComponent