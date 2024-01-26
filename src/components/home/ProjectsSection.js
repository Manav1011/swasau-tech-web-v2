import ProjectComponent from "./ProjectComponent"

async function ProjectsSection({projects}) {
  return (
    <section className="pt-20" id='projectssection'>
    <div className="">
        <div className="flex flex-wrap">
                <div className="w-full px-4">
                <div className="mx-auto mb-12 w-full sm:w-1/2 text-center lg:mb-20">              
                    <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                    Our Recent Work
                    </h2>
                    <p className="text-slate-600 font-light sm:text-xl">
                        Discover the embodiment of innovation through Swasau Technologies' recent works. From cutting-edge web applications to intricate embedded systems, each endeavor reflects our commitment to excellence and client satisfaction.
                    </p>
                </div>
                </div>
        </div>
        <div className="mx-5 sm:mx-20 grid rounded-lg shadow-sm md:mb-12 md:grid-cols-2">
        {projects && 
            projects.map((project,index) => (
                <ProjectComponent project={project} key={index}/>
            ))
        }
        </div>
    </div>
    </section>
  )
}

export default ProjectsSection