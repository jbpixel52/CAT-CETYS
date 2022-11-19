module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-import": {},
    "postcss-nested": { bubble: ["screen"] },
  },
};
// module.exports = {
//   plugins: [
//     require("tailwindcss"),
//     require("postcss-import"),
//     require("postcss-nested")({
//       bubble: ["screen"],
//     }),
//     require("autoprefixer"),
//   ],
// };
