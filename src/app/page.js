import MainGraphic from "@/components/home/MainGraphic";
import dynamic_loading from "next/dynamic";
import ServiceSkeleton from "@/skeletons/ServiceSkeleton";
import ProjectsSection from "@/components/home/ProjectsSection";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {  
  const ServiceListing = dynamic_loading(() => import("@/components/home/ServiceListing"), {
    suspense: true,
    ssr:false,
    loading: () => <ServiceSkeleton/>
  });
  const TeamSection = dynamic_loading(() => import("../components/home/TeamSection"), {
    suspense: true,
    ssr:false,
    loading: () => <ServiceSkeleton/>
  });
  return (
    <>
      <MainGraphic/>
      <ServiceListing/>
      <TeamSection/>
      <ProjectsSection/>
      <Testimonials/>
    </>
  );
}
