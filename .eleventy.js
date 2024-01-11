const CleanCSS = require("clean-css");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const fastGlob = require("fast-glob");
const fs = require("fs");
const nunjucks = require("nunjucks"); // Add this line

module.exports = function (eleventyConfig) {
  /**
   * PLUGINS
   */
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
  });

  /**
   * COLLECTIONS
   */
  eleventyConfig.addCollection("posts_en", function (collection) {
    return collection.getFilteredByGlob("./src/en/posts/*.md");
  });

  eleventyConfig.addCollection("posts_cnr", function (collection) {
    return collection.getFilteredByGlob("./src/cnr/posts/*.md");
  });

  /**
   * FILTERS
   */
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  /**
   * SHORTCODES
   */
  eleventyConfig.addNunjucksShortcode("includeAll", function (globPattern) {
    const files = fastGlob.sync(globPattern);
    let result = "";

    for (const file of files) {
      result += `{% include "${file}" %}\n`;
    }

    return result;
  });

  /**
   * PASSTHROUGH COPIES
   */
  //eleventyConfig.addPassthroughCopy("./src/fonts");
  //eleventyConfig.addPassthroughCopy("./src/images");

  return {
    dir: { input: "src" },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
