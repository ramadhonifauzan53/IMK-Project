document.addEventListener("DOMContentLoaded", function () {
  // Create transition overlay
  const transitionOverlay = document.createElement("div");
  transitionOverlay.className = "page-transition";
  transitionOverlay.innerHTML = `
        <div class="pixel-grid"></div>
        <div class="scanline"></div>
        <div class="neon-ring"></div>
        <div class="glitch-text" data-text="Loading...">Loading...</div>
        <div class="loading-bar">
            <div class="loading-progress"></div>
        </div>
        <div class="game-loading-text">INITIALIZING GAME ASSETS...</div>
        <div class="loading-dots">
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    `;
  document.body.appendChild(transitionOverlay);

  let theme = localStorage.getItem("theme");
  if (!theme) {
    const legacy = localStorage.getItem("isDarkTheme");
    theme = legacy === "false" ? "light" : "dark";
    localStorage.setItem("theme", theme);
  }

  function applyTheme() {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    document.body.classList.toggle("dark-theme", !isLight);
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.innerHTML = isLight
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    }
  }

  function setTheme(nextTheme) {
    theme = nextTheme === "light" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    applyTheme();
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function bindThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    if (themeToggle.dataset.gbThemeBound === "1") return;
    themeToggle.dataset.gbThemeBound = "1";
    themeToggle.addEventListener("click", function (e) {
      e.preventDefault();
      toggleTheme();
    });
  }

  window.GameBoxTheme = {
    applyTheme,
    setTheme,
    toggleTheme,
    getTheme: function () {
      return theme;
    },
  };

  applyTheme();
  bindThemeToggle();

  function getPageLabel() {
    const path = (
      window.location.pathname.split("/").pop() || ""
    ).toLowerCase();
    if (path === "" || path === "index.html") return "HOME";
    if (path === "games.html") return "GAMES";
    if (path === "cart.html") return "CART";
    if (path === "wishlist.html") return "WISHLIST";
    return (document.title || "GAMEBOX").toUpperCase();
  }

  function setOverlayText(mode) {
    const glitch = transitionOverlay.querySelector(".glitch-text");
    const sub = transitionOverlay.querySelector(".game-loading-text");
    const label = getPageLabel();

    if (glitch) {
      const mainText = mode === "enter" ? `ENTERING: ${label}` : "LOADING...";
      glitch.textContent = mainText;
      glitch.setAttribute("data-text", mainText);
    }

    if (sub) {
      sub.textContent =
        mode === "enter"
          ? "SYNCING PLAYER PROFILE..."
          : "INITIALIZING GAME ASSETS...";
    }
  }

  // Function to show transition
  function showTransition() {
    setOverlayText("load");
    transitionOverlay.classList.add("active");
    const progressBar = document.querySelector(".loading-progress");

    // Animate progress bar
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress > 100) progress = 100;
      progressBar.style.width = `${progress}%`;

      if (progress === 100) {
        clearInterval(interval);
        // Hide transition after a short delay
        setTimeout(() => {
          transitionOverlay.classList.remove("active");
        }, 300);
      }
    }, 100);
  }

  // Add click event to all links
  document.querySelectorAll("a").forEach((link) => {
    // Skip if it's an anchor link or external link
    if (
      link.href.includes("#") ||
      (link.origin && link.origin !== window.location.origin) ||
      link.href.startsWith("mailto:") ||
      link.href.startsWith("tel:")
    ) {
      return;
    }

    link.addEventListener("click", function (e) {
      // Don't prevent default for links that should open in new tab
      if (e.ctrlKey || e.metaKey || e.shiftKey || link.target === "_blank") {
        return;
      }

      e.preventDefault();
      const href = this.getAttribute("href");

      // Show transition
      showTransition();

      // Navigate after a short delay to allow the animation to start
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  // Show transition on page load
  window.addEventListener("load", function () {
    setOverlayText("enter");
    transitionOverlay.classList.add("active");
    const progressBar = transitionOverlay.querySelector(".loading-progress");
    if (progressBar) progressBar.style.width = "100%";

    setTimeout(() => {
      transitionOverlay.classList.remove("active");
      if (progressBar) progressBar.style.width = "0%";
    }, 650);
  });

  // Handle browser back/forward buttons
  window.addEventListener("pageshow", function (event) {
    // If the page is loaded from the bfcache, hide the transition
    if (event.persisted) {
      transitionOverlay.classList.remove("active");
    }
  });
});
