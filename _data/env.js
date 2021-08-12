// https://css-tricks.com/give-your-eleventy-site-superpowers-with-environment-variables/
require('dotenv').config();

module.exports = {
  base: process.env.BASE || 'https://d1cxmu1ofnef1v.cloudfront.net/',
};