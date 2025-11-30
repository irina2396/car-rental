'use client'

import Link from "next/link"
import css from "./Header.module.css"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className={css.header}>
          <div className={`container ${css.headerContainer}`}>
            <svg className={css.logoIcon} width={104} height={16}>
              <use href="/icons/logo.svg"/>
            </svg>
            <nav className={css.navigation}>
              <Link className={`${css.headerLink} ${pathname === "/" ? css.active : ""}`} href="/">Home</Link>
              <Link className={`${css.headerLink} ${pathname.startsWith("/catalog") ? css.active : ""}`} href="/catalog">Catalog</Link>
            </nav>
          </div>
    </header>
    </>
  )
}