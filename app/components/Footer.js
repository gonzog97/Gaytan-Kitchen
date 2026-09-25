import Link from "next/link";
import { InstagramIcon } from "./Icons";
import { siteInfo } from "@/lib/siteInfo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{siteInfo.name}</h4>
            <p>{siteInfo.tagline}</p>
            <div className="footer-social">
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener"
                aria-label={`${siteInfo.name} on Instagram`}
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>
                <Link href="/catering">Catering</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={siteInfo.phoneHref}>{siteInfo.phoneDisplay}</a>
              </li>
              <li>
                <a href={siteInfo.mapsUrl} target="_blank" rel="noopener">
                  {siteInfo.addressShort}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {siteInfo.name}. All rights
            reserved.
          </span>
          {/* TODO: legal filing reads "Gayton's Kitchen Creations LLC" —
              confirm which spelling the owner wants on the live site. */}
        </div>
      </div>
    </footer>
  );
}
