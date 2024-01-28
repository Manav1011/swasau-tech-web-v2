import TeamMemberCard from "./TeamMemberCard";

function TeamSection({ team }) {
  let ceo = null;
  let cto = null;
  // Filter out 'CEO' and 'CTO' elements
  const filteredTeam = team.filter(
    (member) => {
      if (member.designation === "CEO") {
        ceo = member;
        return false;
      } else if (member.designation === "CTO") {
        cto = member;
        return false;
      }
      return true;
    }
  );
  const members = {
    CEO: ceo,
    CTO: cto,
    teamMembers: filteredTeam,
  };  
    return (
      <section className={`pt-20 overflow-x-hidden`} id="teamdetailscontainer">
        <div
          className={`px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6`}
        >
          <div className="mx-auto mb-8 w-full sm:w-1/2 lg:mb-16">
            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-slate-900	 sm:text-4xl md:text-[40px]">
              Our team
            </h2>
            <p className="font-light text-slate-500 sm:text-xl ">
              At Swasau Technologies, we are proud to be fueled by a team of
              dedicated and skilled professionals. Together, we form a
              collaborative force committed to turning innovative ideas into
              reality.
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly">
          {members.CEO && <TeamMemberCard
              id={members.CEO.sys.id}
              dp={members.CEO.displayPicture.url}
              name={members.CEO.name}
              designation={members.CEO.designation}
              github={members.CEO.github}
              linkedin={members.CEO.linkedin}
            /> }
            {members.CTO && <TeamMemberCard
              id={members.CTO.sys.id}
              dp={members.CTO.displayPicture.url}
              name={members.CTO.name}
              designation={members.CTO.designation}
              github={members.CTO.github}
              linkedin={members.CTO.linkedin}
            />}
          </div>
          <div className="flex items-center justify-center flex-wrap">
            {members.teamMembers && members.teamMembers.map((item, index) => (
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

export default TeamSection;
