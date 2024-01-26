import MainGraphic from "@/components/home/MainGraphic";
import ServiceSkeleton from "@/skeletons/ServiceSkeleton";
import ServiceListing from "@/components/home/ServiceListing";
import ProjectsSection from "@/components/home/ProjectsSection";
import Testimonials from "@/components/home/Testimonials";
import TeamSection from "../components/home/TeamSection";
import UseAPI from "@/hooks/UseAPI";
import { Suspense } from "react";


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
  const projects = query_response.projects
  const clients = query_response.clients
  const team = query_response.team
  const services = query_response.services

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
        <ServiceListing services={services.items}/>      
        <TeamSection team={team.items}/>
        <ProjectsSection projects={projects.items}/>
        <Testimonials clients={clients.items}/>    
    </>
  );
}
