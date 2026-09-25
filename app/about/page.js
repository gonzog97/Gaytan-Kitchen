import { PinIcon } from "../components/Icons";
import { siteInfo } from "@/lib/siteInfo";
import { testimonials } from "@/lib/testimonials";

export const metadata = {
  title: "About",
  description:
    "Meet Chef Hermilda Gaytan and the story behind Gaytan Kitchen Creations, a family-owned kitchen in Quincy, WA.",
};

const rayTestimonial = testimonials.find((t) => t.id === "ray-i");

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Meet Chef Hermilda Gaytan</h1>
          <p>
            A small, family-run kitchen in Quincy, Washington — open since
            2024.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Our Story</span>
            <span className="script-accent">With love and deliciousness</span>
            <h2>Thirty years of cooking, one small kitchen</h2>
            <p>
              With 30 years of culinary expertise, Chef Hermilda Gaytan has
              mastered the art of both Mexican and American cuisine. Known
              for her passion and dedication, she brings authentic flavors
              and creativity to every dish — and she&apos;s usually the one
              who greets you at the door.
            </p>
            <p>
              Gaytan Kitchen Creations opened in 2024 at 905 E St SW in
              Quincy, serving breakfast, lunch, and dinner alongside a
              self-serve case of fresh-baked goods, with catering and
              private events available out of the same kitchen.
            </p>
            {/* TODO: no formal mission statement was found in public sources —
                the paragraphs above are adapted from the business's own
                "Meet the Chef" Instagram post. If the owner wants a distinct
                mission/vision statement on the site, get it from her
                directly. */}
          </div>
          <div className="card">
            <h3 className="mt-0">Gaytan Kitchen Creations</h3>
            <p style={{ color: "var(--color-text-muted)" }}>
              {siteInfo.addressFull}
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>
              Owner &amp; Chef: Hermilda Gaytan
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>
              Licensed by Grant County Health District — Food Service 3 with
              Catering
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">The Chef</span>
            <h2>The person behind every plate</h2>
            {/* No other named staff were found in public research — this
                section shows only the one team member the business itself
                has named. */}
          </div>
          <div className="grid" style={{ maxWidth: "320px", margin: "0 auto" }}>
            <div className="card text-center">
              <div className="card-icon" style={{ margin: "0 auto 16px" }}>
                <PinIcon />
              </div>
              <h3>Hermilda Gaytan</h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Owner &amp; Chef
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            <div>
              <div className="stat-number">Est. 2024</div>
              <div className="stat-label">Founded</div>
            </div>
            <div>
              <div className="stat-number">1</div>
              <div className="stat-label">Location — Quincy, WA</div>
            </div>
            <div>
              <div className="stat-number">30+</div>
              <div className="stat-label">Years, Chef&apos;s Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div
            className="testimonial-card"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">
              &quot;{rayTestimonial.quote}&quot;
            </p>
            <p className="testimonial-source">
              <a href={rayTestimonial.url} target="_blank" rel="noopener">
                — {rayTestimonial.source}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
