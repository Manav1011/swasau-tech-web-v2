'use client'
import Link from 'next/link'
import { useInView } from "react-intersection-observer";
function TeamMemberCard(props) {
    let options = {        
        triggerOnce:true,
    }
    const { ref: myref, inView, entry } = useInView(options);
    const {id,dp,name,designation,github,linkedin} = props     
  return (
    <div className={`${inView ? "bottom-up" : 'translate-y-full'} w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hover:scale-110 transition ease-in-out delay-100 duration-300 mb-10 text-center text-gray-500 dark:text-gray-400`} ref={myref}>
        {/* <Link href={`/team/${id}`} aria-current="page"> */}
        <img className="mx-auto mb-3 w-36 h-36 rounded-full mix-blend-darken" src={dp} alt="Bonnie Avatar" />
        <h3 className="text-xl font-mono font-medium text-slate-900">
            {name}
        </h3>
        {/* </Link> */}
        <p className='text-slate-500 mb-2'>{designation}</p>
        <ul className="flex justify-center mt-1 space-x-4">
        {linkedin ? (<li>
                <a href={linkedin} className="text-[#39569c] hover:text-gray-900 dark:hover:text-black">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
        </li>):null}
        {github ? (<li>
                <a href={github} className="text-gray-900 hover:text-gray-900 dark:hover:text-black dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
                </a>
            </li>): null}
        </ul>
        <div className="mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
            <Link href={`/team/${id}`} aria-current="page" className="inline-flex items-center text-blue-600 hover:underline">
                More about {name}
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
            </Link>
          </div>
    </div>
  )
}

export default TeamMemberCard