import React from 'react'
import Link from 'next/link'
import Style from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.container + " container"}>
      <div className={Style.logo}>logo</div>
        <ul>
          <li>
            <Link legacyBehavior href="/">
             <a >Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
             <a >About</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/cart">
             <a >Cart</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;



