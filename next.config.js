/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
const nextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "loremflickr.com",
          port: "",
          pathname: "/640/480/**",
        },
      ],
    },
};

module.exports = nextConfig
