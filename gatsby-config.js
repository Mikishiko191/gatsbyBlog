require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'https://www.blog.revain.org'
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.blog.revain.org',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-N8VWH6D",
        includeInDevelopment: false,
        gtmAuth: "bmB6FKr8Yp8p-54rbEZc6w",
        gtmPreview: "env-2",
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
