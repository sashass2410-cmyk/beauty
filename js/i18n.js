/*===================================
  Internationalization (i18n)
  Language Translations
  ===================================*/

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            professionals: "Professionals",
            beautyPage: "BeYouTy",
            account: "Account"
        },

        // Hero Section
        hero: {
            headline: "Professional Beauty Services",
            accent: "Perfected",
            subheading: "Makeup, Nails, Brow Art, Aesthetics & More",
            bookService: "Book a Service",
            exploreServices: "Explore Services",
            scrollToExplore: "Scroll to explore"
        },

        // Services Section
        services: {
            title: "Our Services",
            subtitle: "Click a service to learn more",
            makeup: "Makeup",
            makeupDesc: "Professional artistry",
            nails: "Nails",
            nailsDesc: "Manicure & art",
            brows: "Brows",
            browsDesc: "Shaping & lamination",
            lashes: "Lashes",
            lashesDesc: "Extensions",
            lips: "Lips",
            lipsDesc: "Enhancement",
            skincare: "Skincare",
            skincareDesc: "Facial treatments",
            hair: "Hair",
            hairDesc: "Styling & color",
            beauty: "Beauty",
            beautyDesc: "Complete care"
        },

        // Featured Professionals
        professionals: {
            title: "Featured Beauty Professionals",
            subtitle: "Discover talented experts ready to serve you",
            viewAll: "View All Professionals",
            viewProfile: "View Profile"
        },

        // Features Section
        features: {
            title: "Why Choose Our Platform?",
            subtitle: "Connecting clients with talented beauty professionals",
            verified: "Verified Professionals",
            verifiedDesc: "Browse portfolios of certified and experienced beauty experts",
            booking: "Easy Booking",
            bookingDesc: "View availability and book appointments that fit your schedule",
            reviews: "Trusted Reviews",
            reviewsDesc: "Read real reviews from clients to find the perfect match",
            allServices: "All Services",
            allServicesDesc: "Find professionals for any beauty service in one place"
        },

        // CTA Section
        cta: {
            title: "Are You a Beauty Professional?",
            description: "Join our platform and connect with clients looking for your expertise. Showcase your portfolio and grow your business.",
            joinButton: "Join as a Professional"
        },

        // Footer
        footer: {
            description: "Connecting clients with talented beauty professionals. Your one-stop platform for all beauty services.",
            servicesTitle: "Services",
            makeup: "Makeup",
            hairStyling: "Hair Styling",
            nails: "Nails",
            skincare: "Skincare",
            platformTitle: "Platform",
            findProfessionals: "Find Professionals",
            joinProfessional: "Join as Professional",
            home: "Home",
            connectTitle: "Connect",
            copyright: "Radiant Beauty Platform. All rights reserved."
        },

        // Makeup Page
        makeup: {
            pageTitle: "Makeup Professionals",
            pageDescription: "Find talented makeup artists for any occasion",
            browseTitle: "Browse Makeup Artists",
            browseSubtitle: "Explore our talented makeup professionals",
            ctaTitle: "Are You a Makeup Artist?",
            ctaDescription: "Join our platform and showcase your makeup artistry to clients.",
            ctaButton: "Join as Professional"
        },

        // Nails Page
        nails: {
            pageTitle: "Nail Professionals",
            pageDescription: "Discover skilled nail artists and manicurists",
            browseTitle: "Browse Nail Artists",
            browseSubtitle: "Find the perfect nail artist for your style",
            ctaTitle: "Are You a Nail Artist?",
            ctaDescription: "Join our platform and grow your nail art business.",
            ctaButton: "Join as Professional"
        },

        // Hair Page
        hair: {
            pageTitle: "Hair Styling Professionals",
            pageDescription: "Connect with expert hair stylists",
            browseTitle: "Browse Hair Stylists",
            browseSubtitle: "Find the perfect stylist for your hair",
            ctaTitle: "Are You a Hair Stylist?",
            ctaDescription: "Join our platform and connect with clients seeking your expertise.",
            ctaButton: "Join as Professional"
        },

        // Skincare Page
        skincare: {
            pageTitle: "Skincare Professionals",
            pageDescription: "Find expert skincare specialists and aestheticians",
            browseTitle: "Browse Skincare Specialists",
            browseSubtitle: "Discover talented skincare professionals",
            ctaTitle: "Are You a Skincare Specialist?",
            ctaDescription: "Join our platform and help clients achieve beautiful skin.",
            ctaButton: "Join as Professional"
        },

        // Professionals Directory Page
        professionalsPage: {
            pageTitle: "All Beauty Professionals",
            pageDescription: "Browse our complete directory of beauty professionals",
            sectionTitle: "Our Professionals",
            sectionSubtitle: "Discover talented beauty experts ready to serve you",
            filterAll: "All",
            filterMakeup: "Makeup",
            filterNails: "Nails",
            filterHair: "Hair",
            filterSkincare: "Skincare",
            filterBrows: "Brows",
            ctaTitle: "Are You a Beauty Professional?",
            ctaDescription: "Join our platform and connect with clients looking for your expertise.",
            ctaButton: "Join as Professional"
        },

        // Individual Professional Page
        professional: {
            loading: "Loading professional profile..."
        },

        // Contact/Login Page
        contact: {
            pageTitle: "Welcome",
            pageDescription: "Login as a client or join as a beauty professional",
            clientTitle: "Client Login",
            clientDescription: "Access your account to book appointments and manage your beauty services",
            emailLabel: "Email Address",
            passwordLabel: "Password",
            nameLabel: "Full Name",
            specializationLabel: "Specialization",
            clientLoginButton: "Login as Client",
            clientFooter: "Don't have an account? Contact our support team to get started.",
            professionalTitle: "Beauty Professional",
            professionalDescription: "Join our platform and connect with clients looking for your services",
            selectSpecialty: "Select Your Specialty",
            specialtyMakeup: "Makeup Artist",
            specialtyNails: "Nail Artist",
            specialtyHair: "Hair Stylist",
            specialtySkincare: "Skincare Specialist",
            specialtyBrows: "Brow Artist",
            specialtyCosmetology: "Cosmetologist",
            professionalJoinButton: "Join as Professional",
            professionalFooter: "Already have an account? Contact support to access your dashboard.",
            benefitsTitle: "Why Join Our Platform?",
            benefitsSubtitle: "Everything you need to grow your beauty business",
            benefit1Title: "Reach More Clients",
            benefit1Description: "Get discovered by clients actively searching for beauty services",
            benefit2Title: "Manage Bookings",
            benefit2Description: "Easy scheduling and appointment management tools",
            benefit3Title: "Build Your Brand",
            benefit3Description: "Showcase your portfolio and grow your reputation",
            benefit4Title: "Flexible Working",
            benefit4Description: "Work on your own schedule and set your own rates"
        }
    },

    ru: {
        // Навигация
        nav: {
            home: "Главная",
            professionals: "Специалисты",
            beautyPage: "BeYouTy",
            account: "Аккаунт"
        },

        // Главный баннер
        hero: {
            headline: "Профессиональные Бьюти Услуги",
            accent: "Совершенство",
            subheading: "Макияж, Ногти, Брови, Эстетика и Многое Другое",
            bookService: "Записаться",
            exploreServices: "Наши Услуги",
            scrollToExplore: "Листайте дальше"
        },

        // Раздел услуг
        services: {
            title: "Наши Услуги",
            subtitle: "Нажмите на услугу, чтобы узнать больше",
            makeup: "Макияж",
            makeupDesc: "Профессиональное мастерство",
            nails: "Ногти",
            nailsDesc: "Маникюр и дизайн",
            brows: "Брови",
            browsDesc: "Моделирование и ламинирование",
            lashes: "Ресницы",
            lashesDesc: "Наращивание",
            lips: "Губы",
            lipsDesc: "Увеличение",
            skincare: "Уход за кожей",
            skincareDesc: "Процедуры для лица",
            hair: "Волосы",
            hairDesc: "Укладка и окрашивание",
            beauty: "Красота",
            beautyDesc: "Полный уход"
        },

        // Избранные специалисты
        professionals: {
            title: "Лучшие Бьюти Мастера",
            subtitle: "Откройте для себя талантливых экспертов, готовых вам помочь",
            viewAll: "Все Специалисты",
            viewProfile: "Профиль"
        },

        // Раздел преимуществ
        features: {
            title: "Почему Наша Платформа?",
            subtitle: "Связываем клиентов с талантливыми бьюти мастерами",
            verified: "Проверенные Специалисты",
            verifiedDesc: "Портфолио сертифицированных и опытных бьюти мастеров",
            booking: "Легкая Запись",
            bookingDesc: "Смотрите доступность и записывайтесь в удобное время",
            reviews: "Проверенные Отзывы",
            reviewsDesc: "Читайте реальные отзывы клиентов для правильного выбора",
            allServices: "Все Услуги",
            allServicesDesc: "Найдите специалистов для любых бьюти услуг в одном месте"
        },

        // Призыв к действию
        cta: {
            title: "Вы Бьюти Мастер?",
            description: "Присоединяйтесь к нашей платформе и находите клиентов. Покажите свое портфолио и развивайте бизнес.",
            joinButton: "Стать Специалистом"
        },

        // Подвал
        footer: {
            description: "Связываем клиентов с талантливыми бьюти мастерами. Ваша универсальная платформа для всех бьюти услуг.",
            servicesTitle: "Услуги",
            makeup: "Макияж",
            hairStyling: "Укладка Волос",
            nails: "Ногти",
            skincare: "Уход за Кожей",
            platformTitle: "Платформа",
            findProfessionals: "Найти Специалистов",
            joinProfessional: "Стать Специалистом",
            home: "Главная",
            connectTitle: "Связь",
            copyright: "Платформа Radiant Beauty. Все права защищены."
        },

        // Страница макияжа
        makeup: {
            pageTitle: "Мастера Макияжа",
            pageDescription: "Найдите талантливых визажистов для любого случая",
            browseTitle: "Визажисты",
            browseSubtitle: "Откройте для себя наших талантливых визажистов",
            ctaTitle: "Вы Визажист?",
            ctaDescription: "Присоединяйтесь к платформе и покажите свое мастерство клиентам.",
            ctaButton: "Стать Специалистом"
        },

        // Страница ногтей
        nails: {
            pageTitle: "Мастера Маникюра",
            pageDescription: "Найдите опытных мастеров маникюра и педикюра",
            browseTitle: "Мастера Маникюра",
            browseSubtitle: "Найдите идеального мастера для вашего стиля",
            ctaTitle: "Вы Мастер Маникюра?",
            ctaDescription: "Присоединяйтесь к платформе и развивайте свой бизнес.",
            ctaButton: "Стать Специалистом"
        },

        // Страница волос
        hair: {
            pageTitle: "Мастера Причесок",
            pageDescription: "Свяжитесь с экспертными стилистами по волосам",
            browseTitle: "Стилисты по Волосам",
            browseSubtitle: "Найдите идеального стилиста для ваших волос",
            ctaTitle: "Вы Парикмахер?",
            ctaDescription: "Присоединяйтесь к платформе и находите клиентов.",
            ctaButton: "Стать Специалистом"
        },

        // Страница ухода за кожей
        skincare: {
            pageTitle: "Специалисты по Коже",
            pageDescription: "Найдите экспертов по уходу за кожей и косметологов",
            browseTitle: "Специалисты по Коже",
            browseSubtitle: "Откройте для себя талантливых специалистов",
            ctaTitle: "Вы Специалист по Коже?",
            ctaDescription: "Присоединяйтесь и помогайте клиентам достичь красивой кожи.",
            ctaButton: "Стать Специалистом"
        },

        // Страница каталога специалистов
        professionalsPage: {
            pageTitle: "Все Бьюти Мастера",
            pageDescription: "Просмотрите полный каталог бьюти специалистов",
            sectionTitle: "Наши Специалисты",
            sectionSubtitle: "Откройте для себя талантливых экспертов",
            filterAll: "Все",
            filterMakeup: "Макияж",
            filterNails: "Ногти",
            filterHair: "Волосы",
            filterSkincare: "Кожа",
            filterBrows: "Брови",
            ctaTitle: "Вы Бьюти Мастер?",
            ctaDescription: "Присоединяйтесь и находите клиентов.",
            ctaButton: "Стать Специалистом"
        },

        // Страница отдельного специалиста
        professional: {
            loading: "Загрузка профиля..."
        },

        // Страница контактов/входа
        contact: {
            pageTitle: "Добро Пожаловать",
            pageDescription: "Войдите как клиент или присоединяйтесь как специалист",
            clientTitle: "Вход для Клиентов",
            clientDescription: "Войдите в аккаунт для записи и управления услугами",
            emailLabel: "Электронная Почта",
            passwordLabel: "Пароль",
            nameLabel: "Полное Имя",
            specializationLabel: "Специализация",
            clientLoginButton: "Войти как Клиент",
            clientFooter: "Нет аккаунта? Свяжитесь с поддержкой для регистрации.",
            professionalTitle: "Бьюти Мастер",
            professionalDescription: "Присоединяйтесь и находите клиентов для ваших услуг",
            selectSpecialty: "Выберите Специализацию",
            specialtyMakeup: "Визажист",
            specialtyNails: "Мастер Маникюра",
            specialtyHair: "Парикмахер",
            specialtySkincare: "Косметолог",
            specialtyBrows: "Мастер Бровей",
            specialtyCosmetology: "Косметолог",
            professionalJoinButton: "Стать Специалистом",
            professionalFooter: "Уже есть аккаунт? Свяжитесь с поддержкой для доступа.",
            benefitsTitle: "Почему Наша Платформа?",
            benefitsSubtitle: "Все для развития вашего бизнеса",
            benefit1Title: "Больше Клиентов",
            benefit1Description: "Вас найдут клиенты, ищущие бьюти услуги",
            benefit2Title: "Управление Записями",
            benefit2Description: "Удобные инструменты для расписания и записей",
            benefit3Title: "Развитие Бренда",
            benefit3Description: "Покажите портфолио и развивайте репутацию",
            benefit4Title: "Гибкий График",
            benefit4Description: "Работайте в удобное время и устанавливайте цены"
        }
    },

    uz: {
        // Navigatsiya
        nav: {
            home: "Bosh sahifa",
            professionals: "Mutaxassislar",
            beautyPage: "BeYouTy",
            account: "Hisob"
        },

        // Asosiy banner
        hero: {
            headline: "Professional Go'zallik Xizmatlari",
            accent: "Mukammallik",
            subheading: "Makiyaj, Tirnoqlar, Qoshlar, Estetika va Ko'p Narsalar",
            bookService: "Yozilish",
            exploreServices: "Xizmatlarni Ko'rish",
            scrollToExplore: "Pastga suring"
        },

        // Xizmatlar bo'limi
        services: {
            title: "Bizning Xizmatlar",
            subtitle: "Ko'proq bilish uchun xizmatni bosing",
            makeup: "Makiyaj",
            makeupDesc: "Professional mahorat",
            nails: "Tirnoqlar",
            nailsDesc: "Manikyur va dizayn",
            brows: "Qoshlar",
            browsDesc: "Shakllantirish va laminatsiya",
            lashes: "Kipriklar",
            lashesDesc: "Uzaytirish",
            lips: "Lablar",
            lipsDesc: "Kengaytirish",
            skincare: "Teri parvarishi",
            skincareDesc: "Yuz muolajalari",
            hair: "Sochlar",
            hairDesc: "Uslub va rang",
            beauty: "Go'zallik",
            beautyDesc: "To'liq parvarish"
        },

        // Tanlangan mutaxassislar
        professionals: {
            title: "Eng Yaxshi Go'zallik Ustalar",
            subtitle: "Sizga xizmat qilishga tayyor iste'dodli mutaxassislarni toping",
            viewAll: "Barcha Mutaxassislar",
            viewProfile: "Profilni Ko'rish"
        },

        // Xususiyatlar bo'limi
        features: {
            title: "Nega Bizning Platforma?",
            subtitle: "Mijozlarni iste'dodli go'zallik mutaxassislari bilan bog'lash",
            verified: "Tekshirilgan Mutaxassislar",
            verifiedDesc: "Sertifikatlangan va tajribali go'zallik mutaxassislarining portfoliosi",
            booking: "Oson Yozilish",
            bookingDesc: "Mavjudlikni ko'ring va o'zingizga qulay vaqtga yoziling",
            reviews: "Ishonchli Sharhlar",
            reviewsDesc: "Mukammal tanlov uchun mijozlarning haqiqiy sharhlarini o'qing",
            allServices: "Barcha Xizmatlar",
            allServicesDesc: "Har qanday go'zallik xizmati uchun mutaxassislarni bir joyda toping"
        },

        // Harakatga chaqiruv
        cta: {
            title: "Siz Go'zallik Mutaxassisimisiz?",
            description: "Platformamizga qo'shiling va mijozlar bilan bog'laning. Portfolingizni ko'rsating va biznesingizni rivojlantiring.",
            joinButton: "Mutaxassis Sifatida Qo'shilish"
        },

        // Oyoq
        footer: {
            description: "Mijozlarni iste'dodli go'zallik mutaxassislari bilan bog'lash. Barcha go'zallik xizmatlari uchun universal platformangiz.",
            servicesTitle: "Xizmatlar",
            makeup: "Makiyaj",
            hairStyling: "Sochlarni Uslublash",
            nails: "Tirnoqlar",
            skincare: "Teri Parvarishi",
            platformTitle: "Platforma",
            findProfessionals: "Mutaxassislarni Topish",
            joinProfessional: "Mutaxassis Sifatida Qo'shilish",
            home: "Bosh sahifa",
            connectTitle: "Aloqa",
            copyright: "Radiant Beauty Platformasi. Barcha huquqlar himoyalangan."
        },

        // Makiyaj sahifasi
        makeup: {
            pageTitle: "Makiyaj Mutaxassislari",
            pageDescription: "Har qanday tadbir uchun iste'dodli makiyaj ustalarini toping",
            browseTitle: "Makiyaj Ustalarini Ko'rish",
            browseSubtitle: "Iste'dodli makiyaj mutaxassislarimizni ko'ring",
            ctaTitle: "Siz Makiyaj Ustasimisiz?",
            ctaDescription: "Platformamizga qo'shiling va mahoratingizni ko'rsating.",
            ctaButton: "Mutaxassis Sifatida Qo'shilish"
        },

        // Tirnoqlar sahifasi
        nails: {
            pageTitle: "Manikyur Mutaxassislari",
            pageDescription: "Malakali manikyur va pedikyur ustalarini toping",
            browseTitle: "Manikyur Ustalarini Ko'rish",
            browseSubtitle: "O'z uslubingiz uchun mukammal ustani toping",
            ctaTitle: "Siz Manikyur Ustasimisiz?",
            ctaDescription: "Platformamizga qo'shiling va biznesingizni rivojlantiring.",
            ctaButton: "Mutaxassis Sifatida Qo'shilish"
        },

        // Sochlar sahifasi
        hair: {
            pageTitle: "Soch Uslubi Mutaxassislari",
            pageDescription: "Tajribali sartaroshlar bilan bog'laning",
            browseTitle: "Sartaroshlarni Ko'rish",
            browseSubtitle: "Sochlaringiz uchun mukammal sartaroshni toping",
            ctaTitle: "Siz Sartaroshmisiz?",
            ctaDescription: "Platformamizga qo'shiling va mijozlar toping.",
            ctaButton: "Mutaxassis Sifatida Qo'shilish"
        },

        // Teri parvarishi sahifasi
        skincare: {
            pageTitle: "Teri Parvarishi Mutaxassislari",
            pageDescription: "Teri parvarishi mutaxassislari va kosmetologlarni toping",
            browseTitle: "Teri Parvarishi Mutaxassislari",
            browseSubtitle: "Iste'dodli mutaxassislarni toping",
            ctaTitle: "Siz Teri Parvarishi Mutaxassisimisiz?",
            ctaDescription: "Qo'shiling va mijozlarga chiroyli teri uchun yordam bering.",
            ctaButton: "Mutaxassis Sifatida Qo'shilish"
        },

        // Mutaxassislar katalogi sahifasi
        professionalsPage: {
            pageTitle: "Barcha Go'zallik Mutaxassislari",
            pageDescription: "Go'zallik mutaxassislarining to'liq katalogini ko'ring",
            sectionTitle: "Bizning Mutaxassislar",
            sectionSubtitle: "Iste'dodli mutaxassislarni kashf eting",
            filterAll: "Hammasi",
            filterMakeup: "Makiyaj",
            filterNails: "Tirnoqlar",
            filterHair: "Sochlar",
            filterSkincare: "Teri",
            filterBrows: "Qoshlar",
            ctaTitle: "Siz Go'zallik Mutaxassisimisiz?",
            ctaDescription: "Qo'shiling va mijozlar toping.",
            ctaButton: "Mutaxassis Sifatida Qo'shilish"
        },

        // Alohida mutaxassis sahifasi
        professional: {
            loading: "Profil yuklanmoqda..."
        },

        // Aloqa/Kirish sahifasi
        contact: {
            pageTitle: "Xush Kelibsiz",
            pageDescription: "Mijoz sifatida kiring yoki mutaxassis sifatida qo'shiling",
            clientTitle: "Mijozlar Uchun Kirish",
            clientDescription: "Yozilish va xizmatlarni boshqarish uchun hisobingizga kiring",
            emailLabel: "Elektron Pochta",
            passwordLabel: "Parol",
            nameLabel: "To'liq Ism",
            specializationLabel: "Mutaxassislik",
            clientLoginButton: "Mijoz Sifatida Kirish",
            clientFooter: "Hisobingiz yo'qmi? Ro'yxatdan o'tish uchun qo'llab-quvvatlash bilan bog'laning.",
            professionalTitle: "Go'zallik Mutaxassisi",
            professionalDescription: "Platformaga qo'shiling va xizmatlaringiz uchun mijozlar toping",
            selectSpecialty: "Mutaxassislikni Tanlang",
            specialtyMakeup: "Makiyaj Ustasi",
            specialtyNails: "Manikyur Ustasi",
            specialtyHair: "Sartarosh",
            specialtySkincare: "Teri Parvarishi Mutaxassisi",
            specialtyBrows: "Qosh Ustasi",
            specialtyCosmetology: "Kosmetolog",
            professionalJoinButton: "Mutaxassis Sifatida Qo'shilish",
            professionalFooter: "Hisobingiz bormi? Kirish uchun qo'llab-quvvatlash bilan bog'laning.",
            benefitsTitle: "Nega Bizning Platforma?",
            benefitsSubtitle: "Biznesingizni rivojlantirish uchun hamma narsa",
            benefit1Title: "Ko'proq Mijozlar",
            benefit1Description: "Sizni go'zallik xizmatlarini qidirayotgan mijozlar topadi",
            benefit2Title: "Yozilishlarni Boshqarish",
            benefit2Description: "Jadval va yozilishlar uchun qulay vositalar",
            benefit3Title: "Brendni Rivojlantirish",
            benefit3Description: "Portfolioni ko'rsating va obro'ingizni oshiring",
            benefit4Title: "Moslashuvchan Jadval",
            benefit4Description: "O'z vaqtingizda ishlang va narxlarni belgilang"
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
