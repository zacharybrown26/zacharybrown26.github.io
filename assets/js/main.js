/* Zachary Brown — site behaviour.

   Deliberately tiny: no framework, no dependencies, no tracking.

   Note that nothing here controls whether content is visible. The
   scroll reveal lives entirely in CSS, on a view timeline, so that a
   missed callback or a context that never fires scroll events cannot
   leave part of the page blank. If this file fails to load, the site
   loses a live copyright year and a fading header, and nothing else. */

(function () {
  "use strict";

  /* Current year in the footer. */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Sticky top bar fades in once the hero has scrolled past. Purely
     decorative: the bar is a convenience, not the only way to navigate,
     and every section is reachable by scrolling. */
  var topbar = document.getElementById("topbar");
  var hero = document.getElementById("top");

  if (topbar && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        topbar.classList.toggle("is-visible", !entries[0].isIntersecting);
      },
      { rootMargin: "-120px 0px 0px 0px" }
    ).observe(hero);
  }
})();
