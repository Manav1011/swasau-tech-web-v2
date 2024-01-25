import MainGraphic from "@/components/home/MainGraphic";
import dynamic_loading from "next/dynamic";
import ServiceSkeleton from "@/skeletons/ServiceSkeleton";

export const dynamic = 'force-dynamic'
export default function Home() {
  const gradient_arr = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-sky-500 to-indigo-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-purple-500 to-pink-500"
  ]
  const choosed_grad_index = Math.floor(Math.random() * gradient_arr.length)  
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
      <MainGraphic grad={gradient_arr[choosed_grad_index]}/>
      <ServiceListing/>
      <TeamSection/>
    </>
  );
}
