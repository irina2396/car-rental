import Link from "next/link"
import css from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className={css.header}>
          <div className={`container ${css.headerContainer}`}>
            <svg className={css.logoIcon} width={104} height={16}>
              <use href="/icons/logo.svg"/>
            </svg>
            <nav className={css.navigation}>
              <Link className={css.headerLink} href="/">Home</Link>
              <Link className={css.headerLink} href="/cars">Catalog</Link>
            </nav>
          </div>
    </header>
    </>
  )
}