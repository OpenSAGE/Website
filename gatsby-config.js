module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 600
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "blog-posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/images/screenshots`,
        name: "screenshots"
      }
    }
  ]
}
