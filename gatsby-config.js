require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const wpGraphqlUrl =
  process.env.GATSBY_WPGRAPHQL_URL ||
  "https://drmanoj.studiosentientdemo.com/graphql";

module.exports = {
  siteMetadata: {
    title: "Dr Manojkumar Gaddikeri",
    description: "Orthopaedic Spine Specialist",
    author: "@Dr Manojkumar Gaddikeri",
    siteUrl:
      process.env.GATSBY_WEBSITE_URL ||
      "https://drmanoj.studiosentientdemo.com/",
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: wpGraphqlUrl,
        schema: {
          timeout: 30000,
        },
        auth: {
          htaccess: {
            username: process.env.GATSBY_USERNAME || "DrManoj",
            password: process.env.GATSBY_PASSWORD || "DrManoj@123",
          },
        },
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "ACF",
        fieldName: "acf",
        url: wpGraphqlUrl,
      },
    },
  ],
};