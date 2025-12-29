// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    // Toggle mobile menu
    function toggleMenu() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        
        // Change icon between bars and times
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Close menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', toggleMenu);

    // Toggle menu when clicking the menu button
    menuToggle.addEventListener('click', toggleMenu);

    // Update cart and wishlist counts for mobile
    function updateMobileCounts() {
        const cartCount = document.getElementById('cart-count').textContent;
        const wishlistCount = document.getElementById('wishlist-count').textContent;
        
        const mobileCartCount = document.querySelector('#mobile-cart-count span');
        const mobileWishlistCount = document.querySelector('#mobile-wishlist-count span');
        
        if (mobileCartCount) mobileCartCount.textContent = cartCount;
        if (mobileWishlistCount) mobileWishlistCount.textContent = wishlistCount;
    }

    // Initial update
    updateMobileCounts();

    // Update counts when they change (you might need to call this from your cart/wishlist update functions)
    window.updateMobileCounts = updateMobileCounts;

    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 1024) {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Add resize event listener
    window.addEventListener('resize', handleResize);
});
