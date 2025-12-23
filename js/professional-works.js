/*===================================
  Professional Works Showcase
  Beauty Platform
  ===================================*/

// Mock data for professional works
const professionalWorks = [
    {
        id: 1,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
        professional: 'Isabella Chen',
        category: 'makeup',
        description: {
            en: 'Glamorous bridal makeup with soft pink tones and flawless finish',
            ru: 'Гламурный свадебный макияж с мягкими розовыми тонами',
            uz: 'Yumshoq pushti ranglar bilan jozibali nikoh makiyaji'
        }
    },
    {
        id: 2,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80',
        professional: 'Sofia Martinez',
        category: 'nails',
        description: {
            en: 'Intricate floral nail art design with pastel colors',
            ru: 'Сложный цветочный дизайн ногтей с пастельными цветами',
            uz: 'Pastel ranglar bilan murakkab gul naqshli tirnoq dizayni'
        }
    },
    {
        id: 3,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
        professional: 'Olivia Thompson',
        category: 'hair',
        description: {
            en: 'Beautiful balayage hair coloring with natural-looking highlights',
            ru: 'Красивое окрашивание балаяж с естественными бликами',
            uz: 'Tabiiy ko\'rinishdagi yorug\'lik bilan chiroyli balayaj bo\'yash'
        }
    },
    {
        id: 4,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
        professional: 'Lily Parker',
        category: 'makeup',
        description: {
            en: 'Creative editorial makeup with bold colors and artistic expression',
            ru: 'Креативный редакционный макияж с яркими цветами',
            uz: 'Yorqin ranglar bilan ijodiy tahririyat makiyaji'
        }
    },
    {
        id: 5,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
        professional: 'Ava Williams',
        category: 'nails',
        description: {
            en: 'Elegant French manicure with subtle embellishments',
            ru: 'Элегантный французский маникюр с тонкими украшениями',
            uz: 'Nozik bezaklar bilan nafis fransuz manikuri'
        }
    },
    {
        id: 6,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        professional: 'Olivia Thompson',
        category: 'hair',
        description: {
            en: 'Romantic updo hairstyle perfect for special occasions',
            ru: 'Романтическая прическа идеальна для особых случаев',
            uz: 'Maxsus tadbirlar uchun mukammal romantik soch turmak'
        }
    },
    {
        id: 7,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
        professional: 'Mia Anderson',
        category: 'skincare',
        description: {
            en: 'Radiant skin after professional facial treatment',
            ru: 'Сияющая кожа после профессиональной процедуры для лица',
            uz: 'Professional yuz muolajasidan keyin porloq teri'
        }
    },
    {
        id: 8,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?auto=format&fit=crop&w=800&q=80',
        professional: 'Isabella Chen',
        category: 'makeup',
        description: {
            en: 'Evening makeup look with smoky eyes and nude lips',
            ru: 'Вечерний макияж со смоки айз и нюдовыми губами',
            uz: 'Tutunli ko\'zlar va tabiiy lablar bilan kechki makiyaj'
        }
    },
    {
        id: 9,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
        professional: 'Emma Rodriguez',
        category: 'brows',
        description: {
            en: 'Perfectly shaped and laminated brows with natural arch',
            ru: 'Идеально оформленные и ламинированные брови с естественным изгибом',
            uz: 'Tabiiy egri bilan mukammal shakllangan va laminatsiyalangan qoshlar'
        }
    },
    {
        id: 10,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
        professional: 'Sofia Martinez',
        category: 'nails',
        description: {
            en: 'Trendy geometric nail design with metallic accents',
            ru: 'Трендовый геометрический дизайн ногтей с металлическими акцентами',
            uz: 'Metall aksent bilan zamonaviy geometrik tirnoq dizayni'
        }
    },
    {
        id: 11,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
        professional: 'Lily Parker',
        category: 'makeup',
        description: {
            en: 'Natural dewy makeup enhancing natural beauty',
            ru: 'Натуральный свежий макияж, подчеркивающий естественную красоту',
            uz: 'Tabiiy go\'zallikni ta\'kidlaydigan tabiiy toza makiyaj'
        }
    },
    {
        id: 12,
        type: 'image',
        media: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
        professional: 'Ava Williams',
        category: 'nails',
        description: {
            en: 'Ombre nail design transitioning from pink to nude',
            ru: 'Дизайн омбре на ногтях с переходом от розового к нюдовому',
            uz: 'Pushti rangdan tabiiy rangga o\'tadigan ombre tirnoq dizayni'
        }
    }
];

