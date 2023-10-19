"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLinkType = {
  label: string
  href: string
}

const Nav = () => {
  const path = usePathname()
  const links: NavLinkType[] = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
  ]
  return (
    <nav className="bg-black">
      <ul className="flex h-10 items-center justify-center gap-10 bg-white shadow-md">
        {links.map((link: NavLinkType) => {
          return (
            <li key={link.label}>
              <Link href={link.href} className={link.href === path? "text-slate-800 transition-colors ": "text-slate-500 hover:text-slate-800"}>
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
