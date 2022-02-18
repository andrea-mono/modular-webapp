module.exports = {
  siteMetadata: {
      title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "\u0016",
      "spaceId": "\u0016"
    }
  }]
};