import Link from "next/link";
import MenuAccordion from "../components/MenuAccordion";
import { menu } from "@/lib/menuData";
import { siteInfo } from "@/lib/siteInfo";

export const metadata = {
  title: "Menu",
  description:
    "Breakfast served all day, plus lunch, dinner, and fresh-baked grab-and-go — the menu at Gaytan Kitchen Creations in Quincy, WA.",
};

export default function MenuPage() {
  return (
    <>
      <section className="hero" style={{ padding: "64px 0" }}>
        <div className="container">
          <span className="eyebrow">Menu</span>
          <h1>Breakfast served all day</h1>
          <p>
            Plus lunch, dinner, and a self-serve case of fresh-baked goods.
            Prices below are drawn from Gaytan Kitchen&apos;s posted weekly
            menu — always ask in-house for the current daily special.
          </p>
        </div>
      </section>

      {/* menu items and prices below are transcribed directly from photos of the
          in-restaurant printed menu (provided by the client, Aug 2026) — this
          supersedes the earlier Instagram/review-sourced list. Bakery items are
          listed without prices since the printed dessert page doesn't post them;
          confirm current pricing with the owner if you want it shown. See
          lib/menuData.js for the underlying structured data. */}
      <section className="section">
        <div className="container">
          <div className="menu-accordions">
            {menu.map((section) => (
              <MenuAccordion section={section} key={section.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <span className="eyebrow">How to Order</span>
            <h2>Order ahead, or come sit down</h2>
            <p>
              Most customers call ahead for easy pickup, but you&apos;re
              always welcome to dine in and enjoy your meal here.
            </p>
            <ul>
              <li style={{ marginBottom: "12px" }}>
                1. Call {siteInfo.phoneDisplay} or stop by —{" "}
                {siteInfo.addressShort}
              </li>
              <li style={{ marginBottom: "12px" }}>
                2. We prepare your order fresh, from scratch
              </li>
              <li style={{ marginBottom: "12px" }}>
                3. Dine in, pick up, or grab something from the self-serve
                case
              </li>
              <li>4. Open Thu–Sat 8am–5:30pm, Sun 8am–2pm</li>
            </ul>
          </div>
          <div className="card">
            <h3>Hosting an event?</h3>
            <p>
              Our kitchen is available for private events and custom
              catering — from a family gathering to a full pupusa fiesta.
            </p>
            <Link href="/catering" className="btn btn-primary btn-block">
              See Catering
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
