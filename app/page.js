import Link from "next/link";
import { PotIcon, UtensilsIcon, PinIcon } from "./components/Icons";
import { siteInfo } from "@/lib/siteInfo";
import { testimonials } from "@/lib/testimonials";

export const metadata = {
  title: { absolute: `${siteInfo.name} | Quincy, WA` },
  description: siteInfo.description,
};

const homeTestimonials = testimonials.filter((t) =>
  ["richard-r", "w-sr", "nicolas-ramirez"].includes(t.id)
);

export default function HomePage() {
  return (
    <>
      {/* Hero
          Real photo of the storefront, matching the client's own edit to
          the static site (assets/front-building.jpg -> /assets/front-building.jpg
          here). Copy that image file into public/assets/ before deploying —
          see the README for details. The CSS lays a cream scrim over it so
          the heading and text stay readable. */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/assets/front-building.jpg')" }}
      >
        <div className="container">
          <span className="eyebrow">Quincy, Washington</span>
          <h1>Welcome to Our Kitchen</h1>
          <p>
            Authentic Mexican and classic American comfort food, made from
            scratch by Chef Hermilda Gaytan. Breakfast served all day, lunch
            and dinner, and a self-serve case of fresh-baked goods.
          </p>
          <div className="hero-actions">
            <Link href="/menu" className="btn btn-primary">
              See the Menu
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Gaytan Kitchen</span>
            <h2>What makes this kitchen different</h2>
            <p>
              Everything here is made the way Chef Hermilda has always made
              it — by hand, from scratch, for people she knows by name.
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">
                <PotIcon />
              </div>
              <h3>Everything From Scratch</h3>
              <p>
                Salsas, salads, sauces, and baked goods are all made
                in-house — nothing off a truck. Reviewers call it &quot;a
                refreshing change from commercial Tex-Mex.&quot;
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <UtensilsIcon />
              </div>
              <h3>Mexican &amp; American, Together</h3>
              <p>
                Pupusas, quesabirria, and tamales sit on the same menu as
                biscuits and gravy and chicken fried steak — a genuine
                blend, not a gimmick.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <PinIcon />
              </div>
              <h3>A Family Kitchen</h3>
              <p>
                Chef Hermilda is usually the one greeting you at the door —
                30 years of cooking, and a small, family-run kitchen since
                2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / social proof */}
      <section className="section section-alt">
        <div className="container">
          <div className="stats">
            <div>
              <div className="stat-number">5.0 ★</div>
              <div className="stat-label">Google Rating, 105 Reviews</div>
            </div>
            <div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Years of Culinary Experience</div>
            </div>
            <div>
              <div className="stat-number">Est. 2024</div>
              <div className="stat-label">Family Owned &amp; Operated</div>
            </div>
            <div>
              <div className="stat-number">&quot;Hidden Gem&quot;</div>
              <div className="stat-label">TripAdvisor, #9 of 37 in Quincy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What People Say</span>
            <h2>Straight from the reviews</h2>
            <p>
              No fabricated quotes here — every word below is a real,
              publicly posted review.
            </p>
          </div>
          <div className="grid">
            {homeTestimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
                <p className="testimonial-source">
                  <a href={t.url} target="_blank" rel="noopener">
                    — {t.source}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt text-center">
        <div className="container">
          <span className="script-accent">Stop by before they&apos;re gone!</span>
          <h2>We look forward to seeing you</h2>
          <p>
            {siteInfo.hoursShort}, at {siteInfo.addressShort}.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Get Directions
            </Link>
            <Link href="/catering" className="btn btn-outline">
              Ask About Catering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
