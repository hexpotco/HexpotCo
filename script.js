(function () {
  const toggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;

  let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  root.setAttribute("data-theme", currentTheme);
  updateToggle(currentTheme);

  if (toggle) {
    toggle.addEventListener("click", function () {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", currentTheme);
      updateToggle(currentTheme);
    });
  }

  function updateToggle(theme) {
    if (!toggle) return;
    const moon = toggle.querySelector(".theme-icon-moon");
    const sun = toggle.querySelector(".theme-icon-sun");

    if (theme === "dark") {
      if (moon) moon.style.display = "none";
      if (sun) sun.style.display = "inline";
      toggle.setAttribute("aria-label", "Switch to light theme");
    } else {
      if (moon) moon.style.display = "inline";
      if (sun) sun.style.display = "none";
      toggle.setAttribute("aria-label", "Switch to dark theme");
    }
  }
})();
