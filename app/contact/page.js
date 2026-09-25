import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { PinIcon, PhoneIcon, ClockIcon, InstagramIcon } from "../components/Icons";
import { siteInfo } from "@/lib/siteInfo";

export const metadata = {
  title: "Contact",
  description:
    "Hours, address, phone, and a message form for Gaytan Kitchen Creations in Quincy, WA.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p>
            Questions, feedback, or just want to say hello — send a message
            and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <h3 className="mt-0">Send a message</h3>
            <ContactForm />
          </div>

          <div>
            <span className="eyebrow">Details</span>
            <h2>Other ways to reach us</h2>

            <div className="info-list">
              <div className="info-row">
                <PinIcon />
                <div>
                  <p className="info-label">Address</p>
                  <p>
                    <a href={siteInfo.mapsUrl} target="_blank" rel="noopener">
                      {siteInfo.addressFull}
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-row">
                <PhoneIcon />
                <div>
                  <p className="info-label">Phone</p>
                  <p>
                    <a href={siteInfo.phoneHref}>{siteInfo.phoneDisplay}</a>
                  </p>
                </div>
              </div>
              <div className="info-row">
                <ClockIcon />
                <div>
                  <p className="info-label">Hours</p>
                  <p>
                    {siteInfo.hours.map((h, i) => (
                      <span key={h.days}>
                        {h.days}, {h.time}
                        {i < siteInfo.hours.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="info-row">
                <InstagramIcon />
                <div>
                  <p className="info-label">Instagram</p>
                  <p>
                    <a
                      href={siteInfo.instagramUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      {siteInfo.instagramHandle}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* TODO: hours above match the most recent Google Business Profile /
                Instagram posting as of the research brief (Aug 2026) — Yelp and
                TripAdvisor list slightly different hours. Confirm the current,
                authoritative hours with the owner. */}

            <div style={{ marginTop: "24px" }}>
              <Link href="/catering" className="btn btn-outline">
                Interested in catering? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div
            className="table-wrap"
            style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
            }}
          >
            <iframe
              title="Map to Gaytan Kitchen Creations"
              src={siteInfo.mapEmbedUrl}
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
