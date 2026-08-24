/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Remote stock photography. Once every image lives in /public you can
    // delete this block entirely.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },

  // The four service pages were merged into /services. These permanent
  // redirects keep existing links, bookmarks and search results working.
  async redirects() {
    return [
      {
        source: "/residential",
        destination: "/services#residential",
        permanent: true,
      },
      {
        source: "/commercial",
        destination: "/services#commercial",
        permanent: true,
      },
      {
        source: "/corporate",
        destination: "/services#corporate",
        permanent: true,
      },
      {
        source: "/mega-projects",
        destination: "/services#large-scale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
