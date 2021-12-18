module.exports = {
  siteMetadata: {
    siteUrl: "https://onemoreempanada.com",
    title: "One More Empanada",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        siteUrl: `https://onemoreempanada.com/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: ".",
          nsSeparator: false
        },
        pages: []
      }
    }
  ],
};
