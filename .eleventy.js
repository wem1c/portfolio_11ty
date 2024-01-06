const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });

  eleventyConfig.addCollection("posts_en", function (collection) {
    return collection.getFilteredByGlob("./_site/en/posts/*.md");
  });

  eleventyConfig.addCollection("posts_cnr", function (collection) {
    return collection.getFilteredByGlob("./_site/cnr/posts/*.md");
  });

  return {
    dir: { input: "src" },
  };
};
