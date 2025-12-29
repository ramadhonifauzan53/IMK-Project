// DOM Elements
const gamesContainer = document.getElementById("games-container");
const searchInput = document.getElementById("search-input");
const genreFilter = document.getElementById("genre-filter");
const addGameBtn = document.getElementById("add-game-btn");
const wishlistCount = document.getElementById("wishlist-count");
const loginBtn = document.getElementById("login-btn");
const themeToggle = document.getElementById("theme-toggle");
const gameModal = document.getElementById("game-modal");
const addGameModal = document.getElementById("add-game-modal");
const loginModal = document.getElementById("login-modal");
const closeButtons = document.querySelectorAll(".close");
const addGameForm = document.getElementById("add-game-form");
const loginForm = document.getElementById("login-form");

// Sample game data
let games = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    genre: "rpg",
    description:
      "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    rating: 4.8,
    comments: [],
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    genre: "adventure",
    description:
      "America, 1899. The end of the Wild West era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Stadia"],
    rating: 4.9,
    comments: [],
  },
  {
    id: 3,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "adventure",
    description:
      "Step into a world of discovery, exploration and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.",
    image:
      "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    platforms: ["Nintendo Switch", "Wii U"],
    rating: 4.9,
    comments: [],
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    genre: "fps",
    description:
      "Counter-Strike 2 is the largest technical leap forward in Counter-Strike's history, ensuring new features and updates for years to come.",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    platforms: ["PC"],
    rating: 4.5,
    comments: [],
  },
  {
    id: 5,
    title: "FIFA 23",
    genre: "sports",
    description:
      "Experience the excitement of the biggest tournament in football with EA SPORTS™ FIFA 23 and the men's FIFA World Cup™ update, featuring the same great gameplay from FIFA 23 with all 64 matches, teams, and the official stadium of the 2022 FIFA World Cup™.",
    image:
      "https://gaming-cdn.com/images/products/15929/616x353/fifa-23-english-only-pc-ea-app-cover.jpg?v=1763390924",
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    rating: 4.2,
    comments: [],
  },
  {
    id: 6,
    title: "Civilization VI",
    genre: "strategy",
    description:
      "Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history's greatest leaders to build a civilization that will stand the test of time.",
    image:
      "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg",
    platforms: [
      "PC",
      "macOS",
      "Linux",
      "Nintendo Switch",
      "PlayStation 4",
      "Xbox One",
    ],
    rating: 4.3,
    comments: [],
  },
  {
    id: 7,
    title: "Cyberpunk 2077",
    genre: "rpg",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and body modification.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1698860631",
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    rating: 4.0,
    comments: [],
  },
  {
    id: 8,
    title: "Elden Ring",
    genre: "rpg",
    description:
      "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1698860631",
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    rating: 4.9,
    comments: [],
  },
  {
    id: 9,
    title: "God of War: Ragnarök",
    genre: "action",
    description:
      "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they've been trying to unravel the loom of their destiny.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202207/1117/4uH3OH4dQtHMe2gmdFuth02u.jpg",
    platforms: ["PlayStation 4", "PlayStation 5"],
    rating: 4.8,
    comments: [],
  },
  {
    id: 10,
    title: "Minecraft",
    genre: "sandbox",
    description:
      "Create, explore, survive, repeat. In Minecraft, the only limit is your imagination. Build anything you can imagine with unlimited resources in Creative mode, or go on grand expeditions in Survival mode.",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_Minecraft_image1600w.jpg",
    platforms: [
      "PC",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "Mobile",
      "macOS",
      "Linux",
    ],
    rating: 4.7,
    comments: [],
  },
  {
    id: 11,
    title: "Grand Theft Auto V",
    genre: "action",
    description:
      "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
    image: "https://vulcanpost.com/wp-content/uploads/2015/04/GTAV-Review.jpg",
    platforms: [
      "PC",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox 360",
      "Xbox One",
      "Xbox Series X/S",
    ],
    rating: 4.7,
    comments: [],
  },
  {
    id: 12,
    title: "The Last of Us Part II",
    genre: "adventure",
    description:
      "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR757_IcDFxzj0UwuGvcWU8wTD3hqYxZ9AXcg&s",
    platforms: ["PlayStation 4", "PlayStation 5"],
    rating: 4.8,
    comments: [],
  },
  {
    id: 13,
    title: "Apex Legends",
    genre: "fps",
    description:
      "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
    image:
      "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    rating: 4.3,
    comments: [],
  },
  {
    id: 14,
    title: "Stardew Valley",
    genre: "simulation",
    description:
      "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1754692865",
    platforms: [
      "PC",
      "macOS",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "PlayStation Vita",
      "iOS",
      "Android",
    ],
    rating: 4.8,
    comments: [],
  },
  {
    id: 15,
    title: "Resident Evil 4 Remake",
    genre: "horror, Action",
    description:
      "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the villagers.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/capsule_616x353.jpg?t=1736385712",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.7,
    comments: [],
  },
  {
    id: 16,
    title: "Hogwarts Legacy",
    genre: "adventure",
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
    image:
      "https://cdn-hogwartslegacy.warnerbrosgames.com/community/slide-07.jpg",
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    rating: 4.6,
    comments: [],
  },
  {
    id: 17,
    title: "Overwatch 2",
    genre: "fps",
    description:
      "Overwatch 2 is a free-to-play, team-based action game set in the optimistic future, where every match is the ultimate 5v5 battlefield brawl. Team up with friends and jump in today.",
    image:
      "https://i.ytimg.com/vi/dZl1yGUetjI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCch45WxMwq0eyldCpfSwWKbv8H4w",
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
      "Nintendo Switch",
    ],
    rating: 3.9,
    comments: [],
  },
  {
    id: 18,
    title: "Starfield",
    genre: "rpg",
    description:
      "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg?t=1749757928",
    platforms: ["PC", "Xbox Series X/S"],
    rating: 4.2,
    comments: [],
  },
  {
    id: 19,
    title: "Baldur's Gate 3",
    genre: "rpg",
    description:
      "Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a Mind Flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.",
    image: "https://cdn.mos.cms.futurecdn.net/ZvJ5idLf2hCq9z7xbM7nR6.jpg",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.9,
    comments: [],
  },
  {
    id: 20,
    title: "Street Fighter 6",
    genre: "fighting",
    description:
      "Here comes Capcom's newest challenger! Powered by Capcom's proprietary RE ENGINE, the Street Fighter 6 experience spans across three distinct game modes, including World Tour, Fighting Ground and Battle Hub.",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202505/2004/856a1ab23a0f5385be421cdb6a2bbe84da28402552091c4e.jpg",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.6,
    comments: [],
  },
];

