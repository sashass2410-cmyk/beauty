/*===================================
  Language Switcher Functionality
  ===================================*/

// Default language
const DEFAULT_LANGUAGE = 'en';

// Language name mappings
const LANGUAGE_NAMES = {
    en: 'EN',
    ru: 'RU',
    uz: 'UZ'
};

// Initialize language switcher
function initLanguageSwitcher() {
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLanguageSpan = document.getElementById('current-language');

    if (!languageBtn || !languageDropdown) return;

    // Get saved language or use default
    const savedLanguage = getLanguage();

    // Apply saved language on page load
    setLanguage(savedLanguage);
    updateCurrentLanguageDisplay(savedLanguage);
    updateActiveOption(savedLanguage);

    // Toggle dropdown
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });

    // Language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const selectedLang = this.getAttribute('data-lang');

            // Update language
            setLanguage(selectedLang);
            updateCurrentLanguageDisplay(selectedLang);
            updateActiveOption(selectedLang);

            // Close dropdown
            languageDropdown.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('active');
        }
    });

    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && languageDropdown.classList.contains('active')) {
            languageDropdown.classList.remove('active');
        }
    });
}

// Get current language from localStorage
function getLanguage() {
    return localStorage.getItem('selectedLanguage') || DEFAULT_LANGUAGE;
}

// Save and apply language
function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyTranslations(lang);

    // Re-render professional cards if they exist (for dynamic content translation)
    reRenderProfessionalCards();
}

// Re-render professional cards to reflect language change
function reRenderProfessionalCards() {
    // Featured professionals on homepage
    if (typeof initFeaturedProfessionals === 'function') {
        initFeaturedProfessionals();
    }

    // Service-specific professionals
    if (typeof initServiceProfessionals === 'function') {
        initServiceProfessionals();
    }

    // All professionals page
    if (typeof displayProfessionals === 'function' && typeof professionals !== 'undefined') {
        // Get current filter
        const activeFilter = document.querySelector('.filter-btn.active');
        const filterValue = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';

        // Re-display with current filter
        if (filterValue === 'all') {
            displayProfessionals(professionals);
        } else {
            const filtered = professionals.filter(prof => {
                const specs = prof.specializations.en || prof.specializations;
                return Array.isArray(specs) ? specs.includes(filterValue) : specs === filterValue;
            });
            displayProfessionals(filtered);
        }
    }
}

// Update current language display
function updateCurrentLanguageDisplay(lang) {
    const currentLanguageSpan = document.getElementById('current-language');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = LANGUAGE_NAMES[lang] || 'EN';
    }
}

// Update active state of language options
function updateActiveOption(lang) {
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Apply translations to page
function applyTranslations(lang) {
    if (!translations || !translations[lang]) {
        console.warn(`Translations not found for language: ${lang}`);
        return;
    }

    const currentTranslations = translations[lang];

    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(currentTranslations, key);

        if (translation) {
            // Check if element is an input with placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                }
            } else {
                // Regular text content
                element.textContent = translation;
            }
        }
    });

    // Handle placeholder translations separately
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getNestedTranslation(currentTranslations, key);
        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Get nested translation value from object path (e.g., "nav.home")
function getNestedTranslation(obj, path) {
    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
        if (current[key] === undefined) {
            return null;
        }
        current = current[key];
    }

    return current;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
});

// Export functions for external use
if (typeof window !== 'undefined') {
    window.getLanguage = getLanguage;
    window.setLanguage = setLanguage;
    window.applyTranslations = applyTranslations;
}
