module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-meetup`,
      options: {
        groupUrlName: `Syracuse-Software-Development-Meetup`,
        status: `upcoming,past`,
        desc: `false`,
        page: 10,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticData`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
}
