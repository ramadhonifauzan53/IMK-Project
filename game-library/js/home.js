// home.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize wishlist from localStorage or empty array
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  updateWishlistCount();

  // Function to update wishlist count in the header
  function updateWishlistCount() {
    const wishlistCount = document.getElementById("wishlist-count");
    if (wishlistCount) {
      wishlistCount.textContent = wishlist.length;
    }
  }

  // Featured games data - make sure it's in the global scope
  window.featuredGames = [
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
      genre: "RPG",
      price: 399000,
      discount: 0.7, // 30% off
      originalPrice: 570000,
      inWishlist: false,
    },
    {
      id: 2,
      title: "Red Dead Redemption 2",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      genre: "Adventure",
      price: 659000,
      discount: 0.5, // 50% off
      originalPrice: 1318000,
    },
    {
      id: 3,
      title: "Elden Ring",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      genre: "Action RPG",
      price: 799000,
      originalPrice: 799000,
    },
    {
      id: 4,
      title: "Baldur's Gate 3",
      image: "https://cdn.mos.cms.futurecdn.net/ZvJ5idLf2hCq9z7xbM7nR6.jpg",
      genre: "RPG",
      price: 759000,
      originalPrice: 759000,
    },
  ];

  // Render featured games
  const gameGrid = document.querySelector(".game-grid");
  if (gameGrid) {
    featuredGames.forEach((game) => {
      const gameCard = document.createElement("div");
      gameCard.className = "game-card";
      gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <div class="game-info">
                <div class="game-header">
                    <h3>${game.title}</h3>
                    <button class="wishlist-btn" data-id="${game.id}">
                        <i class="${
                          wishlist.some((item) => item.id === game.id)
                            ? "fas"
                            : "far"
                        } fa-heart"></i>
                    </button>
                </div>
                <span class="game-genre">${game.genre}</span>
                <div class="game-price">
                    ${
                      game.discount
                        ? `<span class="original-price">Rp ${game.originalPrice.toLocaleString(
                            "id-ID"
                          )}</span>
                           <span class="discount-badge">-${
                             game.discount * 100
                           }%</span>`
                        : ""
                    }
                    <div class="current-price">Rp ${game.price.toLocaleString(
                      "id-ID"
                    )}</div>
                </div>
            </div>
            `;
      gameCard.addEventListener("click", () => {
        window.location.href = `games.html#game-${game.id}`;
      });
      gameGrid.appendChild(gameCard);

      // Add click event for wishlist button
      const wishlistBtn = gameCard.querySelector(".wishlist-btn");
      if (wishlistBtn) {
        wishlistBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const gameId = parseInt(wishlistBtn.getAttribute("data-id"));
          const game = featuredGames.find((g) => g.id === gameId);

          // Get current wishlist from localStorage
          let currentWishlist = JSON.parse(
            localStorage.getItem("wishlist") || "[]"
          );

          if (currentWishlist.some((item) => item.id === gameId)) {
            // Remove from wishlist
            currentWishlist = currentWishlist.filter(
              (item) => item.id !== gameId
            );
            wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
            console.log("Removed from wishlist:", game.title);
          } else {
            // Add to wishlist - make sure we're only saving the necessary data
            const gameToAdd = {
              id: game.id,
              title: game.title,
              image: game.image,
              genre: game.genre,
              price: game.price,
              discount: game.discount,
              originalPrice: game.originalPrice,
            };
            currentWishlist.push(gameToAdd);
            wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
            console.log("Added to wishlist:", gameToAdd);
          }

          // Save to localStorage
          localStorage.setItem("wishlist", JSON.stringify(currentWishlist));
          console.log("Updated wishlist in localStorage:", currentWishlist);
          updateWishlistCount();

          // Update the local wishlist variable
          wishlist = currentWishlist;
        });
      }
    });
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
