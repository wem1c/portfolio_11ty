// Define the custom element class
class SplitFlapDisplay extends HTMLElement {
  connectedCallback() {
    // https://caniuse.com/mdn-api_cssstylesheet_replacesync
    if (this.shadowRoot || !("replaceSync" in CSSStyleSheet.prototype)) {
      return;
    }

    // Get the data-words attribute value
    this.words = this.getAttribute("data-words") || "";
    this.wordArray = this.words.split(",").map((word) => word.trim());

    this.maxWordLen = this.wordArray.reduce(
      (max, word) => Math.max(max, word.length),
      0
    );

    let sheet = new CSSStyleSheet();
    const css = `
    :host {
      display: inline-block;
      color: var(--split-flap-display-color, currentColor);
      width: ${this.maxWordLen}ch;
      font-family: monospace;
    }
    `;
    sheet.replaceSync(css);

    let shadowroot = this.attachShadow({ mode: "open" });
    shadowroot.adoptedStyleSheets = [sheet];

    // Initialize the index and display the first word
    this.currentIndex = 0;
    this.displayWord(this.currentIndex);

    // Set the interval to change the word
    this.interval = setInterval(() => this.changeWord(), 1850);
  }

  // Function to update the displayed word
  displayWord(index) {
    this.shadowRoot.textContent = `${this.wordArray[index]}.`;
  }

  // Function to change the displayed word
  changeWord() {
    this.currentIndex = (this.currentIndex + 1) % this.wordArray.length;
    this.displayWord(this.currentIndex);
  }

  // Disconnect the interval when the element is removed
  disconnectedCallback() {
    clearInterval(this.interval);
  }
}

// Define the custom element
customElements.define("split-flap-display", SplitFlapDisplay);
