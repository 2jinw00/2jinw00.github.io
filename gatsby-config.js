
module.exports = {
  siteMetadata: {
    title: `My Gatsby Landing Page`,
    description: `A Gatsby landing page similar to kontent-template-gatsby-landing-page-photon`,
    author: `@yourname`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
