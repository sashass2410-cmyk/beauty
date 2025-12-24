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

    const profileHTML = `
        <!-- Profile Header -->
        <section class="profile-header">
            <div class="container">
                <div class="profile-header-content">
                    <div class="profile-image-large">
                        <img src="${prof.photo}" alt="${prof.name}">
                    </div>
                    <div class="profile-header-info">
                        <h1 class="profile-name">${prof.name}</h1>
                        <p class="profile-specializations-large">${specializationsText}</p>
                        <div class="profile-rating-large">
                            <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                            <span class="rating-text">${prof.rating} (${prof.reviewCount} reviews)</span>
                        </div>
                        <p class="profile-location-large">📍 ${location}</p>
                        <div class="profile-actions">
                            <button class="btn btn-primary btn-large">Book Appointment</button>
                            <button class="btn btn-secondary btn-large">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="profile-section">
            <div class="container">
                <h2 class="profile-section-title">About</h2>
                <p class="profile-bio-full">${bio}</p>
            </div>
        </section>

        <!-- Services & Pricing -->
        <section class="profile-section">
            <div class="container">
                <h2 class="profile-section-title">Services & Pricing</h2>
                <div class="services-list">
                    ${prof.services.map(service => `
                        <div class="service-item">
                            <div class="service-info">
                                <h3 class="service-name">${service.name}</h3>
                                <p class="service-duration">⏱️ ${service.duration}</p>
                            </div>
                            <div class="service-price">${service.price}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Portfolio Gallery -->
        <section class="profile-section">
            <div class="container">
                <h2 class="profile-section-title">Portfolio</h2>
                <div class="portfolio-grid">
                    ${prof.portfolio.map((item, index) => `
                        <div class="portfolio-item">
                            <img src="${item.url}" alt="Portfolio image ${index + 1}" class="portfolio-img">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Calendar/Availability -->
        <section class="profile-section">
            <div class="container">
                <h2 class="profile-section-title">Availability</h2>
                <div class="calendar-placeholder">
                    <div class="calendar-header">
                        <h3>January 2025</h3>
                        <div class="calendar-nav">
                            <button class="calendar-nav-btn">←</button>
                            <button class="calendar-nav-btn">→</button>
                        </div>
                    </div>
                    <div class="calendar-grid">
                        <div class="calendar-day-header">Mon</div>
                        <div class="calendar-day-header">Tue</div>
                        <div class="calendar-day-header">Wed</div>
                        <div class="calendar-day-header">Thu</div>
                        <div class="calendar-day-header">Fri</div>
                        <div class="calendar-day-header">Sat</div>
                        <div class="calendar-day-header">Sun</div>
                        ${generateCalendarDays()}
                    </div>
                    <p class="calendar-note">Select a date to view available time slots</p>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta">
            <div class="container">
                <div class="cta-content">
                    <h2 class="cta-title">Ready to Book?</h2>
                    <p class="cta-description">Schedule your appointment with ${prof.name} today!</p>
                    <a href="#" class="btn btn-primary btn-large">Book Now</a>
                </div>
            </div>
        </section>
    `;

    container.innerHTML = profileHTML;
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
    container.innerHTML = `
        <section class="error-section" style="padding: var(--spacing-2xl) 0; text-align: center;">
            <div class="container">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-md);">😕</div>
                <h2 class="section-title">Professional Not Found</h2>
                <p class="section-subtitle">The professional you're looking for doesn't exist or has been removed.</p>
                <a href="professionals.html" class="btn btn-primary btn-large" style="margin-top: var(--spacing-lg);">Browse All Professionals</a>
            </div>
        </section>
    `;
}