// State
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let currentUser = sessionStorage.getItem("currentUser");
let isDarkTheme = true;

// Initialize the app
function init() {
  renderGames(games);
  updateWishlistCount();
  if (
    window.GameBoxTheme &&
    typeof window.GameBoxTheme.applyTheme === "function"
  ) {
    window.GameBoxTheme.applyTheme();
  }
  setupEventListeners();
  checkLoginStatus();
}

// Handle image loading with fallback
function loadImage(imgElement, src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imgElement.src = src;
      imgElement.classList.add("loaded");
      resolve();
    };
    img.onerror = () => {
      // Use a placeholder image if the original fails to load
      imgElement.src =
        "https://via.placeholder.com/300x180/2a2a40/6c5ce7?text=Game+Image";
      imgElement.alt = "Image not available";
      imgElement.classList.add("loaded");
      resolve();
    };
    img.src = src;
  });
}

// Render games to the DOM
async function renderGames(gamesToRender) {
  gamesContainer.innerHTML = "";

  if (gamesToRender.length === 0) {
    gamesContainer.innerHTML =
      '<p class="no-games">No games found. Try adjusting your search or filters.</p>';
    return;
  }

  for (const game of gamesToRender) {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";
    gameCard.dataset.id = game.id;

    const isInWishlist = wishlist.some((item) => item.id === game.id);

    gameCard.innerHTML = `
      <img src="" alt="${game.title}" class="game-image" data-src="${
      game.image
    }">
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <span class="game-genre">${formatGenre(game.genre)}</span>
        <div class="game-rating">
          ${renderRatingStars(game.rating)}
          <span>${game.rating.toFixed(1)}</span>
        </div>
        <div class="game-actions">
          <button class="btn-details" data-id="${game.id}">View Details</button>
          <button class="btn-wishlist ${
            isInWishlist ? "active" : ""
          }" data-id="${game.id}">
            <i class="${isInWishlist ? "fas" : "far"} fa-heart"></i>
          </button>
        </div>
      </div>
    `;

    gamesContainer.appendChild(gameCard);

    // Load the image after the element is in the DOM
    const imgElement = gameCard.querySelector(".game-image");
    if (imgElement) {
      await loadImage(imgElement, game.image);
    }
  }

  // Add event listeners to the new elements
  document.querySelectorAll(".btn-details").forEach((btn) => {
    btn.addEventListener("click", (e) =>
      showGameDetails(parseInt(e.target.dataset.id))
    );
  });

  document.querySelectorAll(".btn-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) =>
      toggleWishlist(parseInt(e.target.closest("button").dataset.id))
    );
  });
}

