'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

function NavLink({classList, title,id}) {
    const currentPath = usePathname()    
  return (
    <Link className={classList} href={currentPath === '/' ? `#${id}` : `/#${id}`}>{title}</Link>
  )
}

export default NavLink