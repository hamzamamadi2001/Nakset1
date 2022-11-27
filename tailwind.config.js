/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx,js}",
  "./public/**/*.html","./node_modules/flowbite-react/**/*.js","./components/**/*.{ts,tsx,js}"],
  
  theme: {
    extend: { fontFamily:{
      "tar" : ["Tangerine" ,"cursive"],
      "lor" : ["Londrina Solid" ,"cursive"],
      "rubik" : ["Rubik Bubbles" ,"cursive"],
      "xh" : ["Xanh Mono" ,"cursive"],
      "paris" : ["paris" ,"cursive"],
      "titan" : ["titan" ,"cursive"],
      "bar" : ["bar" ,"cursive"],
      "oleo" :["oleo" ,"cursive"]
    },
    backgroundImage: {
      'login': "url('../public/login.jpeg')",
    },
  },
  },
  plugins: [require("flowbite/plugin")],
}
