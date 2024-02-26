// Check if there are elements on the page
const pricingSwitchers = document.querySelectorAll("[data-pricing-switcher]");
const aiCheckbox = Array.from(pricingSwitchers).find(
  (checkbox) => checkbox.getAttribute("data-pricing-switcher") === "ai"
);
const myCheckbox = Array.from(pricingSwitchers).find(
  (checkbox) => checkbox.getAttribute("data-pricing-switcher") === "my"
);

// If neither AI nor MY checkboxes were found, stop script execution
if (!aiCheckbox && !myCheckbox) {
} else {
  // Listen for changes in checkbox states only if they exist
  const checkboxes = document.querySelectorAll("[data-pricing-switcher]");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const attributeName = checkbox.getAttribute("data-pricing-switcher");

      // If the attribute doesn't exist, exit the function
      if (!attributeName) {
        return;
      }

      // Get the state of the clicked checkbox
      const isChecked = checkbox.checked;

      // Check or uncheck all other checkboxes with the same attribute
      checkboxes.forEach((innerCheckbox) => {
        if (
          innerCheckbox.getAttribute("data-pricing-switcher") === attributeName
        ) {
          innerCheckbox.checked = isChecked;
        }
      });

      // Update displayed elements with animation
      updateElementsWithAnimation();
    });
  });

  // Function to update displayed elements with animation
  function updateElementsWithAnimation() {
    const aiChecked = aiCheckbox ? (aiCheckbox.checked ? "checked" : "unchecked") : "unchecked";
    const myChecked = myCheckbox ? (myCheckbox.checked ? "checked" : "unchecked") : "unchecked";

    // Update text based on AI toggle
    const savingText = aiChecked === "checked" ? "$960" : "$600";
    const savingElements = document.querySelectorAll("[pricing-cards-saving]");
    savingElements.forEach((element) => {
      element.textContent = savingText;
    });

    // Animate [pricing-cards-deco] elements
    const decoElements = document.querySelectorAll("[pricing-cards-deco]");
    decoElements.forEach((element) => {
      element.style.transition = "opacity 0.3s"; // Add a transition to opacity
      if (aiChecked === "checked") {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
      }
    });

    // Update visibility of elements based on checkbox states
    const elementsToDisplay = document.querySelectorAll("[data-ai], [data-my]");
    elementsToDisplay.forEach((element) => {
      const aiData = element.getAttribute("data-ai");
      const myData = element.getAttribute("data-my");
      let showElement = true;

      if (aiData !== null) {
        showElement = showElement && aiData === aiChecked;
      }

      if (myData !== null) {
        showElement = showElement && myData === myChecked;
      }

      if (showElement) {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });
  }

  // Dodaj funkcję obsługującą przewijanie
function scrollToCompareSection() {
  const compareSection = document.getElementById('compare');
  if (compareSection) {
    const offsetTop = compareSection.getBoundingClientRect().top + window.pageYOffset;
    const offset = window.innerHeight * 0.1; // 10 vh
    window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
  }
}

// Dodaj nasłuchiwanie na przyciski "Wszystkie funkcje"
const allFeaturesButtons = document.querySelectorAll('[pricing-all-features=button]');
allFeaturesButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Zapobiegaj domyślnej akcji linka
    scrollToCompareSection();
  });
});

  // Initialize the function on page load
  updateElementsWithAnimation();
}
