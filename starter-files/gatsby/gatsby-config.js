import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Slicks Slices',
    siteUrl: 'http://gatsby.pizza',
    description: 'The best pizza place in Hamilton',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '7u7binmh',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
