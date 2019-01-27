module.exports = {
  siteMetadata: {
    title: `Day Tracker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Day Tracker',
        short_name: 'Tracker',
        start_url: '/',
        background_color: '#9dc7c8',
        theme_color: '#9dc7c8',
        display: 'standalone',
        icon: 'src/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
