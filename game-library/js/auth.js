// Auth Module
const Auth = (function () {
  // Private variables
  let currentUser = null;
  let initialized = false;
  const USER_KEY = "gamebox_user";
  const USERS_KEY = "gamebox_users";

  function readStoredJson(key, defaultValue) {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    try {
      return JSON.parse(raw);
    } catch (e) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  }

  // Initialize auth module
  function init() {
    if (initialized) return;
    initialized = true;

    // Load current user from localStorage if exists
    const userData = localStorage.getItem(USER_KEY);
    if (userData) {
      try {
        currentUser = JSON.parse(userData);
      } catch (e) {
        console.error("Error parsing user data:", e);
        localStorage.removeItem(USER_KEY);
        currentUser = null;
      }
    }

    // Initialize users array if not exists
    if (!localStorage.getItem(USERS_KEY)) {
      localStorage.setItem(USERS_KEY, JSON.stringify([]));
    } else {
      const parsedUsers = readStoredJson(USERS_KEY, []);
      if (!Array.isArray(parsedUsers)) {
        localStorage.setItem(USERS_KEY, JSON.stringify([]));
      }
    }

    const initDom = function () {
      setupEventListeners();

      // Update UI based on auth state
      updateAuthUI();

      // Close modal when clicking outside
      window.addEventListener("click", function (event) {
        const loginModal = document.getElementById("loginModal");
        const signupModal = document.getElementById("signupModal");

        if (event.target === loginModal) {
          loginModal.style.display = "none";
          document.body.style.overflow = "auto";
        }

        if (event.target === signupModal) {
          signupModal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      });

      // Close buttons for modals
      const closeButtons = document.querySelectorAll(".close-modal");
      closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const modal = this.closest(".modal");
          if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
          }
        });
      });

      // Login/Signup buttons in header
      const loginBtn = document.querySelector(".btn-login");
      const signupBtn = document.querySelector(".btn-signup");

      if (loginBtn) {
        loginBtn.addEventListener("click", function (e) {
          e.preventDefault();
          const loginModal = document.getElementById("loginModal");
          if (loginModal) {
            loginModal.style.display = "flex";
            document.body.style.overflow = "hidden";
          }
        });
      }

      if (signupBtn) {
        signupBtn.addEventListener("click", function (e) {
          e.preventDefault();
          const signupModal = document.getElementById("signupModal");
          if (signupModal) {
            signupModal.style.display = "flex";
            document.body.style.overflow = "hidden";
          }
        });
      }
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initDom);
    } else {
      initDom();
    }
  }

  // Set up event listeners for auth forms
  function setupEventListeners() {
    // Login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", handleLogin);
    }

    // Signup form submission
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", handleSignup);
    }

    // Logout button
    document.addEventListener("click", function (e) {
      const logoutBtn = e.target.closest && e.target.closest(".btn-logout");
      if (logoutBtn) logout();
    });

    // Toggle between login and signup modals
    document.addEventListener("click", function (e) {
      if (e.target.id === "showSignup" || e.target.id === "showLogin") {
        e.preventDefault();
        const loginModal = document.getElementById("loginModal");
        const signupModal = document.getElementById("signupModal");

        if (loginModal && signupModal) {
          loginModal.style.display =
            loginModal.style.display === "none" ? "flex" : "none";
          signupModal.style.display =
            signupModal.style.display === "flex" ? "none" : "flex";
        }
      }
    });
  }

  // Show success popup
  function showSuccessPopup(message) {
    const popup = document.createElement("div");
    popup.className = "success-popup";
    popup.innerHTML = `
      <div class="success-content">
        <i class="fas fa-check-circle"></i>
        <p>${message}</p>
      </div>
    `;
    document.body.appendChild(popup);

    // Auto remove after 3 seconds
    setTimeout(() => {
      popup.classList.add("show");
      setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => {
          if (popup.parentNode) {
            popup.parentNode.removeChild(popup);
          }
        }, 300);
      }, 3000);
    }, 10);
  }

  // Handle login form submission
  function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.querySelector("#email").value.trim();
    const password = form.querySelector("#password").value;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Signing in...';

    // Simple validation
    if (!email || !password) {
      showAlert("Please fill in all fields", "error");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Get users from localStorage
        const usersRaw = readStoredJson(USERS_KEY, []);
        const users = Array.isArray(usersRaw) ? usersRaw : [];
        const user = users.find((u) => u.email === email);

        if (user && user.password === password) {
          // Login successful
          currentUser = {
            id: user.id,
            username: user.username,
            email: user.email,
          };

          // Save to localStorage
          localStorage.setItem(USER_KEY, JSON.stringify(currentUser));

          // Close modal first
          const loginModal = document.getElementById("loginModal");
          if (loginModal) {
            loginModal.style.display = "none";
            document.body.style.overflow = "auto";
          }

          // Reset form
          form.reset();

          // Update UI and show welcome message
          updateAuthUI();
          showSuccessPopup(`Welcome back, ${user.username}!`);
        } else {
          throw new Error("Invalid email or password");
        }
      } catch (error) {
        showAlert(error.message || "Login failed. Please try again.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }, 500);
  }

  // Handle signup form submission
  function handleSignup(e) {
    e.preventDefault();

    const form = e.target;
    const username = form.querySelector("#signup-username").value.trim();
    const email = form.querySelector("#signup-email").value.trim();
    const password = form.querySelector("#signup-password").value;
    const confirmPassword = form.querySelector("#confirm-password").value;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Creating account...';

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      showAlert("Please fill in all fields", "error");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    if (password !== confirmPassword) {
      showAlert("Passwords do not match", "error");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    if (password.length < 6) {
      showAlert("Password must be at least 6 characters long", "error");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Check if email already exists
        const usersRaw = readStoredJson(USERS_KEY, []);
        const users = Array.isArray(usersRaw) ? usersRaw : [];
        const emailExists = users.some((user) => user.email === email);

        if (emailExists) {
          throw new Error("Email already registered");
        }

        // Create new user
        const newUser = {
          id: Date.now().toString(),
          username,
          email,
          password, // In a real app, you should hash the password
          createdAt: new Date().toISOString(),
        };

        // Save user
        users.push(newUser);
        localStorage.setItem(USERS_KEY, JSON.stringify(users));

        // Auto login
        currentUser = {
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
        };

        localStorage.setItem(USER_KEY, JSON.stringify(currentUser));

        // Update UI
        updateAuthUI();

        // Update account section with user data
        updateAccountSection(currentUser);

        // Close modal
        const signupModal = document.getElementById("signupModal");
        if (signupModal) signupModal.style.display = "none";
        document.body.style.overflow = "auto";

        // Show success popup with improved styling and animation
        const successPopup = document.createElement("div");
        successPopup.className = "success-popup";
        successPopup.innerHTML = `
          <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <p>Welcome to GameBox, ${username}!</p>
          </div>
        `;
        document.body.appendChild(successPopup);
        successPopup.classList.add("show");
        setTimeout(() => {
          successPopup.classList.remove("show");
          setTimeout(() => {
            if (successPopup.parentNode) {
              successPopup.parentNode.removeChild(successPopup);
            }
          }, 300);
        }, 3000);

        // Reset form
        form.reset();
      } catch (error) {
        showAlert(error.message || "Signup failed. Please try again.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }, 500);
  }

  // Logout function
  function logout() {
    currentUser = null;
    localStorage.removeItem(USER_KEY);
    // Backward compatibility: clear any legacy auth keys as well
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser");
    updateAuthUI();

    // If on a protected page, redirect to home
    const protectedPages = ["profile.html", "dashboard.html"];
    const currentPage = window.location.pathname.split("/").pop();

    if (protectedPages.includes(currentPage)) {
      window.location.href = "index.html";
    } else {
      showAlert("Logged out successfully", "success");
    }
  }

  // Update account section with user data
  function updateAccountSection(user) {
    const accountSection = document.querySelector(".account-section");
    if (!accountSection) return;

    accountSection.innerHTML = `
      <div class="account-info">
        <div class="account-avatar">
          ${user.username ? user.username.charAt(0).toUpperCase() : "U"}
        </div>
        <div class="account-details">
          <h3>${user.username || "User"}</h3>
          <p>${user.email || ""}</p>
        </div>
        <button class="btn-logout" title="Logout">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    `;

    // Add logout event listener
    const logoutBtn = accountSection.querySelector(".btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        logout();
      });
    }
  }

  // Update UI based on authentication state
  function updateAuthUI() {
    console.log("updateAuthUI called");

    // Get the current user from localStorage to ensure we have the latest data
    const userData =
      localStorage.getItem(USER_KEY) || localStorage.getItem("currentUser");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        currentUser =
          parsed && typeof parsed === "object"
            ? parsed
            : { username: String(parsed) };
      } catch (e) {
        currentUser = { username: String(userData) };
      }
    } else {
      currentUser = null;
    }

    console.log("Current user:", currentUser);

    const authButtons = document.querySelector(".auth-buttons");
    const accountSection = document.querySelector(".account-section");

    console.log("Auth buttons element:", authButtons);
    console.log("Account section element:", accountSection);

    if (!authButtons || !accountSection) {
      console.error("Required elements not found in the DOM");
      return;
    }

    if (currentUser && (currentUser.id || currentUser.username)) {
      // User is logged in
      console.log("User is logged in, showing account section");
      authButtons.style.display = "none";
      accountSection.style.display = "block";

      // Ensure we have the correct user data structure
      const userData = {
        id: currentUser.id,
        username: currentUser.username || currentUser.name || "User",
        email: currentUser.email || "",
      };

      updateAccountSection(userData);
    } else {
      // User is not logged in
      console.log("User is not logged in, showing auth buttons");
      authButtons.style.display = "flex";
      accountSection.style.display = "none";
    }
  }

  // Show alert message
  function showAlert(message, type = "success") {
    if (typeof window.showCustomPopup === "function") {
      const popupType =
        type === "error" ? "error" : type === "success" ? "success" : "info";
      const title =
        type === "error" ? "Error" : type === "success" ? "Success" : "Info";
      window.showCustomPopup(title, message, popupType);
      return;
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <p>${message}</p>
      <span class="close-notification">&times;</span>
    `;

    // Add to DOM
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.classList.add("hide");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);

    // Close button
    const closeBtn = notification.querySelector(".close-notification");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        notification.classList.add("hide");
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      });
    }
  }

  // Check if user is authenticated
  function isAuthenticated() {
    return currentUser !== null;
  }

  // Public API
  return {
    init,
    isAuthenticated,
    getCurrentUser: function () {
      return currentUser;
    },
    requireAuth: function () {
      if (!isAuthenticated()) {
        // Store the current URL to redirect back after login
        sessionStorage.setItem("redirectAfterLogin", window.location.href);
        window.location.href = "login.html";
        return false;
      }
      return true;
    },
    logout,
    showAlert, // Expose showAlert for global use
  };
})();

// Initialize auth module when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  Auth.init();
});

// Make showAlert globally available
window.showAlert = Auth.showAlert;
