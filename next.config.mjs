/** @type {import('next').NextConfig} */
const nextConfig = {
  // Intentionally NOT using output: 'export' (static export). Keeping the
  // default Node server build so this project can grow into API routes
  // (e.g. real contact/catering form handling, and eventually POS
  // integration) without a later migration off static export.
  reactStrictMode: true,
};

export default nextConfig;
