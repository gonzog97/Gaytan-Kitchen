import CateringForm from "../components/CateringForm";
import { PotIcon, ClockIcon, PhoneIcon } from "../components/Icons";
import { siteInfo } from "@/lib/siteInfo";

export const metadata = {
  title: "Catering",
  description:
    "Catering and private events at Gaytan Kitchen Creations in Quincy, WA — from family gatherings to community fiestas.",
};

export default function CateringPage() {
  return (
    <>
      {/* Note: the base template's "Bookings" page (individual appointment
          scheduling) didn't fit this business — Gaytan Kitchen Creations
          doesn't take appointments, it caters and hosts private events.
          This page is that page, reworked as a catering & event inquiry
          form. */}
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <span className="eyebrow">Catering &amp; Private Events</span>
          <h1>Hosting an event or need catering?</h1>
          <p>
            Our kitchen is spacious and available for private events and
            custom catering — tell us what you&apos;re planning and
            we&apos;ll follow up.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <h3 className="mt-0">Catering inquiry</h3>
            <CateringForm />
          </div>

          <div>
            <span className="eyebrow">What to Expect</span>
            <h2>A home kitchen, scaled up for your event</h2>
            <p>
              Gaytan Kitchen Creations is licensed by the Grant County
              Health District as a Food Service 3 establishment with
              catering, and has hosted its own community events on-site —
              including a first catering event and a Pupusa Fiesta.
            </p>

            <div className="info-list">
              <div className="info-row">
                <PotIcon />
                <div>
                  <p className="info-label">Licensed &amp; permitted</p>
                  <p>
                    Food Service 3 with Catering, Grant County Health
                    District.
                  </p>
                </div>
              </div>
              <div className="info-row">
                <ClockIcon />
                <div>
                  <p className="info-label">Community events</p>
                  <p>
                    The kitchen has hosted an &quot;Artful Evening&quot; and
                    a Pupusa Fiesta — ask about hosting your own gathering
                    here.
                  </p>
                </div>
              </div>
              <div className="info-row">
                <PhoneIcon />
                <div>
                  <p className="info-label">Prefer to talk it through?</p>
                  <p>
                    <a href={siteInfo.phoneHref}>
                      Call {siteInfo.phoneDisplay}
                    </a>{" "}
                    — Hermilda is usually the one who answers.
                  </p>
                </div>
              </div>
            </div>
            {/* TODO: no catering package pricing has been published anywhere
                in public sources — pricing must come directly from the
                owner rather than be estimated here. A pricing table was
                intentionally left out of this page. */}
          </div>
        </div>
      </section>
    </>
  );
}