// Current work index for modal navigation
let currentWorkIndex = 0;

/*===================================
  Initialize Professional Works
  ===================================*/

document.addEventListener('DOMContentLoaded', function() {
    initProfessionalWorks();
    initWorkModal();
});

function initProfessionalWorks() {
    const worksGrid = document.getElementById('works-grid');
    if (!worksGrid) return;

    // Get current language
    const currentLang = typeof getLanguage === 'function' ? getLanguage() : 'en';

    // Render works
    worksGrid.innerHTML = professionalWorks.map((work, index) => {
        const description = work.description[currentLang] || work.description.en;
        return createWorkCard(work, index, currentLang);
    }).join('');

    // Add click listeners to works
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
        card.addEventListener('click', () => openWorkModal(index));
    });
}

function createWorkCard(work, index, lang) {
    const categoryLabel = getCategoryLabel(work.category, lang);

    return `
        <div class="work-card" data-index="${index}" data-category="${work.category}">
            <div class="work-image">
                <img src="${work.media}" alt="${work.professional}">
                <div class="work-overlay">
                    <div class="work-zoom-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="work-info">
                <span class="work-category">${categoryLabel}</span>
                <p class="work-professional">${work.professional}</p>
            </div>
        </div>
    `;
}

function getCategoryLabel(category, lang) {
    const labels = {
        makeup: { en: 'Makeup', ru: 'Макияж', uz: 'Makiyaj' },
        nails: { en: 'Nails', ru: 'Ногти', uz: 'Tirnoqlar' },
        hair: { en: 'Hair', ru: 'Волосы', uz: 'Soch' },
        skincare: { en: 'Skincare', ru: 'Уход за Кожей', uz: 'Teri Parvarishi' },
        brows: { en: 'Brows & Lashes', ru: 'Брови и Ресницы', uz: 'Qoshlar va Kipriklar' }
    };

    return labels[category] ? labels[category][lang] : category;
}

/*===================================
  Work Modal Functionality
  ===================================*/

function initWorkModal() {
    const modal = document.getElementById('work-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');

    if (!modal) return;

    // Close modal
    modalClose.addEventListener('click', closeWorkModal);
    modalOverlay.addEventListener('click', closeWorkModal);

    // Navigation
    modalPrev.addEventListener('click', () => navigateWork(-1));
    modalNext.addEventListener('click', () => navigateWork(1));

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') closeWorkModal();
        if (e.key === 'ArrowLeft') navigateWork(-1);
        if (e.key === 'ArrowRight') navigateWork(1);
    });
}

function openWorkModal(index) {
    currentWorkIndex = index;
    displayWorkInModal(index);

    const modal = document.getElementById('work-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeWorkModal() {
    const modal = document.getElementById('work-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateWork(direction) {
    currentWorkIndex += direction;

    // Loop around
    if (currentWorkIndex < 0) {
        currentWorkIndex = professionalWorks.length - 1;
    } else if (currentWorkIndex >= professionalWorks.length) {
        currentWorkIndex = 0;
    }

    displayWorkInModal(currentWorkIndex);
}

function displayWorkInModal(index) {
    const work = professionalWorks[index];
    if (!work) return;

    // Get current language
    const currentLang = typeof getLanguage === 'function' ? getLanguage() : 'en';

    // Update modal content
    const modalMedia = document.getElementById('modal-media');
    const modalCategory = document.getElementById('modal-category');
    const modalProfessional = document.getElementById('modal-professional');
    const modalDescription = document.getElementById('modal-description');

    // Display media
    if (work.type === 'image') {
        modalMedia.innerHTML = `<img src="${work.media}" alt="${work.professional}">`;
    } else if (work.type === 'video') {
        modalMedia.innerHTML = `
            <video controls autoplay>
                <source src="${work.media}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    }

    // Display info
    modalCategory.textContent = getCategoryLabel(work.category, currentLang);
    modalProfessional.textContent = work.professional;
    modalDescription.textContent = work.description[currentLang] || work.description.en;
}
