module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    // Check if itemUrl is not empty and pageUrl starts with itemUrl
    if (itemUrl && pageUrl.startsWith(itemUrl)) {
      // Check if pageUrl exactly matches itemUrl
      if (pageUrl === itemUrl) {
        response = ' data-state="active"';
      } else {
        response = ' aria-current="page"';
      }
    }

    return response;
  },
};
