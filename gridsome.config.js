// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Farzin Nasiri | Portfolio",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "works/**/*.md",
        typeName: "Work"
      }
    }
  ]
};

// module.exports = {
//   chainWebpack: (config) => {
//     config.module
//       .rule("pdf")
//       .test(/\.(pdf)(\?.*)?$/)
//       .use("file-loader")
//       .loader("file-loader")
//       .options({
//         name: "assets/pdf/[name].[hash:8].[ext]",
//       });
//   },
// };
