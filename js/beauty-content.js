/*===================================
  Beauty Content Page JavaScript
  Filter functionality for videos and articles
  ===================================*/

document.addEventListener('DOMContentLoaded', function() {
    initContentFilters();
});

function initContentFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const videoCards = document.querySelectorAll('.video-card');
    const articleCards = document.querySelectorAll('.article-card');

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter content
            filterContent(category, videoCards, articleCards);
        });
    });
}

function filterContent(category, videoCards, articleCards) {
    // Filter videos
    videoCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            // Add fade-in animation
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.classList.add('hidden');
        }
    });

    // Filter articles
    articleCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
            // Add fade-in animation
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.classList.add('hidden');
        }
    });
}

// Add CSS animation for fade-in effect
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
