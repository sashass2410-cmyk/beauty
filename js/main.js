/*===================================
  Radiant Beauty - Main JavaScript
  ===================================*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderScroll();
    initContactForm();
    initCardAnimations();
    initBentoScrollEffects();
});

/*===================================
  Mobile Navigation
  ===================================*/
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    // Open menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('show');
            navToggle.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
        });
    }

    // Close menu
    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            if (e.target === navMenu) {
                closeMenu();
            }
        });
    }

    function closeMenu() {
        if (navMenu) {
            navMenu.classList.remove('show');
        }
        if (navToggle) {
            navToggle.classList.remove('active');
        }
        document.body.style.overflow = ''; // Restore body scroll
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            closeMenu();
        }
    });
}

/*===================================
  Smooth Scrolling
  ===================================*/
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle links that point to an element on the same page
            if (href !== '#' && href.length > 1) {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    const headerOffset = 80; // Height of fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/*===================================
  Header Scroll Effect
  ===================================*/
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow when scrolled
        if (scrollTop > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScrollTop = scrollTop;
    });
}

/*===================================
  Scroll Animations
  ===================================*/
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(`
        .category-card,
        .feature-card,
        .tutorial-card,
        .tip-card,
        .faq-card,
        .section-header
    `);

    animatedElements.forEach((el, index) => {
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;

        observer.observe(el);
    });
}

/*===================================
  Card Animations
  ===================================*/
function initCardAnimations() {
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('.category-link');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });

        // Add subtle scale animation on touch devices
        if ('ontouchstart' in window) {
            card.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });

            card.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });

    // Tutorial cards
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    tutorialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.placeholder-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'all 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.placeholder-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

/*===================================
  Bento Cards Scroll Shimmer Effects
  ===================================*/
function initBentoScrollEffects() {
    const bentoCards = document.querySelectorAll('.bento-card');

    if (bentoCards.length === 0) return;

    // Throttled scroll handler for better performance
    const handleScroll = throttle(function() {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;

        bentoCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardTop = rect.top + scrollY;
            const cardCenter = cardTop + rect.height / 2;

            // Calculate scroll progress relative to card position
            // Values range from 0 to 1 as card moves through viewport
            const scrollProgress = (scrollY + windowHeight / 2 - cardTop) / (windowHeight + rect.height);

            // Ensure values are between 0 and 1
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // Calculate shimmer angle that changes with scroll
            // Angle rotates from -45deg to 135deg as you scroll
            const shimmerAngle = -45 + (clampedProgress * 180);

            // Calculate gradient position that shifts with scroll
            // Position moves from -50% to 150% creating sweep effect
            const gradientPosition = -50 + (clampedProgress * 200);

            // Calculate brightness shift (very subtle pulsing effect)
            const brightness = 1 + (Math.sin(clampedProgress * Math.PI) * 0.05);

            // Calculate saturation boost (barely noticeable)
            const saturation = 1 + (Math.sin(clampedProgress * Math.PI) * 0.08);

            // Apply shimmer effect using CSS custom properties
            card.style.setProperty('--shimmer-angle', `${shimmerAngle}deg`);
            card.style.setProperty('--shimmer-position', `${gradientPosition}%`);
            card.style.setProperty('--scroll-brightness', brightness);
            card.style.setProperty('--scroll-saturation', saturation);

            // Add dynamic gradient overlay that sweeps across
            const placeholder = card.querySelector('.bento-placeholder');
            if (placeholder) {
                // Create subtle light sweep effect
                const lightIntensity = Math.sin(clampedProgress * Math.PI * 2) * 0.1;
                placeholder.style.filter = `brightness(${brightness}) saturate(${saturation}) contrast(${1 + lightIntensity * 0.03})`;
            }

            // Add barely noticeable shimmer to overlay text
            const overlay = card.querySelector('.bento-overlay');
            if (overlay) {
                const overlayOpacity = 0.85 + (Math.sin(clampedProgress * Math.PI) * 0.03);
                overlay.style.setProperty('--overlay-opacity', overlayOpacity);
            }
        });
    }, 16); // ~60fps

    // Initial call
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Also update on resize
    window.addEventListener('resize', debounce(handleScroll, 100));
}

/*===================================
  Contact Form Handling
  ===================================*/
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            // In a real application, you would send this data to a server
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                // Hide message after 5 seconds
                setTimeout(() => {
                    hideFormMessage();
                }, 5000);
            }, 1500);
        });
    }
}

/*===================================
  Form Helper Functions
  ===================================*/
function showFormMessage(message, type) {
    const messageElement = document.getElementById('form-message');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        messageElement.style.display = 'block';

        // Smooth scroll to message
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function hideFormMessage() {
    const messageElement = document.getElementById('form-message');
    if (messageElement) {
        messageElement.style.display = 'none';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*===================================
  Utility Functions
  ===================================*/

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/*===================================
  Add to favorites functionality
  ===================================*/
function addToFavorites(itemId, itemType) {
    // Get existing favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('beautyFavorites')) || [];

    // Check if already favorited
    const exists = favorites.some(fav => fav.id === itemId && fav.type === itemType);

    if (!exists) {
        favorites.push({ id: itemId, type: itemType });
        localStorage.setItem('beautyFavorites', JSON.stringify(favorites));
        return true;
    }

    return false;
}

/*===================================
  Performance Optimizations
  ===================================*/

// Lazy loading images (if we add real images later)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
}

/*===================================
  Browser Support Detection
  ===================================*/
function checkBrowserSupport() {
    // Check for CSS Grid support
    const supportsGrid = CSS.supports('display', 'grid');

    if (!supportsGrid) {
        console.warn('CSS Grid is not supported in this browser. Layout may not display correctly.');
    }

    // Check for IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver is not supported. Animations may not work.');
        // Fallback: show all elements immediately
        document.querySelectorAll('[style*="opacity"]').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
}

// Run browser support check
checkBrowserSupport();

/*===================================
  Console Art (Easter Egg)
  ===================================*/
console.log('%c✨ Radiant Beauty ✨', 'font-size: 20px; color: #e91e63; font-weight: bold;');
console.log('%cWelcome to Radiant Beauty! 💄', 'font-size: 14px; color: #d4af37;');
console.log('%cExplore our beauty tips and tutorials!', 'font-size: 12px; color: #666;');
