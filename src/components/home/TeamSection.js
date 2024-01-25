"use client";
import { useInView } from "react-intersection-observer";
import TeamMemberCard from "./TeamMemberCard";
import UseAPI from "@/hooks/UseAPI";
import { useEffect, useRef, useState } from "react";

function TeamSection() {    
    const [members,setMembers] = useState({
        CEO:null,
        CTO:null,
        teamMembers:null
    })    
    useEffect(() => {
      if(!members.CEO && !members.CTO){
        const query = `query {
          teamCollection{
            items{
              name
              designation
              displayPicture{
                url
              }
              github
              linkedin
                sys{
                id
              } 
            }
          }
        }`
        UseAPI(query).then(teamMembers=>{
          let ceo = null;
          let cto = null;
          // Filter out 'CEO' and 'CTO' elements
          const filteredTeam = teamMembers.data.teamCollection.items.filter(member => {
              if (member.designation === 'CEO') {
              ceo = member;
              return false;
              } else if (member.designation === 'CTO') {
              cto = member;
              return false;
              }
              return true;
          });    
          setMembers({
              CEO:ceo,
              CTO:cto,
              teamMembers:filteredTeam
          })
        })
      }
    },[])
  let options = {
    threshold:0.1, 
    triggerOnce:true,
  }
  const teammembersRef = useRef()
  const { ref: myref, inView, entry } = useInView(options);    
  if(members.CTO && members.CTO){
    return (        
        <section className={`pt-5`} id="teamdetailscontainer" ref={myref}  >
          <div className={`${inView ? "team-details" : null} py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6`} ref={teammembersRef}>
            <div className="mx-auto mb-8 w-full sm:w-1/2 lg:mb-16">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
                Our team
              </h2>
              <p className="font-light text-slate-500 sm:text-xl ">
                At Swasau Technologies, we are proud to be fueled by a team of dedicated and skilled professionals. Together, we form a collaborative force committed to turning innovative ideas into reality.
              </p>
            </div>
            <div className="flex flex-wrap justify-evenly">
              <TeamMemberCard
              id={members.CEO.sys.id}
                dp={members.CEO.displayPicture.url}
                name={members.CEO.name}
                designation={members.CEO.designation}
                github={members.CEO.github}
                linkedin={members.CEO.linkedin}
              />
              <TeamMemberCard
              id={members.CTO.sys.id}
                dp={members.CTO.displayPicture.url}
                name={members.CTO.name}
                designation={members.CTO.designation}
                github={members.CTO.github}
                linkedin={members.CTO.linkedin}
              />
            </div>
            <div
              className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
             {members.teamMembers.map((item,index) => (
              <TeamMemberCard
                key={index}
                id={item.sys.id}
                dp={item.displayPicture.url}
                name={item.name}
                designation={item.designation}
                github={item.github}
                linkedin={item.linkedin}
              />  
             ))}
            </div>
          </div>
        </section>        
      );
  }
  
}

export default TeamSection;
