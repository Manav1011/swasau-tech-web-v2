'use client'
import { useInView } from "react-intersection-observer"
function AboutUs() {
    let options = {        
        triggerOnce:true,
    }
    const { ref: myref, inView, entry } = useInView(options);
  return (
    <section className={`${inView ? 'zoom-out': null} pb-6 pt-20`} id='aboutussection' ref={myref}>
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto px-6 p-6 bg-clip-padding p-10 bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
            <div className="mb-16 text-center">
                <h4 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
                about us & 
                </h4>
                <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                how we change the game
                </p>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full hover:scale-110 transition ease-in-out delay-100 duration-300 border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                    >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">Innovation Hub</div>
                </div>
                <p className="leading-loose text-gray-500">
                    Swasau Technologies is not just a service provider; we're an innovation hub. Our team of skilled professionals thrives on pushing the boundaries of what's possible, delivering solutions that stand out in today's fast-evolving digital landscape.
                </p>
                </div>
                <div className="w-full hover:scale-110 transition ease-in-out delay-100 duration-300 border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div className="flex items-center mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                    >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">Collaborative Approach</div>
                </div>
                <p className="leading-loose text-gray-500">
                    We don't just work for our clients; we work with them. Our collaborative approach ensures that we understand your unique needs, allowing us to tailor solutions that align perfectly with your goals.
                </p>
                </div>
                <div className="w-full hover:scale-110 transition ease-in-out delay-100 duration-300 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div className="flex items-center mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                    >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">Technology Expertise</div>
                </div>
                <p className="leading-loose text-gray-500">
                    From web and mobile development to IoT, AI, and beyond, we boast a diverse range of technological expertise. Our team stays ahead of the curve, adopting the latest tools and frameworks to deliver solutions that are not just current but future-ready.
                </p>
                </div>
                <div className="w-full hover:scale-110 transition ease-in-out delay-100 duration-300 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                    >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">Mission</div>
                </div>
                <p className="leading-loose text-gray-500">
                    At Swasau Technology, our mission is to become a global leader in electronic Research and Development (R&D), dedicated to providing dream and innovative technological solutions. We are committed to pushing the boundaries of electronic design to create transformative solutions for diverse industries.
                </p>
                </div>
                <div className="w-full hover:scale-110 transition ease-in-out delay-100 duration-300 md:w-1/2 lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                    >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">Vision</div>
                </div>
                <p className="leading-loose text-gray-500">
                    Our vision at Swasau Technology is to accelerate the Make in India initiative by offering cutting-edge electronic design solutions to both domestic and global industries. We aspire to be at the forefront of technological advancements, contributing to the growth and competitiveness of the electronics sector.
                </p>
                </div>
                <div className="w-full hover:scale-110 transition ease-in-out delay-100 duration-300 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="h-6 w-6 text-indigo-500"
                    >
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">Values</div>
                </div>
                <p className="leading-loose text-gray-500">
                Our values are anchored in a passion for innovation, integrity in all our endeavors, a commitment to excellence, and a customer-centric approach. We believe in fostering a collaborative and inclusive work environment that encourages creativity, continuous learning, and sustainable practices.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default AboutUs