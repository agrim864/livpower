(function () {
  "use strict";

  function isMobile() {
    return window.matchMedia("(max-width: 991px)").matches;
  }

  function getMenu() {
    return document.getElementById("menu-menu-1");
  }

  function enforceMenuStyle() {
    if (!isMobile()) {
      return;
    }

    var menu = getMenu();
    if (!menu) {
      return;
    }

    var width = Math.min(Math.round(window.innerWidth * 0.74), 240);
    menu.style.position = "fixed";
    menu.style.top = "70px";
    menu.style.right = "10px";
    menu.style.left = "auto";
    menu.style.bottom = "auto";
    menu.style.width = width + "px";
    menu.style.maxWidth = "240px";
    menu.style.height = "auto";
    menu.style.maxHeight = "none";
    menu.style.overflowY = "hidden";
    menu.style.background = "#0f2f20";
    menu.style.borderRadius = "12px";
    menu.style.zIndex = "2147483000";

    if (menu.classList.contains("active-filter")) {
      menu.style.display = "block";
    }
  }

  function enforceMenuLinkColor() {
    if (!isMobile()) {
      return;
    }

    var menu = getMenu();
    if (!menu) {
      return;
    }

    var links = menu.querySelectorAll("a");
    links.forEach(function (link) {
      link.style.color = "#ffffff";
      link.style.background = "rgba(255, 255, 255, 0.06)";
      link.style.borderRadius = "8px";
    });
  }

  function enforceTestimonialArrows() {
    if (!isMobile()) {
      return;
    }

    var root = document.querySelector(".our-clients .clients-slide");
    if (root) {
      root.style.position = "relative";
      root.style.paddingBottom = "50px";
    }

    var prev = document.querySelector(".our-clients .slick-prev");
    var next = document.querySelector(".our-clients .slick-next");

    if (prev) {
      prev.style.display = "flex";
      prev.style.left = "calc(50% - 42px)";
      prev.style.right = "auto";
      prev.style.bottom = "0";
      prev.style.top = "auto";
      prev.style.color = "#ffffff";
      prev.style.background = "#16a34a";
      prev.style.border = "1px solid #16a34a";
    }

    if (next) {
      next.style.display = "flex";
      next.style.left = "calc(50% + 8px)";
      next.style.right = "auto";
      next.style.bottom = "0";
      next.style.top = "auto";
      next.style.color = "#ffffff";
      next.style.background = "#16a34a";
      next.style.border = "1px solid #16a34a";
    }

    var icons = document.querySelectorAll(".our-clients .slick-prev i, .our-clients .slick-next i");
    icons.forEach(function (icon) {
      icon.style.display = "block";
      icon.style.color = "#ffffff";
    });
  }

  function applyAll() {
    enforceMenuStyle();
    enforceMenuLinkColor();
    enforceTestimonialArrows();
  }

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest(".mobile-togle");
    var closeBtn = event.target.closest(".close-menu");
    if (!toggle && !closeBtn) {
      return;
    }

    setTimeout(applyAll, 0);
  }, true);

  window.addEventListener("resize", applyAll);

  document.addEventListener("DOMContentLoaded", function () {
    applyAll();

    [200, 600, 1200, 2000].forEach(function (delay) {
      setTimeout(applyAll, delay);
    });

    var menu = getMenu();
    if (menu && typeof MutationObserver !== "undefined") {
      var observer = new MutationObserver(function () {
        applyAll();
      });
      observer.observe(menu, { attributes: true, attributeFilter: ["class", "style"] });
    }
  });
})();