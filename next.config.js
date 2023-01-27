const nextTranslate = require('next-translate')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
   
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};
module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      nextConfig.node = {
        fs: 'empty'
      }
    }
    return nextConfig
  }
   
  
  
})
//  module.exports = nextConfig;
// webpack: (config, { isServer }) => {
//   if (!isServer) {
//     config.resolve.fallback.fs = false;
//   }
//   return config;
// },