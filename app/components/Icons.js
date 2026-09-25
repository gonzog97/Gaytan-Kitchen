// Every icon used across the site, pulled out once so the SVG markup
// (originally copy-pasted inline on every page) isn't duplicated. Attribute
// names are converted from the original HTML to JSX: stroke-width ->
// strokeWidth, stroke-linecap -> strokeLinecap, stroke-linejoin ->
// strokeLinejoin. aria-hidden stays as-is (aria-* attributes are not
// camelCased in JSX).

const defaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// The pot / sprigs mark — used for the nav brand, the favicon, the
// "Everything From Scratch" card, the Bakery & Dessert menu icon, and the
// "Licensed & permitted" catering row.
export function PotIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 11h16v3a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-3Z" />
      <path d="M2 11h20" />
      <path d="M9 11c-.5-2 .5-3.5 0-5.5" />
      <path d="M12 11c-.4-2.6.8-4 .2-6.5" />
      <path d="M15 11c-.5-2 .5-3.5 0-5.5" />
    </svg>
  );
}

// "Mexican & American, Together" home card icon.
export function UtensilsIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6 3v7a2 2 0 0 0 2 2v9" />
      <path d="M6 3v5" />
      <path d="M9 3v5" />
      <path d="M18 3c-1.7 0-3 2-3 5s1.3 5 3 5v8" />
    </svg>
  );
}

// Location-pin / person mark — "A Family Kitchen" home card, the About page
// chef card, and the Contact "Address" row.
export function PinIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 21s-6.7-6.1-6.7-11.3A6.7 6.7 0 0 1 12 3a6.7 6.7 0 0 1 6.7 6.7C18.7 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.7" r="2.3" />
    </svg>
  );
}

// Clock face — Breakfast menu icon, Catering "Community events" row,
// Contact "Hours" row.
export function ClockIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

// Chile pepper — Lunch & Dinner menu icon.
export function ChileIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M8 4c4 0 9 3 9 9 0 4-2.5 7-5.5 7S6 18 6 14" />
      <path d="M8 4c-1.4 0-2.6 1-2.9 2.4" />
      <path d="M6.5 14c-1.4 0-2.5-1.4-2.5-3" />
    </svg>
  );
}

// Phone handset — Catering "Prefer to talk it through?" row, Contact
// "Phone" row.
export function PhoneIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6.5 3.5 9 6 7 8.5c1 2.4 3.1 4.5 5.5 5.5L15 11.5l2.5 2.5c.6.6.6 1.9 0 2.5-1 1-2.4 1.5-4 1.5-5.5 0-11-5.5-11-11 0-1.6.5-3 1.5-4 .6-.6 1.9-.6 2.5 0Z" />
    </svg>
  );
}

// Instagram glyph — footer social row, Contact "Instagram" row.
export function InstagramIcon(props) {
  return (
    <svg {...defaults} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Maps a menuData.js icon key to its component, so menu data can stay
// plain data (see lib/menuData.js) rather than importing JSX.
export const menuIcon = {
  clock: ClockIcon,
  chile: ChileIcon,
  pot: PotIcon,
};
