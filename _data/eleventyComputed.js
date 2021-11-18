// Enable `hidden: true` to hide posts (https://github.com/11ty/eleventy/discussions/1950)
module.exports = {
	eleventyExcludeFromCollections: data => (data.eleventyExcludeFromCollections || data.hidden || data.draft),
};