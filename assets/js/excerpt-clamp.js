/* ==========================================================================
   Excerpt clamp: collapse long excerpts on archive listings (News /
   Publications / Talks) to 5 lines with a "Show more / Show less" toggle.
   The toggle is appended only when the content actually overflows.
   ========================================================================== */
(function () {
  var MAX_LINES = 5;
  var SELECTOR = ".archive__item-excerpt";
  var LABEL_MORE = "Show more";
  var LABEL_LESS = "Show less";

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function isOverflowing(el) {
    return el.scrollHeight > el.clientHeight + 1;
  }

  function makeToggle(el) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "archive__item-excerpt-toggle";
    btn.textContent = LABEL_MORE;
    btn.setAttribute("aria-expanded", "false");

    btn.addEventListener("click", function () {
      var expanded = el.classList.toggle("is-expanded");
      if (expanded) {
        el.classList.remove("is-clamped");
        btn.textContent = LABEL_LESS;
        btn.setAttribute("aria-expanded", "true");
      } else {
        el.classList.add("is-clamped");
        btn.textContent = LABEL_MORE;
        btn.setAttribute("aria-expanded", "false");
        // Smoothly bring the item back into view when collapsing.
        var top = el.getBoundingClientRect().top;
        if (top < 0) {
          window.scrollBy({ top: top - 16, behavior: "smooth" });
        }
      }
    });

    return btn;
  }

  function processExcerpt(el) {
    if (el.dataset.clampInitialized === "true") return;
    el.dataset.clampInitialized = "true";

    el.classList.add("is-clamped");

    // Defer measurement until after styles/layout are applied.
    requestAnimationFrame(function () {
      if (!isOverflowing(el)) {
        el.classList.remove("is-clamped");
        return;
      }
      var btn = makeToggle(el);
      el.parentNode.insertBefore(btn, el.nextSibling);
    });
  }

  ready(function () {
    var nodes = document.querySelectorAll(SELECTOR);
    if (!nodes.length) return;
    Array.prototype.forEach.call(nodes, processExcerpt);
  });
})();
