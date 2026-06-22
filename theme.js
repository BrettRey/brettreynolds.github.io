(function () {
  const storageKey = "brett-theme";
  const root = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function readStoredTheme() {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored === "dark" || stored === "light" ? stored : null;
    } catch {
      return null;
    }
  }

  function writeStoredTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // The visible toggle should still work for the current page.
    }
  }

  function resolvedTheme() {
    const explicit = root.dataset.theme;
    if (explicit === "dark" || explicit === "light") {
      return explicit;
    }
    return darkQuery.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      root.dataset.theme = theme;
    } else {
      delete root.dataset.theme;
    }
  }

  function updateButton(button) {
    const current = resolvedTheme();
    const next = current === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", `Switch to ${next} mode`);
    button.setAttribute("aria-pressed", current === "dark" ? "true" : "false");
    button.title = `Switch to ${next} mode`;
    button.querySelector(".theme-toggle-icon").textContent = current === "dark" ? "\u2600" : "\u263e";
    button.querySelector(".theme-toggle-label").textContent = next === "dark" ? "Dark" : "Light";
  }

  applyTheme(readStoredTheme());

  window.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-label"></span>';
    document.body.appendChild(button);
    updateButton(button);

    button.addEventListener("click", () => {
      const next = resolvedTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      writeStoredTheme(next);
      updateButton(button);
    });

    const onPreferenceChange = () => {
      if (!readStoredTheme()) {
        updateButton(button);
      }
    };

    if (typeof darkQuery.addEventListener === "function") {
      darkQuery.addEventListener("change", onPreferenceChange);
    } else if (typeof darkQuery.addListener === "function") {
      darkQuery.addListener(onPreferenceChange);
    }
  });
})();