// Show game details in modal
function showGameDetails(gameId) {
  const game = games.find((g) => g.id === gameId);
  if (!game) return;

  const isInWishlist = wishlist.some((item) => item.id === game.id);

  document.getElementById("game-details").innerHTML = `
        <div class="game-details">
            <div class="game-details-image-container">
                <img src="${game.image}" alt="${
    game.title
  }" class="game-details-image">
                <button class="btn-wishlist ${
                  isInWishlist ? "active" : ""
                }" data-id="${game.id}">
                    ${isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
            </div>
            <div class="game-details-info">
                <h2>${game.title}</h2>
                <div class="game-meta">
                    <span class="game-genre">${formatGenre(game.genre)}</span>
                    <div class="game-rating">
                        ${renderRatingStars(game.rating)}
                        <span>${game.rating.toFixed(1)}</span>
                    </div>
                </div>
                <p>${game.description}</p>
                
                <h3>Platforms</h3>
                <div class="game-platforms">
                    ${game.platforms
                      .map(
                        (platform) =>
                          `<span class="platform-tag">${platform}</span>`
                      )
                      .join("")}
                </div>
                
                <div class="comments-section">
                    <h3>Comments</h3>
                    ${
                      game.comments && game.comments.length > 0
                        ? game.comments
                            .map(
                              (comment) => `
                            <div class="comment">
                                <div class="comment-header">
                                    <span>${comment.user}</span>
                                    <span>${new Date(
                                      comment.date
                                    ).toLocaleDateString()}</span>
                                </div>
                                <p>${comment.text}</p>
                                <div class="comment-rating">
                                    ${renderRatingStars(comment.rating)}
                                </div>
                            </div>
                        `
                            )
                            .join("")
                        : "<p>No comments yet. Be the first to review!</p>"
                    }
                    
                    <form class="comment-form" onsubmit="event.preventDefault(); addComment(${
                      game.id
                    }, this.comment.value, this.rating.value);">
                        <h4>Add a Comment</h4>
                        <textarea name="comment" placeholder="Share your thoughts..." required></textarea>
                        <div class="form-group">
                            <label>Rating</label>
                            <div class="star-rating">
                                ${[5, 4, 3, 2, 1]
                                  .map(
                                    (i) => `
                                    <input type="radio" id="star${i}-${game.id}" name="rating" value="${i}" required>
                                    <label for="star${i}-${game.id}" title="${i} stars">★</label>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    `;

  // Add event listener to the wishlist button in the modal
  document
    .querySelector(".game-details .btn-wishlist")
    .addEventListener("click", (e) => {
      toggleWishlist(gameId);
      e.target.textContent = wishlist.some((item) => item.id === gameId)
        ? "Remove from Wishlist"
        : "Add to Wishlist";
      e.target.classList.toggle("active");
    });

  // Show the modal
  gameModal.style.display = "block";
}

// Toggle game in wishlist
function toggleWishlist(gameId) {
  const game = games.find((g) => g.id === gameId);
  if (!game) return;

  const wishlistIndex = wishlist.findIndex((item) => item.id === gameId);

  if (wishlistIndex === -1) {
    wishlist.push({ id: game.id, title: game.title, image: game.image });
  } else {
    wishlist.splice(wishlistIndex, 1);
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();

  // Update wishlist buttons
  document
    .querySelectorAll(`.btn-wishlist[data-id="${gameId}"]`)
    .forEach((btn) => {
      btn.classList.toggle("active");
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = btn.classList.contains("active")
          ? "fas fa-heart"
          : "far fa-heart";
      }
    });
}

// Add a new comment to a game
function addComment(gameId, commentText, rating) {
  if (!currentUser) {
    showCustomPopup(
      "Login Required",
      "Please log in to leave a comment.",
      "info"
    );
    return;
  }

  const game = games.find((g) => g.id === gameId);
  if (!game) return;

  if (!game.comments) {
    game.comments = [];
  }

  const newComment = {
    user: currentUser,
    text: commentText,
    rating: parseInt(rating),
    date: new Date().toISOString(),
  };

  game.comments.unshift(newComment);

  // Recalculate average rating
  const totalRating = game.comments.reduce(
    (sum, comment) => sum + comment.rating,
    0
  );
  game.rating = totalRating / game.comments.length;

  // Update the game in the main array
  const gameIndex = games.findIndex((g) => g.id === gameId);
  if (gameIndex !== -1) {
    games[gameIndex] = game;
  }

  // Save to localStorage
  localStorage.setItem("games", JSON.stringify(games));

  // Refresh the view
  showGameDetails(gameId);
  renderGames(games); // Refresh the main view to update ratings
}

// Filter and search games
function filterGames() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm) ||
      game.description.toLowerCase().includes(searchTerm);
    const matchesGenre = !selectedGenre || game.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  renderGames(filteredGames);
}

// Add a new game
function addNewGame(gameData) {
  const newGame = {
    id: Date.now(), // Simple unique ID
    title: gameData.title,
    genre: gameData.genre,
    description: gameData.description,
    image: gameData.image,
    platforms: gameData.platforms.split(",").map((p) => p.trim()),
    rating: 0,
    comments: [],
  };

  games.unshift(newGame);
  localStorage.setItem("games", JSON.stringify(games));
  renderGames(games);
}

// Toggle theme
function toggleTheme() {
  if (
    window.GameBoxTheme &&
    typeof window.GameBoxTheme.toggleTheme === "function"
  ) {
    window.GameBoxTheme.toggleTheme();
  }
}

// Apply theme based on user preference
function applyTheme() {
  if (
    window.GameBoxTheme &&
    typeof window.GameBoxTheme.applyTheme === "function"
  ) {
    window.GameBoxTheme.applyTheme();
  }
}

// Check login status
function checkLoginStatus() {
  if (currentUser) {
    loginBtn.textContent = currentUser;
  } else {
    loginBtn.textContent = "Login";
  }
}

// Handle login
function handleLogin(username) {
  currentUser = username;
  sessionStorage.setItem("currentUser", username);
  checkLoginStatus();
  loginModal.style.display = "none";
}

// Handle logout
function handleLogout() {
  currentUser = null;
  sessionStorage.removeItem("currentUser");
  checkLoginStatus();
}

// Update wishlist count
function updateWishlistCount() {
  wishlistCount.textContent = wishlist.length;
}

// Helper function to format genre
function formatGenre(genre) {
  return genre.charAt(0).toUpperCase() + genre.slice(1);
}

// Helper function to render rating stars
function renderRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }

  return stars;
}

// Setup event listeners
function setupEventListeners() {
  // Search and filter
  searchInput.addEventListener("input", filterGames);
  genreFilter.addEventListener("change", filterGames);

  // Modal close buttons
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      gameModal.style.display = "none";
      addGameModal.style.display = "none";
      loginModal.style.display = "none";
    });
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === gameModal) gameModal.style.display = "none";
    if (e.target === addGameModal) addGameModal.style.display = "none";
    if (e.target === loginModal) loginModal.style.display = "none";
  });

  // Add game button
  addGameBtn.addEventListener("click", () => {
    if (!currentUser) {
      showCustomPopup("Login Required", "Please log in to add a game.", "info");
      loginModal.style.display = "block";
      return;
    }
    addGameModal.style.display = "block";
  });

  // Add game form
  addGameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const gameData = {
      title: document.getElementById("game-title").value,
      genre: document.getElementById("game-genre").value,
      description: document.getElementById("game-description").value,
      image: document.getElementById("game-image").value,
      platforms: document.getElementById("game-platforms").value,
    };

    addNewGame(gameData);
    addGameForm.reset();
    addGameModal.style.display = "none";
  });

  // Login button
  loginBtn.addEventListener("click", () => {
    if (currentUser) {
      if (confirm("Do you want to logout?")) {
        handleLogout();
      }
    } else {
      loginModal.style.display = "block";
    }
  });

  // Login form
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    if (username) {
      handleLogin(username);
      loginForm.reset();
    }
  });
}

// Load games from localStorage if available
const savedGames = localStorage.getItem("games");
if (savedGames) {
  games = JSON.parse(savedGames);
}

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", init);

//wishlist page
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const wishlistItemsContainer = document.getElementById("wishlist-items");
  const emptyWishlist = document.getElementById("empty-wishlist");
  const wishlistTotal = document.getElementById("wishlist-total");

  // Load wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Update wishlist count in navigation
  function updateWishlistCount() {
    const countElements = document.querySelectorAll(
      "#wishlist-count, .wishlist-count"
    );
    countElements.forEach((el) => {
      el.textContent = wishlist.length;
    });
  }

  // Update wishlist total
  function updateWishlistTotal() {
    wishlistTotal.textContent = `${wishlist.length} ${
      wishlist.length === 1 ? "item" : "items"
    }`;
  }

  // Remove item from wishlist
  function removeFromWishlist(gameId) {
    wishlist = wishlist.filter((item) => item.id !== gameId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
    updateWishlistCount();
  }

  // Add to cart function (placeholder)
  function addToCart(game) {
    // You can implement cart functionality here
    showCustomPopup("Success", `Added ${game.title} to cart!`, "success");
  }

  // Render wishlist items
  function renderWishlist() {
    if (wishlist.length === 0) {
      emptyWishlist.style.display = "block";
      wishlistItemsContainer.style.display = "none";
      return;
    }

    emptyWishlist.style.display = "none";
    wishlistItemsContainer.style.display = "grid";
    wishlistItemsContainer.innerHTML = "";

    wishlist.forEach((game) => {
      const gameElement = document.createElement("div");
      gameElement.className = "wishlist-item";
      gameElement.innerHTML = `
                <img src="${
                  game.image ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }" alt="${game.title}">
                <div class="wishlist-item-info">
                    <h3>${game.title}</h3>
                    <p>${game.description || "No description available."}</p>
                    <div class="wishlist-item-actions">
                        <span class="wishlist-item-price">$${
                          game.price || "29.99"
                        }</span>
                        <div>
                            <button class="add-to-cart" data-id="${game.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="remove-from-wishlist" data-id="${
                              game.id
                            }">
                                <i class="fas fa-trash"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;

      wishlistItemsContainer.appendChild(gameElement);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-from-wishlist").forEach((button) => {
      button.addEventListener("click", (e) => {
        const gameId = parseInt(e.target.closest("button").dataset.id);
        removeFromWishlist(gameId);
      });
    });

    // Add event listeners to add to cart buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        const gameId = parseInt(e.target.closest("button").dataset.id);
        const game = wishlist.find((g) => g.id === gameId);
        if (game) {
          addToCart(game);
        }
      });
    });
  }

  // Initialize theme toggle
  function initThemeToggle() {
    if (
      window.GameBoxTheme &&
      typeof window.GameBoxTheme.applyTheme === "function"
    ) {
      window.GameBoxTheme.applyTheme();
    }
  }

  function updateThemeIcon(theme) {
    const themeIcon = document.querySelector("#theme-toggle i");
    if (themeIcon) {
      themeIcon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
    }
  }

  // Initialize
  function init() {
    renderWishlist();
    updateWishlistCount();
    updateWishlistTotal();
    initThemeToggle();
  }

  init();
});

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <i class="fas fa-${
          type === "success" ? "check-circle" : "exclamation-circle"
        }"></i>
        <span>${message}</span>
    `;

  document.body.appendChild(notification);

  // Trigger reflow
  void notification.offsetWidth;

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// In script.js
function addToWishlist(game) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const isInWishlist = wishlist.some((item) => item.id === game.id);

  if (!isInWishlist) {
    wishlist.push(game);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    showNotification(`${game.title} added to wishlist!`);
  } else {
    removeFromWishlist(game.id);
    showNotification(`${game.title} removed from wishlist.`);
  }
}

function removeFromWishlist(gameId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist = wishlist.filter((item) => item.id !== gameId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const countElements = document.querySelectorAll("#wishlist-count");
  countElements.forEach((el) => {
    el.textContent = wishlist.length;
  });
}

// Call this when the page loads
document.addEventListener("DOMContentLoaded", function () {
  updateWishlistCount();
  // ... rest of your existing code
});
