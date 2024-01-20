const CleanCSS = require("clean-css");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const fastGlob = require("fast-glob");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  /**
   * PLUGINS
   */
  // TODO: this plugin may be redundant; It's not used in this project.
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

  /* Global */
  eleventyConfig.addShortcode(
    "image",
    async function (src, alt, widths, sizes) {
      let metadata = await Image(src, {
        widths: widths,
        formats: ["avif", "webp", "auto"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(metadata, imageAttributes);
    }
  );

  /* Nunjucks */
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

  // eleventyConfig.addPassthroughCopy(
  //   "./src/assets/images/**/*.{png,jpg,jpeg,gif,svg,webp}"
  // );

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: { input: "src" },
  };
};
