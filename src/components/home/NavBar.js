import Image from "next/image";
import NavButton from '../../components/NavBar/NavButtons';
import ToggleNavButton from '../../components/NavBar/ToggleNavButton';
import Link from "next/link";
import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav
      className="w-full fixed top-0 z-10 sm:bg-transparent"
      style={{ fontFamily: "dosislight", 'backdropFilter': 'blur(5px)' }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <ToggleNavButton />
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  width={300}
                  height={192}
                  priority={true}
                  className="h-auto w-48 mix-blend-darken"
                  src="/images/Logo/Swasau-Logo-png.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden lg:ml-6 lg:flex items-center">
              <div className="flex space-x-4">
                  <NavLink classList={"text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} id={"clientssection"} title={'Clients'}/>
                  <NavLink classList="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="servicescontainer" title="Services" />
                  <NavLink classList="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="teamdetailscontainer" title="Team" />
                  <NavLink classList="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="projectssection" title="Projects" />
                  <NavLink classList="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="aboutussection" title="About us" />
                <Link
                  href="/contact-us"
                  className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="lg:hidden hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink classList="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="clientssection" title="Clients" />
          <NavLink classList="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="servicescontainer" title="Services" />
          <NavLink classList="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="teamdetailscontainer" title="Team" />
          <NavLink classList="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="projectssection" title="Projects" />
          <NavLink classList="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" id="aboutussection" title="About us" />
          <Link
            href="/contact-us"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
