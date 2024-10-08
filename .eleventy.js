// Initialize dotenv for .env file support
require("dotenv").config();

const CleanCSS = require("clean-css");
const fastGlob = require("fast-glob");
const fs = require("fs");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const nunjucks = require("nunjucks");

module.exports = function (eleventyConfig) {
  /**
   * PLUGINS
   */
  eleventyConfig.addPlugin(pluginRss);

  /**
   * FILTERS
   */
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Renders a string through a Nunjucks environment
  eleventyConfig.addFilter("renderString", function (content, context) {
    return new nunjucks.Environment().renderString(content, context);
  });

  eleventyConfig.addFilter("swap_locale", (url) => {
    if (url.match(/\/en\//g)) {
      return url.replace("/en/", "/cnr/");
    }

    return url.replace("/cnr/", "/en/");
  });

  /**
   * SHORTCODES
   */

  /* Global */
  eleventyConfig.addShortcode(
    "image",
    async function (
      src,
      alt,
      widths,
      sizes = "100vw",
      loading = "lazy",
      decoding = "async",
    ) {
      let metadata = await Image(src, {
        widths: widths,
        formats: ["avif", "webp", "auto"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading,
        decoding,
      };

      return Image.generateHTML(metadata, imageAttributes);
    },
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

  eleventyConfig.addPassthroughCopy("./src/assets/images/favicons/**/*");

  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: { input: "src" },
  };
};
