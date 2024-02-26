/**
 * Custom GSAP Animation Framework 🚀
 * Enables smooth animations for web elements using GSAP & ScrollTrigger.
 * 
 * Usage Instructions:
 * - Add `animation-[type]` to HTML elements to define the type of animation.
 * - Optional attributes:
 *   - `animation-stagger` for stagger between element animations.
 *   - `animation-duration` for animation duration time.
 *   - `animation-delay` for animation start delay.
 *   - `animation-random` for random animation order of elements.
 *   - `animation-word-by-word` for word-by-word animation (text only).
 *   - `animation-debug` (previously `animation-wrap=debug`) to enable debugging markers.
 *   - `animation-wrap="[min-width]"` to specify the minimum window width for animations to be active. 
 *     Example: `animation-wrap="320"` activates animations only if window width > 320px.
 *
 * Animation Types:
 * - `animation-slide-up`: Slides element up.
 * - `animation-slide-down`: Slides element down.
 * - `animation-slide-left`: Slides element left.
 * - `animation-slide-right`: Slides element right.
 * - `animation-fade-in`: Fades element in.
 * - `animation-scale-in`: Scales element in from larger size.
 * - `animation-word-by-word`: Animates text word by word (requires separate handling).
 *
 * Example:
 * <div animation-wrap="991" animation-stagger="0.1">
 *   <div animation-slide-up></div>
 * </div>
 */

const SurferEase = CustomEase.create("custom", "M0,0 C0.25,0.46 0.45,0.94 1,1");

const animationConfig = {
  slideUp: { selector: "[animation-slide-up]", options: { opacity: 0, y: "50%", ease: SurferEase } },
  slideDown: { selector: "[animation-slide-down]", options: { opacity: 0, y: "-50%", ease: SurferEase } },
  slideLeft: { selector: "[animation-slide-left]", options: { opacity: 0, x: "25%", ease: SurferEase } },
  slideRight: { selector: "[animation-slide-right]", options: { opacity: 0, x: "-25%", ease: SurferEase } },
  fadeIn: { selector: "[animation-fade-in]", options: { opacity: 0, ease: SurferEase } },
  scaleIn: { selector: "[animation-scale-in]", options: { opacity: 0, scale: 1.5, ease: SurferEase } },
  defaultOptions: { duration: 1, delay: 0 },
};

function animateElements() {
  const animationWraps = document.querySelectorAll("[animation-wrap]");

  animationWraps.forEach((wrap) => {
    const minWidthAttr = wrap.getAttribute("animation-wrap");
    let minWidth = 991; // Default to desktop view
    if (minWidthAttr !== null && minWidthAttr !== "") {
      minWidth = parseInt(minWidthAttr, 10);
    }
    const shouldAnimate = window.innerWidth > minWidth;
    const isDebug = wrap.hasAttribute("animation-debug");

    if (shouldAnimate) {
      Object.values(animationConfig).forEach(({selector, options}) => {
        const elements = wrap.querySelectorAll(selector);
        if (elements.length) {
          animateGroup(elements, wrap, options, isDebug);
        }
      });
    }
  });
}

function animateGroup(elements, wrap, options, isDebug) {
  const timeline = gsap.timeline({ paused: true, defaults: { ...animationConfig.defaultOptions, ...options } });
  const stagger = parseFloat(wrap.getAttribute("animation-stagger") || 0.1);
  let elementsToAnimate = [...elements];

  if (wrap.hasAttribute("animation-random")) {
    elementsToAnimate = shuffleArray(elementsToAnimate);
  }

  timeline.from(elementsToAnimate, { stagger });
  createScrollTrigger(wrap, timeline, isDebug);
}

function createScrollTrigger(triggerElement, timeline, isDebug) {
  const hasScrub = triggerElement.hasAttribute("animation-scrub");
  const animationStart = triggerElement.getAttribute("animation-start") || "0% 75%";
  const animationEnd = triggerElement.getAttribute("animation-end") || "400 75%";
  
  ScrollTrigger.create({
    animation: timeline,
    trigger: triggerElement,
    start: animationStart,
    end: animationEnd,
    scrub: hasScrub,
    markers: isDebug,
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function animateWords() {
  const elements = document.querySelectorAll("[animation-word-by-word]");

  elements.forEach(element => {
    const wrap = element.closest("[animation-wrap]");
    const minWidthAttr = wrap.getAttribute("animation-wrap");
    let minWidth = 991; // Default to desktop view
    if (minWidthAttr !== null && minWidthAttr !== "") {
      minWidth = parseInt(minWidthAttr, 10);
    }
    const shouldAnimate = window.innerWidth > minWidth;
    const isDebug = wrap.hasAttribute("animation-debug");

    // Pobieranie wartości dla startu i końca animacji z atrybutów elementu wrap
    const animationStart = wrap.getAttribute("animation-start") || "top 90%";
    const animationEnd = wrap.getAttribute("animation-end") || "bottom 80%";

    if (shouldAnimate) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: animationStart,
          end: animationEnd,
          scrub: true,
          markers: isDebug,
        },
      });

      const split = new SplitType(element, { types: 'words' });
      timeline.from(split.words, { opacity: 0.05, stagger: 0.1 });
    }
  });
}



window.addEventListener("DOMContentLoaded", () => {
  animateWords();
  animateElements();
});
