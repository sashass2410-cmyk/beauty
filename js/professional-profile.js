/*===================================
  Professional Profile Page JavaScript
  ===================================*/

document.addEventListener('DOMContentLoaded', function() {
    loadProfessionalProfile();
});

function loadProfessionalProfile() {
    // Get professional ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const profId = parseInt(urlParams.get('id'));

    if (!profId || typeof getProfessionalById === 'undefined') {
        showError();
        return;
    }

    const professional = getProfessionalById(profId);

    if (!professional) {
        showError();
        return;
    }

    renderProfile(professional);
    initBookingModal();
    initInstagramGallery();
}

// Helper: Generate star rating
function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star-icon filled">★</span>';
    }
    if (hasHalfStar) {
        stars += '<span class="star-icon half">★</span>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<span class="star-icon empty">☆</span>';
    }
    return stars;
}

// Helper: Format date
function formatReviewDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Helper: Get translation
function getTrans(key, lang = 'en') {
    if (typeof translations === 'undefined') return key;
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value || key;
}

function renderProfile(prof) {
    const container = document.getElementById('profile-content');

    // Get current language for translations
    const currentLang = typeof getLanguage === 'function' ? getLanguage() : 'en';

    // Get localized content
    const specializations = prof.specializations[currentLang] || prof.specializations.en || prof.specializations;
    const bio = prof.bio[currentLang] || prof.bio.en || prof.bio;
    const location = prof.location[currentLang] || prof.location.en || prof.location;

    // Handle both array and string specializations
    const specializationsText = Array.isArray(specializations) ? specializations.join(' • ') : specializations;

    // Generate star rating
    const starRating = generateStarsHTML(prof.rating);

    // Trust badges
    const trustBadges = `
        ${prof.verified ? `<span class="trust-badge verified"><span class="badge-icon">✓</span> ${getTrans('profile.verified', currentLang)}</span>` : ''}
        ${prof.yearsOfExperience ? `<span class="trust-badge experience">${prof.yearsOfExperience}+ ${getTrans('profile.yearsExp', currentLang)}</span>` : ''}
    `;

    const profileHTML = `
        <!-- Profile Header -->
        <section class="profile-header">
            <div class="container">
                <div class="profile-header-content">
                    <div class="profile-image-large">
                        <img src="${prof.photo}" alt="${prof.name}" loading="lazy">
                    </div>
                    <div class="profile-header-info">
                        <div class="profile-name-row">
                            <h1 class="profile-name">${prof.name}</h1>
                            <div class="trust-badges">${trustBadges}</div>
                        </div>
                        <p class="profile-specializations-large">${specializationsText}</p>
                        <div class="profile-rating-large">
                            <div class="star-rating">${starRating}</div>
                            <span class="rating-text">${prof.rating} <span class="rating-count">(${prof.reviewCount} ${getTrans('profile.reviews', currentLang)})</span></span>
                        </div>
                        <p class="profile-location-large">📍 ${location}</p>
                        <div class="profile-actions">
                            <button class="btn btn-primary btn-large" id="request-booking-btn" data-i18n="profile.requestBooking">${getTrans('profile.requestBooking', currentLang)}</button>
                            <button class="btn btn-secondary btn-large" data-i18n="profile.message">${getTrans('profile.message', currentLang)}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="profile-section">
            <div class="container">
                <h2 class="profile-section-title" data-i18n="profile.aboutTitle">${getTrans('profile.aboutTitle', currentLang)}</h2>
                <p class="profile-bio-full">${bio}</p>
            </div>
        </section>

        <!-- Services & Pricing -->
        <section class="profile-section">
            <div class="container">
                <h2 class="profile-section-title" data-i18n="profile.servicesTitle">${getTrans('profile.servicesTitle', currentLang)}</h2>
                <div class="services-list-enhanced">
                    ${prof.services.map(service => `
                        <div class="service-item-enhanced">
                            <div class="service-left">
                                <h3 class="service-name">${service.name}</h3>
                                <p class="service-duration">
                                    <svg class="duration-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    ${service.duration}
                                </p>
                            </div>
                            <div class="service-price">${service.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Instagram-style Gallery -->
        <section class="profile-section instagram-gallery-section">
            <div class="container">
                <h2 class="profile-section-title" data-i18n="profile.portfolioTitle">${getTrans('profile.portfolioTitle', currentLang)}</h2>
                <div class="instagram-gallery" id="instagram-gallery">
                    ${prof.portfolio.map((item, index) => `
                        <div class="gallery-item" data-index="${index}">
                            ${item.type === 'video' ? `
                                <video class="gallery-media" muted loop playsinline data-src="${item.url}">
                                    <source src="${item.url}" type="video/mp4">
                                </video>
                                <div class="video-play-overlay">▶</div>
                            ` : `
                                <img class="gallery-media" src="${item.url}" alt="Portfolio ${index + 1}" loading="lazy">
                            `}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Reviews Section -->
        <section class="profile-section reviews-section">
            <div class="container">
                <div class="reviews-header">
                    <h2 class="profile-section-title" data-i18n="profile.reviewsTitle">${getTrans('profile.reviewsTitle', currentLang)}</h2>
                    <div class="reviews-summary">
                        <div class="reviews-average">
                            <span class="average-number">${prof.rating}</span>
                            <div class="star-rating-small">${starRating}</div>
                        </div>
                        <p class="reviews-count">${getTrans('profile.basedOn', currentLang)} ${prof.reviewCount} ${getTrans('profile.reviews', currentLang)}</p>
                    </div>
                </div>
                <div class="reviews-list">
                    ${(prof.reviews || []).map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <div class="review-author">
                                    <div class="author-avatar">${review.clientName.charAt(0)}</div>
                                    <div class="author-info">
                                        <h4 class="author-name">${review.clientName}</h4>
                                        <p class="review-date">${formatReviewDate(review.date)}</p>
                                    </div>
                                </div>
                                <div class="review-rating">${generateStarsHTML(review.rating)}</div>
                            </div>
                            <p class="review-comment">${review.comment}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta">
            <div class="container">
                <div class="cta-content">
                    <h2 class="cta-title" data-i18n="profile.readyToBook">${getTrans('profile.readyToBook', currentLang)}</h2>
                    <p class="cta-description" data-i18n="profile.ctaDescription">${getTrans('profile.ctaDescription', currentLang).replace('{name}', prof.name)}</p>
                    <button class="btn btn-primary btn-large request-booking-cta" data-i18n="profile.requestBooking">${getTrans('profile.requestBooking', currentLang)}</button>
                </div>
            </div>
        </section>
    `;

    container.innerHTML = profileHTML;

    // Attach event listeners
    attachBookingListeners();
}

// Initialize booking modal
function initBookingModal() {
    const modalHTML = `
        <div class="booking-modal" id="booking-modal">
            <div class="modal-overlay-booking"></div>
            <div class="modal-content-booking">
                <button class="modal-close-booking" id="modal-close-booking">&times;</button>
                <h2 class="modal-title" data-i18n="profile.requestBooking">Request Booking</h2>
                <form class="booking-form" id="booking-form">
                    <div class="form-group">
                        <label for="booking-name" data-i18n="profile.yourName">Your Name</label>
                        <input type="text" id="booking-name" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label for="booking-email" data-i18n="profile.email">Email</label>
                        <input type="email" id="booking-email" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label for="booking-phone" data-i18n="profile.phone">Phone</label>
                        <input type="tel" id="booking-phone" class="form-input">
                    </div>
                    <div class="form-group">
                        <label for="booking-service" data-i18n="profile.selectService">Select Service</label>
                        <select id="booking-service" class="form-input" required>
                            <option value="">Choose a service...</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="booking-date" data-i18n="profile.preferredDate">Preferred Date</label>
                        <input type="date" id="booking-date" class="form-input" required>
                    </div>
                    <div class="form-group">
                        <label for="booking-message" data-i18n="profile.message">Additional Message</label>
                        <textarea id="booking-message" class="form-textarea" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" data-i18n="profile.submitRequest">Submit Request</button>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Attach booking button listeners
function attachBookingListeners() {
    const bookingBtns = document.querySelectorAll('#request-booking-btn, .request-booking-cta');
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('modal-close-booking');
    const form = document.getElementById('booking-form');

    bookingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeBookingModal);
    }

    if (modal) {
        modal.querySelector('.modal-overlay-booking')?.addEventListener('click', closeBookingModal);
    }

    if (form) {
        form.addEventListener('submit', handleBookingSubmit);
    }
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    // In a real app, this would send the booking request to the server
    alert('Booking request submitted! The professional will contact you soon.');
    closeBookingModal();
    e.target.reset();
}

// Initialize Instagram-style gallery with video autoplay
function initInstagramGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const video = item.querySelector('video');

        if (video) {
            // Lazy load video
            if (video.dataset.src) {
                video.src = video.dataset.src;
            }

            // Desktop: hover to play
            item.addEventListener('mouseenter', () => {
                video.play().catch(err => console.log('Video play failed:', err));
            });

            item.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });

            // Mobile: tap to play/pause
            item.addEventListener('click', () => {
                if (video.paused) {
                    video.play().catch(err => console.log('Video play failed:', err));
                } else {
                    video.pause();
                }
            });
        }
    });
}

function generateCalendarDays() {
    let daysHTML = '';
    const today = 13; // Mock: January 13, 2025
    const availableDays = [14, 15, 17, 20, 21, 22, 24, 27, 28]; // Mock available days

    // Add empty cells for offset (if month doesn't start on Monday)
    for (let i = 0; i < 4; i++) {
        daysHTML += '<div class="calendar-day empty"></div>';
    }

    // Generate days 1-31
    for (let day = 1; day <= 31; day++) {
        const isPast = day < today;
        const isAvailable = availableDays.includes(day) && !isPast;
        const isToday = day === today;

        let classes = 'calendar-day';
        if (isPast) classes += ' past';
        if (isAvailable) classes += ' available';
        if (isToday) classes += ' today';

        daysHTML += `<div class="${classes}">${day}</div>`;
    }

    return daysHTML;
}

function showError() {
    const container = document.getElementById('profile-content');
    const currentLang = typeof getLanguage === 'function' ? getLanguage() : 'en';

    container.innerHTML = `
        <section class="error-section" style="padding: var(--spacing-2xl) 0; text-align: center;">
            <div class="container">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-md);">😕</div>
                <h2 class="section-title">${getTrans('profile.notFound', currentLang)}</h2>
                <p class="section-subtitle">${getTrans('profile.notFoundDesc', currentLang)}</p>
                <a href="professionals.html" class="btn btn-primary btn-large" style="margin-top: var(--spacing-lg);" data-i18n="profile.browseAll">${getTrans('profile.browseAll', currentLang)}</a>
            </div>
        </section>
    `;
}
