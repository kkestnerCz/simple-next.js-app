/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
        {
          source: '/pageWithBadName',
          destination: '/pageWithGoodName'
        }
      ]
    }
}

module.exports = nextConfig
