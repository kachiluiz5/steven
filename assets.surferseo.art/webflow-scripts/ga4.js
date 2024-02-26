// GTM - dataLayer

// Get the value of [ga-pageType] from the HTML element
let gaPageType = document
  .querySelector("[ga-pageType]")
  ?.getAttribute("ga-pageType");

// Set page_type to the value of gaPageType or "Other"
let pageType = gaPageType ? gaPageType : "Other";

// user_status and user_id
function getCookie(cookieName) {
  const match = document.cookie.match(
    new RegExp("(^| )" + cookieName + "=([^;]+)")
  );

  if (match) {
    return match[2];
  }

  return "unknown";
}

// run script
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  page_type: pageType,
  user_status: getCookie("surfer_user_status"),
  user_id: getCookie("surfer_user"),
  // Start Profitwell
  event: "start_pw",
});

// GTM - dataLayer -- END

//  🏷️ Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-WG5H5KP");
// 🏷️ Google Tag Manager

// GTM - Buttons

// This script tracks click events on buttons with a [ga-button] attribute
// and sends the event data to Google Tag Manager (GTM).
// It captures the event name from [ga-button],
// and optionally, the button's label [ga-button-label] and URL, if available.

window.dataLayer = window.dataLayer || [];
document.querySelectorAll("[ga-button]").forEach(function (element) {
  element.addEventListener("click", function () {
    let eventName = element.getAttribute("ga-button");
    let buttonLabel = element.querySelector("[ga-button-label]") ? element.querySelector("[ga-button-label]").textContent : "Undefined";
    let buttonUrl = element.getAttribute("href") || "Undefined";

    dataLayer.push({
      event: "click_button",
      button_name: eventName,
      button_text: buttonLabel,
      button_url: buttonUrl,
    });
  });
});

// GTM - Buttons -- END

// GTM - FAQ

const faqElements = document.querySelectorAll("[ga-faq]");

faqElements.forEach((element) => {
  element.addEventListener("click", () => {
    const titleElement = element.querySelector("[ga-faq-title");
    if (titleElement) {
      const clickText = titleElement.textContent.trim();
      dataLayer.push({
        event: "click_faq",
        click_text: clickText,
      });
    }
  });
});

// GTM - FAQ -- END

// GTM - Forms

// Get all the form elements
const forms = document.querySelectorAll("form");

// Listen for the submission of each form
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    // Get the value of the data-name attribute
    const dataName = form.getAttribute("data-name");

    // Replace the form_name value in the dataLayer object
    dataLayer.push({
      event: "form_submitted",
      form_name: dataName,
    });
  });
});

// GTM - Forms -- END
