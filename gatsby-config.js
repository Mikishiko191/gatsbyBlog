require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'iiys36p7li3y',
        accessToken: '80d8af430cb13518f430857c2b41dbedfdfed70f52d437481003b2e27099a304',
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-N8VWH6D",
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet'
  ],
};
