/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      // bamboo insta 연결 url
      {
        source: "/dgu-bamboo-home",
        destination: "https://www.instagram.com/dgu_bamboo/?igshid=NTc4MTIwNjQ2YQ%3D%3D",
        permanent: false,
      }
    ]
  }
}

module.exports = nextConfig
