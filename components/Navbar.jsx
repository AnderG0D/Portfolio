"use client";

import Link from "next/link";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Selected work", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="wordmark" href="#home" aria-label="Edgar Anderson, home">
          EA<span>.</span>
        </Link>
        <ul className="desktop-nav">
          {links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
        </ul>
        <a className="nav-contact" href="mailto:m.anzoedgar11@hotmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
        <details className="mobile-nav">
          <summary aria-label="Navigation menu"><span></span><span></span></summary>
          <ul>
            {links.map(([label, href]) => (
              <li key={href}>
                <Link href={href} onClick={(event) => { event.currentTarget.closest("details").open = false; }}>{label}</Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
