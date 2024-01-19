const CleanCSS = require("clean-css");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const fastGlob = require("fast-glob");
const fs = require("fs");

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
      result += fs.readFileSync(file, "utf8");
    }

    return result;
  });

  /**
   * PASSTHROUGH COPIES
   */
  eleventyConfig.addPassthroughCopy("./src/assets/css/reset.css");
  eleventyConfig.addPassthroughCopy("./src/assets/css/global.css");

  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land.js": "/assets/js/is-land.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@11ty/is-land/is-land-autoinit.js":
      "/assets/js/is-land-autoinit.js",
  });
  eleventyConfig.addPassthroughCopy("./src/assets/js/**/*.js");

  eleventyConfig.addPassthroughCopy(
    "./src/assets/images/**/*.{png,jpg,jpeg,gif,svg,webp}"
  );

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: { input: "src" },
  };
};
