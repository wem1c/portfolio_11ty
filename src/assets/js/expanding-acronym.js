class ExpandingAcronym extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Attach the shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create a container element
    const container = document.createElement("span");

    // Add a default class to it
    container.classList.add("container");

    // Append the container element the shadow DOM
    shadow.appendChild(container);

    // Create a style element
    const style = document.createElement("style");

    // Set the CSS rules
    style.textContent = `
    .container {
      cursor: pointer;
      user-select: none;
      line-height: 1.1;
      animation: pulse 3s infinite;
    }

    .container[data-expanded] {
      animation: none;
    }

    .letter {
      white-space: nowrap;
    }

    .line-wrap {
      line-break: anywhere;
    }

		.container[data-expanded] .letter::after {
      max-width: 100%;
		}

    @keyframes pulse {
      0% {
        letter-spacing: normal;
      }
      25% {
        letter-spacing: 0.1em;
      }
      50% {
        letter-spacing: normal;
      }
      100% {
        letter-spacing: normal;
      }
    }
    `;

    // Check the dots bool data att. to see if we should add dots
    const acronymDots = this.getAttribute("data-dots");

    if (acronymDots === "true") {
      style.innerText += `
		.letter::after {
			content: attr(data-rest) "\\00a0";
      display: inline-block;
      max-width: 0px;
      transition: max-width 2s linear;
      overflow: clip;
		}
	  `;
    }

    // Get the acronym words from the data att. and turn it into an array
    const acronymWords = this.getAttribute("data-words").split(" ");

    // Iterate over each word
    acronymWords.forEach((word) => {
      const firstLetter = word.charAt(0);
      const restOfWord =
        acronymDots == "true" ? word.slice(1) + "." : word.slice(1);

      // Create a span for the rest of the word
      let wordSpan = document.createElement("span");

      // Add classes to it
      wordSpan.classList.add("letter");

      // Set the inner text to the first letter
      wordSpan.innerText = firstLetter;

      // Save the rest of the word in a data attribute
      wordSpan.setAttribute("data-rest", restOfWord);

      // Append the word span to the container
      container.appendChild(wordSpan);
    });

    // Append the style element to the shadow dom
    shadow.appendChild(style);

    // Add event listener for hover
    container.addEventListener("click", () => {
      // Add the hover class to the container
      container.toggleAttribute("data-expanded");

      // If line wrapping is already enabled, toggle it after the transition finishes
      if (container.classList.contains("line-wrap")) {
        setTimeout(() => {
          container.classList.toggle("line-wrap");
        }, 1800);
        // Else toggle it almost immediately
      } else {
        setTimeout(() => {
          container.classList.toggle("line-wrap");
        }, 200);
      }
    });
  }

  disconnectedCallback() {
    // Remove the event listener
    container.removeEventListener("click");
  }
}

// Define the new element
customElements.define("expanding-acronym", ExpandingAcronym);
