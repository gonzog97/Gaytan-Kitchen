"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PotIcon } from "./Icons";
import { siteInfo, navLinks } from "@/lib/siteInfo";

// Replaces the old js/main.js mobile-nav-toggle + active-link-highlighting
// logic (which compared resolved URL paths by hand) with React state and
// Next's usePathname(). Rendered once in app/layout.js instead of being
// copy-pasted into every page's <header> — this is what eliminates the
// repeated relative-script-path typos the static site kept running into.
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <PotIcon aria-hidden="true" />
          {siteInfo.name}
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          &#9776;
        </button>
        <nav>
          <ul className={`nav-links${open ? " open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={siteInfo.phoneHref} className="btn btn-primary">
                Call to Order
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
