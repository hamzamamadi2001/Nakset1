const nextTranslate = require('next-translate')
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   optimizeFonts: true,
   
  
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//       },
//     ],
//     minimumCacheTTL: 1500000,
//   },
// };
// module.exports = nextTranslate({
//   webpack: (nextConfig, { isServer, webpack }) => {
//     if (!isServer) {
//       nextConfig.resolve.fallback.fs = false;
//     }
//     return nextConfig
//   }
   
  
  
// })

// webpack: (config, { isServer }) => {
//   if (!isServer) {
//     config.resolve.fallback.fs = false;
//   }
//   return config;
// },
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback =  {fs: false,
        path: false,
        child_process: false,
      };
      }
      return config;
    },
  
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
  
}
module.exports = nextConfig