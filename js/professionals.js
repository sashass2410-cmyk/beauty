/*===================================
  Professionals Page JavaScript
  ===================================*/

let currentFilter = 'all';

// Initialize professionals page
document.addEventListener('DOMContentLoaded', function() {
    loadAllProfessionals();
    initFilterButtons();
});

// Load all professionals
function loadAllProfessionals() {
    const grid = document.getElementById('all-professionals-grid');

    if (!grid || typeof getAllProfessionals === 'undefined') return;

    const allProfs = getAllProfessionals();

    displayProfessionals(allProfs);
}

// Display professionals in grid
function displayProfessionals(profsToDisplay) {
    const grid = document.getElementById('all-professionals-grid');

    if (!grid) return;

    if (profsToDisplay.length === 0) {
        grid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: var(--spacing-xl); color: var(--gray-600);">No professionals found matching your filter.</p>';
        return;
    }

    grid.innerHTML = profsToDisplay.map(prof => createProfessionalCard(prof)).join('');

    // Apply translations to dynamically loaded cards
    if (typeof applyTranslations === 'function') {
        const currentLang = typeof getLanguage === 'function' ? getLanguage() : 'en';
        applyTranslations(currentLang);
    }
}

// Initialize filter buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filter = this.dataset.filter;
            currentFilter = filter;

            // Filter professionals
            filterProfessionals(filter);
        });
    });
}

// Filter professionals by category
function filterProfessionals(filter) {
    if (typeof getAllProfessionals === 'undefined') return;

    const allProfs = getAllProfessionals();

    if (filter === 'all') {
        displayProfessionals(allProfs);
        return;
    }

    // Filter by internal category keys (language-independent)
    const filtered = allProfs.filter(prof => {
        // Check if professional has categories array
        if (!prof.categories || !Array.isArray(prof.categories)) {
            return false;
        }

        // Check if the filter matches any of the professional's categories
        return prof.categories.includes(filter);
    });

    displayProfessionals(filtered);
}
