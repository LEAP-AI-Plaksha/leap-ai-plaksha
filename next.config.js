/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/redirect-event",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
