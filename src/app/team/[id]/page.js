import UseAPI from "@/hooks/UseAPI"
import Image from "next/image"
import Markdown from "react-markdown"
export default async function Page({ params }) {        
          const query = `query GetTeamMember($id: String!) {
            team(id: $id) {
              name
              designation
              aboutMe
              displayPicture {
                url
              }
              github
              linkedin
              sys {
                id
              }
              skills
              educationBackground
              projects
            }
          }`
          const variables = {"id":params.id}
          const response = await UseAPI(query,variables)
          const member = response.data.team
      
return (
        <section id='teammemberpage'>
        {member ? <div>
             <div className="">
             {/* top content */}
             <div className="flex rounded-t-lg bg-top-color sm:px-2  mx-5">
                 <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 mt-10">
                 <Image src={member.displayPicture.url}  alt="No Image" width={200} height={200}/>
                 </div>
                 <div className="w-2/3 sm:text-center pl-5 mt-20 text-start">
                 <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                     {member.name && member.name}
                 </p>
                 <p className="text-heading">{member.designation}</p>
                 </div>
             </div>
             {/* main content */}
             <div className="p-5 mx-5">
                 <div className="flex flex-col sm:flex-row sm:mt">
                 <div className="flex flex-col sm:w-1/3">
                     {/* My contact */}
                     <div className="py-3 sm:order-none order-3">
                     <h2 className="text-lg font-poppins font-bold text-top-color">
                         My Contact
                     </h2>
                     <div className="border-2 w-20 border-top-color my-3" />
                     <div className="flex">
                     {member.linkedin && (<div className="my-1">
                         <a className="text-gray-700 hover:text-orange-600"
                             aria-label="Visit TrendyMinds YouTube"                            
                             target="_blank" href={member.linkedin}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>                            
                         </a>                        
                         </div>)}
                         {member.github && (<div className="ml-2 my-1">
                         <a
                             className="text-gray-700 hover:text-orange-600"
                             aria-label="Visit TrendyMinds YouTube"
                             href={member.github}
                             target="_blank"
                         >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
                         </a>                        
                         </div>)}
                     </div>
                     </div>
                     {member.skills && (<div className="py-3 sm:order-none order-2">
                     <h2 className="text-lg font-poppins font-bold text-top-color">
                         Skills
                     </h2>
                     <div className="border-2 w-20 border-top-color my-3" />                    
                     <ul className="list-disc ml-2">
                         {member.skills.map((e,i) => (
                             <li className="" key={i}>
                             <div className="">{e}</div>
                             </li>
                         ))}
                     </ul>
                     </div>)}
                     
                     {member.educationBackground && (<div className="py-3 sm:order-none order-1">
                     <h2 className="text-lg font-poppins font-bold text-top-color">
                         Education Background
                     </h2>
                     <div className="border-2 w-20 border-top-color my-3" />
                     <div className="flex flex-col space-y-1">
                        <Markdown>
                            {member.educationBackground}
                        </Markdown>
                    </div>
                     </div>)}
                 </div>
                 <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:mx-20">
                     {member.aboutMe && ( <div className="py-3">
                     <h2 className="text-lg font-poppins font-bold text-top-color">
                         About Me
                     </h2>
                     <div className="border-2 w-20 border-top-color my-3" />
                     <p>
                         {member.aboutMe}
                     </p>
                     </div>)}                     
                     {member.projects && ( <div className="py-3">
                     <h2 className="text-lg font-poppins font-bold text-top-color">
                         Projects
                     </h2>
                     <div className="border-2 w-20 border-top-color my-3" />
                     <div className="flex flex-col">
                        <Markdown>
                            {member.projects}
                        </Markdown>
                    </div>
                     </div>)}
                 </div>
                 </div>
             </div>
             </div>
         </div>  : null}
        </section>
    )
}
