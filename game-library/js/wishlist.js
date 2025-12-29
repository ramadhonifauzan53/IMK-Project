document.addEventListener("DOMContentLoaded", function () {
  console.log("Wishlist page loaded");

  // Initialize elements
  const wishlistContainer = document.getElementById("wishlist-items");
  const emptyWishlist = document.getElementById("empty-wishlist");
  const wishlistCount = document.getElementById("wishlist-count");

  // Make sure we have the latest wishlist data
  if (!localStorage.getItem("wishlist")) {
    console.log(
      "No wishlist found in localStorage, initializing empty wishlist"
    );
    localStorage.setItem("wishlist", "[]");
  }

  // Function to get current wishlist
  function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist") || "[]");
  }

  // Initial load
  const wishlist = getWishlist();
  console.log("Current wishlist from localStorage:", wishlist);

  // Update wishlist count in the header
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }

  // Display wishlist items or empty message
  function renderWishlist() {
    console.log("Rendering wishlist...");
    // Always get fresh data from localStorage
    const currentWishlist = getWishlist();
    console.log("Current wishlist items:", currentWishlist);

    // Make sure all wishlist items have required fields
    const validWishlist = currentWishlist.filter(
      (item) =>
        item &&
        typeof item === "object" &&
        item.id !== undefined &&
        item.price !== undefined
    );

    // Update the wishlist count in the header
    if (wishlistCount) {
      wishlistCount.textContent = validWishlist.length;
    }

    if (currentWishlist.length === 0) {
      emptyWishlist.style.display = "block";
      if (wishlistContainer) wishlistContainer.style.display = "none";
    } else {
      emptyWishlist.style.display = "none";
      if (wishlistContainer) {
        wishlistContainer.style.display = "grid";
        wishlistContainer.innerHTML = "";
      }

      currentWishlist.forEach((game) => {
        const wishlistItem = document.createElement("div");
        wishlistItem.className = "wishlist-item";
        const discountBadge = game.discount
          ? `<span class="discount-badge">-${Math.round(
              (1 - game.discount) * 100
            )}%</span>`
          : "";

        const originalPrice =
          game.discount && game.originalPrice
            ? `<span class="original-price">Rp ${game.originalPrice.toLocaleString(
                "id-ID"
              )}</span>`
            : "";

        wishlistItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="wishlist-item-info">
                <h3>${game.title}</h3>
                <p>${game.genre}</p>
                <div class="game-price">
                    ${originalPrice}
                    ${discountBadge}
                    <div class="current-price">Rp ${
                      game.price ? game.price.toLocaleString("id-ID") : "0"
                    }</div>
                </div>
                <div class="wishlist-item-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${
                      game.id
                    }">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn btn-danger remove-from-wishlist" data-id="${
                      game.id
                    }">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
        wishlistContainer.appendChild(wishlistItem);
      });

      // Add event listeners to remove buttons
      document.querySelectorAll(".remove-from-wishlist").forEach((button) => {
        button.addEventListener("click", function (e) {
          e.stopPropagation();
          const gameId = parseInt(this.getAttribute("data-id"));
          removeFromWishlist(gameId);
        });
      });

      // Add event listeners to add to cart buttons
      document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", function (e) {
          e.stopPropagation();
          const gameId = parseInt(this.getAttribute("data-id"));
          const game = wishlist.find((game) => game.id === gameId);
          addToCart(game);
        });
      });
    }
  }

  // Add to cart function
  function addToCart(game) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item) => item.id === game.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: game.id,
        title: game.title,
        price: game.price,
        image: game.image,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showNotification(`${game.title} added to cart!`);
  }

  // Update cart count in header
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll("#cart-count");

    cartCountElements.forEach((element) => {
      element.textContent = cartCount;
    });
  }

  // Show notification
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // Remove game from wishlist
  function removeFromWishlist(gameId) {
    const currentWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    const updatedWishlist = currentWishlist.filter(
      (game) => game.id !== gameId
    );
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Update the display
    renderWishlist();

    // Update the count in the header
    const headerWishlistCount = document.querySelectorAll(
      "#wishlist-count, #wishlist-total"
    );
    headerWishlistCount.forEach((el) => {
      if (el.id === "wishlist-total") {
        el.textContent = `${updatedWishlist.length} items`;
      } else {
        el.textContent = updatedWishlist.length;
      }
    });

    // Re-render payment methods if needed
    const paymentSection = document.querySelector(".payment-methods");
    if (paymentSection) {
      paymentSection.remove();
      if (updatedWishlist.length > 0) {
        renderPaymentMethods();
      }
    }
  }

  // Add payment methods section
  function renderPaymentMethods() {
    const paymentSection = document.createElement("div");
    paymentSection.className = "payment-methods";
    paymentSection.innerHTML = `
        <h4>Metode Pembayaran</h4>
        <div class="payment-options">
            <div class="payment-option">
                <i class="fab fa-cc-visa"></i>
                <span>Kartu Kredit/Debit</span>
            </div>
            <div class="payment-option">
                <i class="fas fa-mobile-alt"></i>
                <span>E-Wallet</span>
            </div>
            <div class="payment-option">
                <i class="fas fa-university"></i>
                <span>Transfer Bank</span>
            </div>
            <div class="payment-option">
                <i class="fas fa-store"></i>
                <span>Minimarket</span>
            </div>
        </div>
        <div class="checkout-section" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2d2d42;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <span>Total Harga (${wishlist.length} items):</span>
                <span style="font-weight: bold; color: #6c5ce7;">Rp ${wishlist
                  .reduce((sum, game) => sum + (game.price || 0), 0)
                  .toLocaleString("id-ID")}</span>
            </div>
            <button class="btn btn-primary" style="width: 100%; padding: 12px; font-size: 1.1rem;">
                <i class="fas fa-shopping-bag"></i> Checkout Sekarang
            </button>
        </div>
    `;

    const main = document.querySelector("main");
    if (main) {
      main.appendChild(paymentSection);
    }
  }

  // Initial render
  renderWishlist();
  if (wishlist.length > 0) {
    renderPaymentMethods();
  }
});
