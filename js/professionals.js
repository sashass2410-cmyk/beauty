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

// Filter professionals by specialization
function filterProfessionals(filter) {
    if (typeof getAllProfessionals === 'undefined') return;

    const allProfs = getAllProfessionals();

    if (filter === 'all') {
        displayProfessionals(allProfs);
        return;
    }

    // Filter by specialization
    const filtered = allProfs.filter(prof =>
        prof.specializations.some(spec =>
            spec.toLowerCase().includes(filter.toLowerCase())
        )
    );

    displayProfessionals(filtered);
}
