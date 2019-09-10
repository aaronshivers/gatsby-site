import React from 'react'
import { Link } from "gatsby"

const links = [
  { href: '/', label: 'Home' },
  { href: '/cars', label: 'Cars' },
  { href: '/cart', label: 'Cart' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link to={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
