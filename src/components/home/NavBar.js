import Image from "next/image";
import NavButton from '../../components/NavBar/NavButtons';
import ToggleNavButton from '../../components/NavBar/ToggleNavButton';
import Link from "next/link";

function NavBar() {
  return (
    <nav
      className="sticky top-0 z-10 bg-opacity-30"
      style={{ fontFamily: "dosislight", background: 'transparent', 'backdropFilter': 'blur(5px)' }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <ToggleNavButton />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
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
            <div className="hidden sm:ml-6 sm:flex items-center">
              <div className="flex space-x-4">
                  <Link className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#clientssection">Clients</Link>
                  <Link className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#servicescontainer">Services</Link>
                  <Link className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#teamdetailscontainer">Team</Link>
                  <Link className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#projectssection">Projects</Link>
                  <Link className="text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#aboutussection">About us</Link>
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
      <div className="sm:hidden hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link className="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#clientssection">Clients</Link>
          <Link className="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#servicescontainer">Services</Link>
          <Link className="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#teamdetailscontainer">Team</Link>
          <Link className="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#projectssection">Projects</Link>
          <Link className="block text-zinc-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#aboutussection">About us</Link>
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
