module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `iiys36p7li3y`,
        accessToken: `80d8af430cb13518f430857c2b41dbedfdfed70f52d437481003b2e27099a304`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet'
  ],
};
