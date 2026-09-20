/* Zachary Brown — site behaviour.
   Deliberately small: no framework, no dependencies, no tracking. */

(function () {
  "use strict";

  /* Current year in the footer. */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Sticky top bar fades in once the hero has scrolled past. */
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

  /* Gentle reveal on scroll. Skipped entirely when the visitor
     has asked for reduced motion, and when IO is unavailable. */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduced && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(
      ".item, .card, .closer, .logos, .brings, .needs--large"
    );

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    targets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
})();
