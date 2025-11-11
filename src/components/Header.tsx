import Link from "next/link"
import Image from "next/image"
import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
  return (
    <header className="header">
        <nav>
          <div className="logo"><Link href="/"><Image src="https://www.svgrepo.com/show/368858/nextjs.svg" width={30} height={30} alt="Logo"/></Link></div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/posts">Post</Link>
            <Link href="/about">About</Link>
          </div>
          <ThemeSwitcher/>
        </nav>
    </header>
  )
}

export default Header