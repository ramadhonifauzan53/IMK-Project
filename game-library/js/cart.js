document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items");
  const subtotalElement = document.getElementById("subtotal");
  const taxElement = document.getElementById("tax");
  const totalElement = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const paymentModal = document.getElementById("paymentModal");
  const closeModalBtns = document.querySelectorAll(".close-modal");
  const paymentAmount = document.getElementById("payment-amount");
  const paymentStatus = document.getElementById("payment-status");
  const confirmPaymentBtn = document.getElementById("confirm-payment");
  let qrcode = null;

  // Load cart items
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    renderCartItems(cart);
    updateSummary(cart);
    updateCartCount();
    return cart;
  }

  // Render cart items
  function renderCartItems(cart) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        '<div class="empty-cart">Your cart is empty</div>';
      checkoutBtn.disabled = true;
      return;
    }

    checkoutBtn.disabled = false;
    cartItemsContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}">
        <div class="cart-item-details">
          <div>
            <div class="cart-item-header">
              <h3 class="cart-item-title">${item.title}</h3>
              <span class="cart-item-price">Rp ${item.price.toLocaleString(
                "id-ID"
              )}</span>
            </div>
            <div class="cart-item-actions">
              <div class="quantity-selector">
                <button class="quantity-btn decrease" data-id="${
                  item.id
                }">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn increase" data-id="${
                  item.id
                }">+</button>
              </div>
              <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Update order summary
  function updateSummary(cart) {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    subtotalElement.textContent = `Rp ${subtotal.toLocaleString("id-ID")}`;
    taxElement.textContent = `Rp ${tax.toLocaleString("id-ID")}`;
    totalElement.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    return total;
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

  // Handle quantity changes
  function updateQuantity(gameId, change) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const item = cart.find((item) => item.id === gameId);

    if (item) {
      item.quantity += change;

      if (item.quantity <= 0) {
        // Remove item if quantity is 0 or less
        const itemIndex = cart.findIndex((i) => i.id === gameId);
        cart.splice(itemIndex, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }
  }

  // Generate random transaction ID
  function generateTransactionId() {
    return (
      "TXN" +
      Date.now().toString().slice(-8) +
      Math.floor(1000 + Math.random() * 9000)
    );
  }

  // Event delegation for quantity buttons
  cartItemsContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".increase, .decrease, .remove-item");
    if (!target) return;

    const gameId = parseInt(target.getAttribute("data-id"));

    if (target.classList.contains("increase")) {
      updateQuantity(gameId, 1);
    } else if (target.classList.contains("decrease")) {
      updateQuantity(gameId, -1);
    } else if (target.classList.contains("remove-item")) {
      updateQuantity(gameId, -Infinity); // Remove item completely
    }
  });

  // Checkout button - Show payment modal
  checkoutBtn.addEventListener("click", function () {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.length === 0) {
      showCustomPopup(
        "Empty Cart",
        "Your cart is empty! Please add some games first.",
        "info"
      );
      return;
    }

    const total = updateSummary(cart);
    paymentAmount.textContent = `Rp ${total.toLocaleString("id-ID")}`;

    // Clear previous QR code if exists
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    // Generate payment data
    const paymentData = {
      transactionId: generateTransactionId(),
      amount: total,
      merchant: "GameBox Store",
      timestamp: new Date().toISOString(),
    };

    // Generate QR code
    qrcode = new QRCode(qrcodeContainer, {
      text: JSON.stringify(paymentData),
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    // Reset payment status
    paymentStatus.textContent = "Waiting for payment...";
    paymentStatus.className = "";

    // Reset confirm button
    confirmPaymentBtn.disabled = false;
    confirmPaymentBtn.textContent = "I've Made the Payment";
    confirmPaymentBtn.className = "btn btn-primary";

    // Show the payment modal
    paymentModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Close modal when clicking the close button
  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      paymentModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  // Close modal when clicking outside the modal
  window.addEventListener("click", function (event) {
    if (event.target === paymentModal) {
      paymentModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Handle payment confirmation
  confirmPaymentBtn.addEventListener("click", function () {
    // In a real app, you would verify the payment with your payment processor
    // For demo purposes, we'll just show a success message
    paymentStatus.textContent =
      "Payment verified! Thank you for your purchase!";
    paymentStatus.className = "success";

    // Disable the button after payment
    confirmPaymentBtn.disabled = true;
    confirmPaymentBtn.textContent = "Payment Completed";
    confirmPaymentBtn.classList.remove("btn-primary");
    confirmPaymentBtn.classList.add("btn-success");

    // Clear cart after successful payment
    setTimeout(() => {
      localStorage.removeItem("cart");
      paymentModal.style.display = "none";
      document.body.style.overflow = "auto";
      loadCart(); // Refresh cart to show it's empty
      showNotification("Payment successful! Your order has been placed.");
    }, 2000);
  });

  // Show notification
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add("show"), 100);

    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const currentTheme = localStorage.getItem("theme") || "dark";
    themeToggle.innerHTML =
      currentTheme === "light"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  }

  // Initialize cart
  loadCart();
});
