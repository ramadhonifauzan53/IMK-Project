document.addEventListener("DOMContentLoaded", function () {
  // Game data with prices in IDR
  const games = [
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
      genre: "RPG",
      price: 399000,
      discount: 0.7,
      originalPrice: 570000,
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      releaseDate: "18 Mei 2015",
      description:
        "Become a professional monster slayer in this open world RPG where your choices shape the story. Play as Geralt of Rivia, a witcher tasked with finding a child of prophecy in a vast open world.",
      platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      features: [
        "Open World",
        "Story Rich",
        "Choices Matter",
        "Atmospheric",
        "Fantasy",
      ],
      tags: ["RPG", "Open World", "Story Rich", "Fantasy", "Adventure"],
      rating: "Mature 17+",
      languages: [
        "English",
        "Polish",
        "French",
        "German",
        "Japanese",
        "Russian",
      ],
      playerModes: ["Single-player"],
      averagePlaytime: "51h Main Story, 172h Completionist",
      metacritic: 93,
      achievements: 200,
      dlc: ["Hearts of Stone", "Blood and Wine"],
    },
    {
      id: 2,
      title: "Red Dead Redemption 2",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      genre: "Adventure",
      price: 659000,
      discount: 0.5,
      originalPrice: 1318000,
      developer: "Rockstar Games",
      publisher: "Rockstar Games",
      releaseDate: "5 November 2019",
      description:
        "Arthur Morgan and the Van der Linde gang are outlaws on the run in this epic tale of life in America at the dawn of the modern age. Includes the full story plus access to Red Dead Online.",
      platforms: ["PC", "PlayStation 4", "Xbox One", "Stadia"],
      features: [
        "Open World",
        "Story Rich",
        "Singleplayer",
        "Multiplayer",
        "Atmospheric",
      ],
      tags: [
        "Open World",
        "Western",
        "Story Rich",
        "Adventure",
        "Singleplayer",
      ],
      rating: "Mature 17+",
      languages: ["English", "French", "Italian", "German", "Spanish"],
      playerModes: ["Single-player", "Online Multiplayer"],
      averagePlaytime: "50h Main Story, 172h Completionist",
      metacritic: 93,
      achievements: 123,
      dlc: ["Red Dead Online"],
    },
    {
      id: 3,
      title: "Elden Ring",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      genre: "Action RPG",
      price: 799000,
      originalPrice: 799000,
      developer: "FromSoftware",
      publisher: "Bandai Namco Entertainment",
      releaseDate: "25 Februari 2022",
      description:
        "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.",
      platforms: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
      ],
      features: [
        "Souls-like",
        "Open World",
        "Character Customization",
        "Difficult",
        "Atmospheric",
      ],
      tags: ["RPG", "Open World", "Souls-like", "Fantasy", "Singleplayer"],
      rating: "Mature 17+",
      languages: [
        "English",
        "French",
        "Italian",
        "German",
        "Spanish",
        "Japanese",
      ],
      playerModes: ["Single-player", "Online Co-op"],
      averagePlaytime: "54h Main Story, 133h Completionist",
      metacritic: 96,
      achievements: 42,
      dlc: ["Shadow of the Erdtree"],
    },
    {
      id: 4,
      title: "Baldur's Gate 3",
      image: "https://cdn.mos.cms.futurecdn.net/ZvJ5idLf2hCq9z7xbM7nR6.jpg",
      genre: "RPG",
      price: 759000,
      originalPrice: 759000,
      developer: "Larian Studios",
      publisher: "Larian Studios",
      releaseDate: "6 Oktober 2020",
      description:
        "Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. A next-generation RPG set in the world of Dungeons & Dragons.",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "macOS"],
      features: [
        "RPG",
        "Story Rich",
        "Choices Matter",
        "Turn-Based Combat",
        "Multiplayer",
      ],
      tags: [
        "RPG",
        "Turn-Based",
        "Story Rich",
        "Fantasy",
        "Singleplayer",
        "Multiplayer",
      ],
      rating: "Mature 17+",
      languages: [
        "English",
        "French",
        "German",
        "Spanish",
        "Polish",
        "Russian",
        "Chinese",
      ],
      playerModes: ["Single-player", "Online Multiplayer", "Local Multiplayer"],
      averagePlaytime: "60h Main Story, 150h Completionist",
      metacritic: 97,
      achievements: 73,
      dlc: ["Digital Deluxe Edition Content"],
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      genre: "RPG",
      price: 599000,
      discount: 0.6,
      originalPrice: 999000,
      developer: "CD Projekt Red",
      publisher: "CD Projekt",
      releaseDate: "10 Desember 2020",
      description:
        "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification. Play as V, a cyber-enhanced mercenary, and take on the most powerful forces of the city in your fight for immortality.",
      platforms: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
        "Google Stadia",
      ],
      features: ["Open World", "RPG", "Story Rich", "Cyberpunk", "FPS"],
      tags: [
        "RPG",
        "Open World",
        "Cyberpunk",
        "FPS",
        "Story Rich",
        "Singleplayer",
      ],
      rating: "Mature 17+",
      languages: [
        "English",
        "Polish",
        "German",
        "French",
        "Spanish",
        "Japanese",
        "Russian",
        "Chinese",
      ],
      playerModes: ["Single-player"],
      averagePlaytime: "25h Main Story, 103h Completionist",
      metacritic: 86,
      achievements: 45,
      dlc: ["Phantom Liberty"],
    },
    {
      id: 6,
      title: "Grand Theft Auto V",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
      genre: "Action",
      price: 299000,
      discount: 0.5, // 50% off
      originalPrice: 599000,
      developer: "Rockstar North",
      releaseDate: "14 April 2015",
    },
    {
      id: 7,
      title: "Dota 2",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
      genre: "MOBA",
      price: 0,
      originalPrice: 0,
      developer: "Valve",
      releaseDate: "9 Juli 2013",
    },
    {
      id: 8,
      title: "Counter-Strike 2",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      genre: "FPS",
      price: 0,
      originalPrice: 0,
      developer: "Valve",
      releaseDate: "21 Agustus 2012",
    },
    {
      id: 9,
      title: "Apex Legends",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
      genre: "Battle Royale",
      price: 0,
      originalPrice: 0,
      developer: "Respawn Entertainment",
      releaseDate: "4 November 2020",
    },
    {
      id: 10,
      title: "PUBG: BATTLEGROUNDS",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
      genre: "Battle Royale",
      price: 0,
      originalPrice: 0,
      developer: "KRAFTON, Inc.",
      releaseDate: "21 Desember 2017",
    },
    {
      id: 11,
      title: "Stardew Valley",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
      genre: "Simulation",
      price: 149000,
      originalPrice: 149000,
      developer: "ConcernedApe",
      releaseDate: "26 Februari 2016",
    },
    {
      id: 12,
      title: "Hogwarts Legacy",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
      genre: "RPG",
      price: 859000,
      originalPrice: 859000,
      developer: "Avalanche Software",
      releaseDate: "10 Februari 2023",
    },
    {
      id: 13,
      title: "God of War (2018)",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
      genre: "Action Adventure",
      price: 699000,
      originalPrice: 699000,
      developer: "Santa Monica Studio",
      releaseDate: "14 Januari 2022",
    },
    {
      id: 14,
      title: "The Last of Us Part II",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg",
      genre: "Action Adventure",
      price: 849000,
      originalPrice: 849000,
      developer: "Naughty Dog",
      releaseDate: "28 Maret 2023",
    },
    {
      id: 15,
      title: "Spider-Man: Miles Morales",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/header.jpg",
      genre: "Action Adventure",
      price: 749000,
      originalPrice: 749000,
      developer: "Insomniac Games",
      releaseDate: "18 November 2022",
    },
    {
      id: 16,
      title: "Horizon Forbidden West",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/header.jpg",
      genre: "Action RPG",
      price: 799000,
      originalPrice: 799000,
      developer: "Guerrilla Games",
      releaseDate: "21 Maret 2024",
    },
    {
      id: 17,
      title: "Resident Evil 4 Remake",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
      genre: "Survival Horror",
      price: 759000,
      originalPrice: 759000,
      developer: "Capcom",
      releaseDate: "24 Maret 2023",
    },
    {
      id: 18,
      title: "Starfield",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
      genre: "Action RPG",
      price: 829000,
      originalPrice: 829000,
      developer: "Bethesda Game Studios",
      releaseDate: "6 September 2023",
    },
    {
      id: 19,
      title: "Forza Horizon 5",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
      genre: "Racing",
      price: 699000,
      discount: 0.5, // 50% off
      originalPrice: 1398000,
      developer: "Playground Games",
      releaseDate: "9 November 2021",
    },
    {
      id: 20,
      title: "Hades",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      genre: "Roguelike",
      price: 249000,
      originalPrice: 249000,
      developer: "Supergiant Games",
      releaseDate: "17 September 2020",
    },
    {
      id: 21,
      title: "It Takes Two",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/header.jpg",
      genre: "Adventure",
      price: 599000,
      discount: 0.5, // 50% off
      originalPrice: 1198000,
      developer: "Hazelight Studios",
      releaseDate: "26 Maret 2021",
    },
    {
      id: 22,
      title: "Death Stranding: Director's Cut",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1850570/header.jpg",
      genre: "Action Adventure",
      price: 649000,
      originalPrice: 649000,
      developer: "Kojima Productions",
      releaseDate: "30 Maret 2022",
    },
    {
      id: 23,
      title: "God of War Ragnarök",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
      genre: "Action Adventure",
      price: 899000,
      originalPrice: 899000,
      developer: "Santa Monica Studio",
      publisher: "Sony Interactive Entertainment",
      releaseDate: "9 November 2022",
      description:
        "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Against a backdrop of Norse Realms torn asunder by the fury of the Aesir, they've been trying to unravel the ominious prophecies of Ragnarök.",
      platforms: ["PlayStation 4", "PlayStation 5"],
      features: [
        "Action-Adventure",
        "Story Rich",
        "Singleplayer",
        "Atmospheric",
        "Fantasy",
      ],
      tags: ["Action", "Adventure", "Singleplayer", "Story Rich", "Fantasy"],
      rating: "Mature 17+",
      languages: [
        "English",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Japanese",
        "Polish",
        "Portuguese",
        "Russian",
      ],
      playerModes: ["Single-player"],
      averagePlaytime: "26h Main Story, 53h Completionist",
      metacritic: 94,
      achievements: 36,
      dlc: ["Valhalla"],
    },
    {
      id: 24,
      title: "Hogwarts Legacy",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
      genre: "Action RPG",
      price: 799000,
      discount: 0.2,
      originalPrice: 999000,
      developer: "Avalanche Software",
      publisher: "Warner Bros. Interactive Entertainment",
      releaseDate: "10 Februari 2023",
      description:
        "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
      platforms: [
        "PC",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox One",
        "Xbox Series X/S",
        "Nintendo Switch",
      ],
      features: ["Open World", "RPG", "Singleplayer", "Magic", "Adventure"],
      tags: ["RPG", "Open World", "Magic", "Singleplayer", "Adventure"],
      rating: "Teen",
      languages: [
        "English",
        "French",
        "Italian",
        "German",
        "Spanish",
        "Japanese",
        "Korean",
        "Polish",
        "Portuguese-Brazil",
        "Russian",
        "Simplified Chinese",
        "Spanish-Latin America",
      ],
      playerModes: ["Single-player"],
      averagePlaytime: "27h Main Story, 68h Completionist",
      metacritic: 84,
      achievements: 46,
      dlc: ["Dark Arts Pack", "Haunted Hogsmeade Shop"],
    },
    {
      id: 25,
      title: "Resident Evil 4 Remake",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
      genre: "Survival Horror",
      price: 859000,
      originalPrice: 859000,
      developer: "CAPCOM",
      publisher: "CAPCOM",
      releaseDate: "24 Maret 2023",
      description:
        "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors of the incident, has been sent to rescue the president's kidnapped daughter. He tracks her to a secluded European village, where there is something terribly wrong with the locals.",
      platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox Series X/S"],
      features: [
        "Survival Horror",
        "Third-Person Shooter",
        "Story Rich",
        "Singleplayer",
        "Atmospheric",
      ],
      tags: ["Horror", "Action", "Zombies", "Singleplayer", "Remake"],
      rating: "Mature 17+",
      languages: [
        "English",
        "French",
        "Italian",
        "German",
        "Spanish",
        "Japanese",
        "Korean",
        "Polish",
        "Portuguese-Brazil",
        "Russian",
        "Simplified Chinese",
        "Traditional Chinese",
      ],
      playerModes: ["Single-player"],
      averagePlaytime: "16h Main Story, 28h Completionist",
      metacritic: 93,
      achievements: 40,
      dlc: ["The Mercenaries"],
    },
    {
      id: 26,
      title: "Star Wars Jedi: Survivor",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg",
      genre: "Action Adventure",
      price: 849000,
      originalPrice: 849000,
      developer: "Respawn Entertainment",
      publisher: "Electronic Arts",
      releaseDate: "28 April 2023",
      description:
        "The story of Cal Kestis continues in Star Wars Jedi: Survivor™, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games. This narratively driven, single-player title picks up 5 years after the events of Star Wars Jedi: Fallen Order™ and follows Cal's increasingly desperate fight as the galaxy descends further into darkness.",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
      features: [
        "Action-Adventure",
        "Singleplayer",
        "Story Rich",
        "Sci-fi",
        "Lightsaber Combat",
      ],
      tags: ["Star Wars", "Action", "Adventure", "Singleplayer", "Sci-fi"],
      rating: "Teen",
      languages: [
        "English",
        "French",
        "Italian",
        "German",
        "Spanish",
        "Japanese",
        "Korean",
        "Polish",
        "Portuguese-Brazil",
        "Russian",
        "Simplified Chinese",
        "Spanish-Latin America",
        "Traditional Chinese",
      ],
      playerModes: ["Single-player"],
      averagePlaytime: "20h Main Story, 52h Completionist",
      metacritic: 85,
      achievements: 46,
      dlc: [],
    },
    {
      id: 27,
      title: "Diablo IV",
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg",
      genre: "Action RPG",
      price: 999000,
      discount: 0.1,
      originalPrice: 1110000,
      developer: "Blizzard Entertainment",
      releaseDate: "6 Juni 2023",
    },
  ];

  const gamesContainer = document.getElementById("games-container");
  const searchInput = document.getElementById("search-input");
  const genreFilter = document.getElementById("genre-filter");

  // Initialize the page
  function init() {
    displayGames(games);
    setupEventListeners();
    updateWishlistCount();
  }

  // Display games in the grid
  function displayGames(gamesToDisplay) {
    gamesContainer.innerHTML = "";

    if (gamesToDisplay.length === 0) {
      gamesContainer.innerHTML =
        '<div class="no-results">No games found matching your criteria.</div>';
      return;
    }

    gamesToDisplay.forEach((game) => {
      const discountBadge = game.discount
        ? `<span class="discount-badge">-${Math.round(
            (1 - game.discount) * 100
          )}%</span>`
        : "";

      const originalPrice = game.discount
        ? `<span class="original-price">Rp ${game.originalPrice.toLocaleString(
            "id-ID"
          )}</span>`
        : "";

      const gameCard = document.createElement("div");
      gameCard.className = "game-card";
      gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
          <div class="game-header">
            <h3>${game.title}</h3>
            <button class="wishlist-btn" data-id="${game.id}">
              <i class="far fa-heart"></i>
            </button>
          </div>
          <span class="game-genre">${game.genre}</span>
          <div class="game-price">
            ${originalPrice}
            ${discountBadge}
            <div class="current-price">Rp ${game.price.toLocaleString(
              "id-ID"
            )}</div>
          </div>
          <div class="game-details">
            <span><i class="fas fa-user-tie"></i> ${game.developer}</span>
            <span><i class="far fa-calendar-alt"></i> ${game.releaseDate}</span>
          </div>
          <button class="btn btn-primary add-to-cart" data-id="${game.id}">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button class="btn btn-secondary view-details" data-id="${game.id}">
            <i class="fas fa-info-circle"></i> Details
          </button>
        </div>
      `;
      gamesContainer.appendChild(gameCard);
    });

    // Add this after the existing code in games.js
    function showGameDetails(gameId) {
      const game = games.find((g) => g.id === gameId);
      if (!game) return;

      // Create modal HTML
      const modal = document.createElement("div");
      modal.className = "game-detail-modal";
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          <div class="modal-body">
            <div class="game-detail-image">
              <img src="${game.image}" alt="${game.title}">
            </div>
            <div class="game-detail-info">
              <h2>${game.title}</h2>
              <div class="game-meta">
                <span><i class="fas fa-tag"></i> ${game.genre}</span>
                <span><i class="fas fa-user-tie"></i> ${game.developer}</span>
                <span><i class="far fa-calendar-alt"></i> ${
                  game.releaseDate
                }</span>
              </div>
              <div class="game-price-detail">
                ${
                  game.discount
                    ? `<span class="original-price">Rp ${game.originalPrice.toLocaleString(
                        "id-ID"
                      )}</span>
                  <span class="discount-badge">-${Math.round(
                    (1 - game.discount) * 100
                  )}%</span>`
                    : ""
                }
                <div class="current-price">Rp ${game.price.toLocaleString(
                  "id-ID"
                )}</div>
              </div>
              <div class="game-description">
                <h3>Description</h3>
                <p>${game.description || "No description available."}</p>
              </div>
              ${
                game.platforms && game.platforms.length > 0
                  ? `
              <div class="game-platforms">
                <h3>Platforms</h3>
                <div class="platforms-list">
                  ${game.platforms
                    .map(
                      (platform) =>
                        `<span class="platform-tag">${platform}</span>`
                    )
                    .join("")}
                </div>
              </div>
            `
                  : ""
              }
              <div class="game-actions">
                <button class="btn btn-primary add-to-cart" data-id="${
                  game.id
                }">
                  <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn btn-secondary close-modal-btn">
                  <i class="fas fa-times"></i> Close
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Add modal to the body
      document.body.appendChild(modal);
      document.body.style.overflow = "hidden";

      // Add event listeners
      modal.querySelector(".close-modal").addEventListener("click", closeModal);
      modal
        .querySelector(".close-modal-btn")
        .addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });

      // Add to cart from modal
      modal
        .querySelector(".add-to-cart")
        .addEventListener("click", function (e) {
          e.stopPropagation();
          addToCart(gameId);
        });

      function closeModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = "";
      }
    }

    function addToCart(gameId) {
      const game = games.find((g) => g.id === gameId);
      if (!game) return;

      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingItem = cart.find((item) => item.id === gameId);

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
      showNotification(`${game.title} added to cart!`);
    }

    function showNotification(message) {
      const notification = document.createElement("div");
      notification.className = "notification";
      notification.textContent = message;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.classList.add("show");
      }, 10);

      setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    }

    // Add event listeners to detail buttons after rendering games
    document.addEventListener("click", function (e) {
      if (e.target.closest(".view-details")) {
        const button = e.target.closest(".view-details");
        const gameId = parseInt(button.getAttribute("data-id"));
        showGameDetails(gameId);
      }
    });

    // Add event listeners to wishlist buttons
    document.querySelectorAll(".wishlist-btn").forEach((button) => {
      button.addEventListener("click", toggleWishlist);
    });
  }

  // Toggle game in wishlist
  function toggleWishlist(e) {
    e.stopPropagation();
    const gameId = parseInt(this.getAttribute("data-id"));
    const game = games.find((g) => g.id === gameId);

    if (!game) return;

    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const gameIndex = wishlist.findIndex((item) => item.id === gameId);

    if (gameIndex === -1) {
      // Add to wishlist
      const gameToAdd = {
        id: game.id,
        title: game.title,
        image: game.image,
        genre: game.genre,
        price: game.price,
        discount: game.discount,
        originalPrice: game.originalPrice,
        developer: game.developer,
        releaseDate: game.releaseDate,
      };
      wishlist.push(gameToAdd);
      this.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
      // Remove from wishlist
      wishlist = wishlist.filter((item) => item.id !== gameId);
      this.innerHTML = '<i class="far fa-heart"></i>';
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
  }

  // Update wishlist count in header
  function updateWishlistCount() {
    const wishlistCount = document.getElementById("wishlist-count");
    if (wishlistCount) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      wishlistCount.textContent = wishlist.length;
    }
  }

  // Filter games based on search and genre
  function filterGames() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value.toLowerCase();

    const filteredGames = games.filter((game) => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchTerm) ||
        game.genre.toLowerCase().includes(searchTerm) ||
        game.developer.toLowerCase().includes(searchTerm);
      const matchesGenre =
        !selectedGenre || game.genre.toLowerCase() === selectedGenre;
      return matchesSearch && matchesGenre;
    });

    displayGames(filteredGames);
  }

  // Set up event listeners
  function setupEventListeners() {
    searchInput.addEventListener("input", filterGames);
    genreFilter.addEventListener("change", filterGames);

    // Theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      const currentTheme = localStorage.getItem("theme") || "dark";
      themeToggle.innerHTML =
        currentTheme === "light"
          ? '<i class="fas fa-sun"></i>'
          : '<i class="fas fa-moon"></i>';
    }
  }

  // Cart related functions
  function initCart() {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  function addToCart(gameId) {
    const game = games.find((g) => g.id === gameId);
    if (!game) return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = cart.find((item) => item.id === gameId);
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

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartCount = cart.reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
    const cartCountElements = document.querySelectorAll("#cart-count");

    cartCountElements.forEach((element) => {
      if (element) {
        element.textContent = cartCount;
        element.style.display = cartCount > 0 ? "inline-block" : "none";
      }
    });
  }

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

  // Add event delegation for cart buttons
  document.addEventListener("click", function (e) {
    if (e.target.closest(".add-to-cart")) {
      e.preventDefault();
      const button = e.target.closest(".add-to-cart");
      const gameId = parseInt(button.getAttribute("data-id"));
      addToCart(gameId);
    }
  });

  // Initialize cart when the page loads
  initCart();
  updateCartCount();

  // Initialize the page
  init();
});
