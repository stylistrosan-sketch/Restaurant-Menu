(function () {
  "use strict";

  // Optional: handle missing logo gracefully
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("error", function () {
      this.style.display = "none";
    });
  }

  // Optional: subtle interaction on menu items
  const items = document.querySelectorAll(".menu-item");
  items.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      this.style.background = "rgba(201, 162, 39, 0.06)";
    });
    item.addEventListener("mouseleave", function () {
      this.style.background = "";
    });
  });
})();
