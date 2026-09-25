// Self-hosted fonts via @fontsource (replaces the
// @import url(fonts.googleapis.com...) that lived at the top of the old
// css/style.css) — same three families and weights the static site used,
// bundled at build time instead of fetched from Google's CDN at request
// time. Using @fontsource here instead of next/font/google specifically so
// the build doesn't depend on reaching fonts.googleapis.com at build time.
import "@fontsource/playfair-display/latin-600.css";
import "@fontsource/playfair-display/latin-700.css";
import "@fontsource/playfair-display/latin-500-italic.css";
import "@fontsource/lora/latin-400.css";
import "@fontsource/lora/latin-500.css";
import "@fontsource/lora/latin-600.css";
import "@fontsource/lora/latin-400-italic.css";
import "@fontsource/caveat/latin-600.css";
import "@fontsource/caveat/latin-700.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteInfo } from "@/lib/siteInfo";

export const metadata = {
  title: {
    default: `${siteInfo.name} | Quincy, WA`,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.description,
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
