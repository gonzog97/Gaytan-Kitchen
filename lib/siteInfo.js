// Central business info, shared by the header, footer, and contact/catering
// pages. Keeping this in one place means a phone/address/hours change only
// has to happen once. This is also a natural spot to eventually pull from a
// real backend/POS instead of a static file.

export const siteInfo = {
  name: "Gaytan Kitchen Creations",
  tagline:
    "Authentic Mexican and classic American comfort food, made from scratch in Quincy, Washington.",
  description:
    "Authentic Mexican and classic American comfort food, made from scratch by Chef Hermilda Gaytan in Quincy, Washington. Dine in, order ahead, or ask about catering.",

  phoneDisplay: "(509) 398-5530",
  phoneHref: "tel:+15093985530",

  addressFull: "905 E St SW, Quincy, WA 98848",
  addressShort: "905 E St SW, Quincy, WA",
  mapsUrl: "https://www.google.com/maps/place/Gaytan+Kitchen+Creations",
  mapEmbedUrl:
    "https://www.google.com/maps?q=905+E+St+SW,+Quincy,+WA+98848&output=embed",

  instagramUrl: "https://www.instagram.com/gaytan_kitchen/",
  instagramHandle: "@gaytan_kitchen",

  // TODO: hours below match the most recent Google Business Profile /
  // Instagram posting as of the research brief (Aug 2026) — Yelp and
  // TripAdvisor list slightly different hours. Confirm the current,
  // authoritative hours with the owner.
  hours: [
    { days: "Thursday – Saturday", time: "8am – 5:30pm" },
    { days: "Sunday", time: "8am – 2pm" },
    { days: "Monday – Wednesday", time: "Closed" },
  ],
  hoursShort: "Open Thursday–Saturday, 8am–5:30pm, and Sunday, 8am–2pm",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Contact" },
];
