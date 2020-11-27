module.exports = {
  siteMetadata: {
    title: `MARCOS•RGDU`,
    titleTemplate: "%s · MARCOS•RGD",
    description: `PORTFOLIO. Junior front-end developer.`,
    author: `@marcosrgd`,
    url: "https://www.ideceb.com.br",
    menuLinks: [
      {
        name: "HOME",
        link: "/",
      },
      {
        name: "ABOUT",
        link: "/about",
      },
      {
        name: "WORK",
        link: "/work",
      },
      {
        name: "BLOG",
        link: "/blog",
      },
      {
        name: "CONTACT",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: `projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
