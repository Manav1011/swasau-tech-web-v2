'use client'
import { useInView } from "react-intersection-observer";
import Markdown from "react-markdown";

function TestiMonial({client}) {    
  let options = {    
    triggerOnce:true,
  }
  const { ref: myref, inView, entry } = useInView(options);   
  return (
    <div className={`${inView ? "team-details" : null} hover:scale-110 transition ease-in-out delay-100 duration-300 max-w-screen-md mx-auto mx-auto mb-12 rounded-md bg-clip-padding p-10 bg-gray-400 border border-gray-100  flex backdrop-filter backdrop-blur-sm bg-opacity-10 flex-col items-center justify-center p-8 text-center shadow-gray-500 rounded-t-lg md:rounded-t-none md:rounded-ss-lg`} ref={myref}>
        <figure className="text-start">
      <svg
        className="h-12 mx-auto mb-3 "
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
          fill="currentColor"
        />
      </svg>
      <blockquote>        
        <Markdown className="text-sm font-medium text-slate-500">{client.description}</Markdown>        
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <div className="pr-3 font-medium text-gray-900">
            {client.companyName}
          </div>
          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            <a
              href={client.siteLink}
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Visit them
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
    </div>
  );
}

export default TestiMonial;
