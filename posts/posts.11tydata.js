// Enable `hidden: true` to hide posts (https://github.com/11ty/eleventy/discussions/1950#discussioncomment-1233364)
module.exports = {
  eleventyComputed: {
    eleventyExcludeFromCollections: data => (data.eleventyExcludeFromCollections || data.hidden)
  }
};