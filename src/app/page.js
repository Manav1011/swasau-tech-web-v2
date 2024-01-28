import MainGraphic from "@/components/home/MainGraphic";
import ServiceSkeleton from "@/skeletons/ServiceSkeleton";
import ServiceListing from "@/components/home/ServiceListing";
import ProjectsSection from "@/components/home/ProjectsSection";
import Testimonials from "@/components/home/Testimonials";
import TeamSection from "../components/home/TeamSection";
import UseAPI from "@/hooks/UseAPI";
import AboutUs from "@/components/home/AboutUs";
import Founders from "@/components/home/Founders";


export default async function Home() {
  const query = `query {
    clients: clientsCollection {
      items {
        companyName
        description
        siteLink
      }
    }
    
    projects: projectsCollection {
      items {
        title
        description
      }
    }
    
    services: servicesCollection {
      items {
        sys {
          id
        }
        title
        image {
          url
        }
      }
    }
    
    team: teamCollection {
      items {
        name
        designation
        displayPicture {
          url
        }
        github
        linkedin
        sys {
          id
        }
      }
    }
  }`
  const response = async () => { const res = await UseAPI(query); return res.data }
  const query_response = await response()
  if(query_response){
    var projects = query_response.projects
    var clients = query_response.clients
    var team = query_response.team
    var services = query_response.services
  }

  // const ServiceListing = dynamic_loading(() => import("@/components/home/ServiceListing"), {
  //   suspense: true,
  //   ssr:false,
  //   loading: () => <ServiceSkeleton/>
  // });
  // const TeamSection = dynamic_loading(() => import("../components/home/TeamSection"), {
  //   suspense: true,
  //   ssr:false,
  //   loading: () => <ServiceSkeleton/>
  // });
  // const ProjectsSection = dynamic_loading(() => import("@/components/home/ProjectsSection"), {
  //   suspense: true,
  //   ssr:false,
  //   loading: () => <ServiceSkeleton/>
  // });
  // const Testimonials = dynamic_loading(() => import("@/components/home/Testimonials"), {
  //   suspense: true,
  //   ssr:false,
  //   loading: () => <ServiceSkeleton/>
  // });
  return (
    <>
        <MainGraphic/>      
        {services && <ServiceListing services={services.items}/>} 
        {team && <TeamSection team={team.items}/>}
        {projects  && <ProjectsSection projects={projects.items}/>}
        {clients && <Testimonials clients={clients.items}/>}
        <Founders/>
        <AboutUs/>
    </>
  );
}
