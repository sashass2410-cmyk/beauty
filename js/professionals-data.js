/* ===================================
   Mock Professionals Data
   Beauty Services Platform
   =================================== */

const professionals = [
    {
        id: 1,
        name: "Sofia Martinez",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Nails", "Nail Art"],
            ru: ["Ногти", "Нейл-арт"],
            uz: ["Tirnoqlar", "Tirnoq San'ati"]
        },
        bio: {
            en: "Certified nail artist with 8+ years of experience. Specializing in intricate nail art designs and long-lasting gel applications.",
            ru: "Сертифицированный мастер маникюра с опытом работы более 8 лет. Специализируюсь на сложных дизайнах и долговечных гель-покрытиях.",
            uz: "8+ yillik tajribaga ega sertifikatlangan tirnoq ustasi. Murakkab dizaynlar va uzoq davom etuvchi gel qoplamalar bo'yicha mutaxassis."
        },
        location: {
            en: "Downtown Beauty Studio, NYC",
            ru: "Студия красоты Downtown, Нью-Йорк",
            uz: "Downtown Beauty Studio, Nyu-York"
        },
        services: [
            { name: "Classic Manicure", price: "$45", duration: "45 min" },
            { name: "Gel Manicure", price: "$65", duration: "60 min" },
            { name: "Nail Art Design", price: "$85+", duration: "90 min" },
            { name: "Acrylic Extensions", price: "$95", duration: "120 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 4.9,
        reviewCount: 127,
        calendar: [
            { date: "2025-12-26", availableSlots: 2 },
            { date: "2025-12-27", availableSlots: 4 },
            { date: "2025-12-28", availableSlots: 0 },
            { date: "2025-12-29", availableSlots: 3 }
        ]
    },
    {
        id: 2,
        name: "Isabella Chen",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Makeup", "Bridal Makeup"],
            ru: ["Макияж", "Свадебный макияж"],
            uz: ["Makiyaj", "To'y Makiyaji"]
        },
        bio: {
            en: "Professional makeup artist specializing in bridal and special occasion makeup. Creating timeless, elegant looks that enhance natural beauty.",
            ru: "Профессиональный визажист, специализирующийся на свадебном и праздничном макияже. Создаю элегантные образы, подчеркивающие естественную красоту.",
            uz: "To'y va tantanali tadbirlarga mutaxassis professional bo'yanuvchi. Tabiiy go'zallikni ta'kidlaydigan zamonaviy ko'rinishlar yarataman."
        },
        location: {
            en: "Luxury Beauty Lounge, LA",
            ru: "Luxury Beauty Lounge, Лос-Анджелес",
            uz: "Luxury Beauty Lounge, Los-Anjeles"
        },
        services: [
            { name: "Natural Makeup", price: "$120", duration: "60 min" },
            { name: "Evening/Glam Makeup", price: "$150", duration: "90 min" },
            { name: "Bridal Makeup", price: "$300", duration: "120 min" },
            { name: "Makeup Lesson", price: "$200", duration: "90 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1596704017254-9b121068ec31?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 5.0,
        reviewCount: 203,
        calendar: [
            { date: "2025-12-26", availableSlots: 0 },
            { date: "2025-12-27", availableSlots: 1 },
            { date: "2025-12-28", availableSlots: 2 },
            { date: "2025-12-30", availableSlots: 3 }
        ]
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Brow Lamination", "Eyelashes"],
            ru: ["Ламинирование бровей", "Ресницы"],
            uz: ["Qosh Laminatsiyasi", "Kipriklar"]
        },
        bio: {
            en: "Brow and lash specialist. Expert in brow lamination, tinting, and eyelash extensions. Enhancing your natural features with precision.",
            ru: "Специалист по бровям и ресницам. Эксперт в ламинировании, окрашивании бровей и наращивании ресниц. Подчеркиваю вашу естественную красоту с точностью.",
            uz: "Qosh va kiprik mutaxassisi. Qosh laminatsiyasi, bo'yash va kiprik uzaytirish bo'yicha ekspert. Tabiiy xususiyatlaringizni aniqlik bilan ta'kidlayman."
        },
        location: {
            en: "Beauty Bar, Miami",
            ru: "Beauty Bar, Майами",
            uz: "Beauty Bar, Mayami"
        },
        services: [
            { name: "Brow Lamination", price: "$85", duration: "60 min" },
            { name: "Brow Tinting", price: "$35", duration: "30 min" },
            { name: "Classic Lash Extensions", price: "$150", duration: "120 min" },
            { name: "Volume Lash Extensions", price: "$200", duration: "150 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 4.8,
        reviewCount: 156,
        calendar: [
            { date: "2025-12-26", availableSlots: 5 },
            { date: "2025-12-27", availableSlots: 3 },
            { date: "2025-12-28", availableSlots: 4 },
            { date: "2025-12-29", availableSlots: 2 }
        ]
    },
    {
        id: 4,
        name: "Olivia Thompson",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Hair Styling", "Hair Coloring"],
            ru: ["Укладка волос", "Окрашивание"],
            uz: ["Soch Turmagi", "Soch Bo'yash"]
        },
        bio: {
            en: "Creative hair stylist and colorist. Specializing in balayage, vivid colors, and modern cuts. Let's bring your hair dreams to life!",
            ru: "Креативный стилист-колорист. Специализируюсь на балаяже, ярких цветах и современных стрижках. Воплощу ваши мечты о волосах в реальность!",
            uz: "Ijodiy soch stilisti va koloristi. Balayaj, yorqin ranglar va zamonaviy soch turmaklar bo'yicha mutaxassis. Soch haqidagi orzularingizni amalga oshiramiz!"
        },
        location: {
            en: "Chic Hair Studio, Chicago",
            ru: "Chic Hair Studio, Чикаго",
            uz: "Chic Hair Studio, Chikago"
        },
        services: [
            { name: "Women's Haircut", price: "$85", duration: "60 min" },
            { name: "Balayage/Highlights", price: "$250+", duration: "180 min" },
            { name: "Full Color", price: "$180", duration: "120 min" },
            { name: "Blowout & Style", price: "$65", duration: "45 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 4.9,
        reviewCount: 184,
        calendar: [
            { date: "2025-12-26", availableSlots: 0 },
            { date: "2025-12-27", availableSlots: 0 },
            { date: "2025-12-28", availableSlots: 1 },
            { date: "2025-12-31", availableSlots: 2 }
        ]
    },
    {
        id: 5,
        name: "Mia Anderson",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Skincare", "Facial Treatments"],
            ru: ["Уход за кожей", "Процедуры для лица"],
            uz: ["Teri Parvarishi", "Yuz Muolajalari"]
        },
        bio: {
            en: "Licensed esthetician passionate about skincare. Specializing in anti-aging treatments, acne solutions, and radiant skin maintenance.",
            ru: "Лицензированный косметолог, увлеченный уходом за кожей. Специализируюсь на антивозрастных процедурах, решении проблем акне и поддержании сияния кожи.",
            uz: "Teri parvarishi bo'yicha litsenziyalangan mutaxassis. Qarishga qarshi muolajalar, akne yechimlari va teri nurlanishini saqlash bo'yicha mutaxassis."
        },
        location: {
            en: "Serenity Spa, Seattle",
            ru: "Serenity Spa, Сиэтл",
            uz: "Serenity Spa, Sietl"
        },
        services: [
            { name: "Classic Facial", price: "$100", duration: "60 min" },
            { name: "Deep Cleansing Facial", price: "$130", duration: "75 min" },
            { name: "Anti-Aging Treatment", price: "$180", duration: "90 min" },
            { name: "Chemical Peel", price: "$200", duration: "60 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 5.0,
        reviewCount: 142,
        calendar: [
            { date: "2025-12-26", availableSlots: 3 },
            { date: "2025-12-27", availableSlots: 2 },
            { date: "2025-12-28", availableSlots: 4 },
            { date: "2025-12-29", availableSlots: 1 }
        ]
    },
    {
        id: 6,
        name: "Ava Williams",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Nails", "Pedicure"],
            ru: ["Ногти", "Педикюр"],
            uz: ["Tirnoqlar", "Pedikur"]
        },
        bio: {
            en: "Nail care specialist with a focus on nail health and beautiful designs. Creating art on your fingertips with care and precision.",
            ru: "Специалист по уходу за ногтями с акцентом на здоровье ногтей и красивые дизайны. Создаю искусство на ваших пальцах с заботой и точностью.",
            uz: "Tirnoq salomatligi va chiroyli dizaynlarga e'tibor qaratadigan tirnoq parvarishi mutaxassisi. Barmoqlaringizda g'amxo'rlik va aniqlik bilan san'at yarataman."
        },
        location: {
            en: "Polished Nails Salon, Boston",
            ru: "Polished Nails Salon, Бостон",
            uz: "Polished Nails Salon, Boston"
        },
        services: [
            { name: "Spa Pedicure", price: "$70", duration: "60 min" },
            { name: "Deluxe Manicure", price: "$55", duration: "50 min" },
            { name: "Gel Polish", price: "$50", duration: "45 min" },
            { name: "Nail Repair", price: "$15", duration: "20 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 4.7,
        reviewCount: 98,
        calendar: [
            { date: "2025-12-26", availableSlots: 0 },
            { date: "2025-12-27", availableSlots: 0 },
            { date: "2025-12-28", availableSlots: 0 },
            { date: "2026-01-02", availableSlots: 2 }
        ]
    },
    {
        id: 7,
        name: "Lily Parker",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Makeup", "Special Effects"],
            ru: ["Макияж", "Спецэффекты"],
            uz: ["Makiyaj", "Maxsus Effektlar"]
        },
        bio: {
            en: "Makeup artist specializing in editorial, fashion, and special effects makeup. Pushing creative boundaries to create stunning looks.",
            ru: "Визажист, специализирующийся на редакционном, модном макияже и спецэффектах. Раздвигаю творческие границы для создания потрясающих образов.",
            uz: "Tahririyat, moda va maxsus effektlar makiyajiga mutaxassis bo'yanuvchi. Ajoyib ko'rinishlar yaratish uchun ijodiy chegaralarni kengaytiraman."
        },
        location: {
            en: "Artistry Makeup Studio, NYC",
            ru: "Artistry Makeup Studio, Нью-Йорк",
            uz: "Artistry Makeup Studio, Nyu-York"
        },
        services: [
            { name: "Editorial Makeup", price: "$180", duration: "90 min" },
            { name: "Fashion Show Makeup", price: "$150", duration: "60 min" },
            { name: "Special Effects", price: "$250+", duration: "120 min" },
            { name: "Photoshoot Makeup", price: "$200", duration: "90 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 4.9,
        reviewCount: 167,
        calendar: [
            { date: "2025-12-26", availableSlots: 1 },
            { date: "2025-12-27", availableSlots: 3 },
            { date: "2025-12-28", availableSlots: 2 },
            { date: "2025-12-29", availableSlots: 4 }
        ]
    },
    {
        id: 8,
        name: "Chloe Davis",
        photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        specializations: {
            en: ["Cosmetology", "Full Beauty Services"],
            ru: ["Косметология", "Полный спектр услуг"],
            uz: ["Kosmetologiya", "To'liq Go'zallik Xizmatlari"]
        },
        bio: {
            en: "Full-service beauty professional offering comprehensive beauty care. From hair to nails, providing all your beauty needs in one place.",
            ru: "Профессионал полного цикла, предлагающий комплексный уход за красотой. От волос до ногтей - все ваши потребности в красоте в одном месте.",
            uz: "To'liq xizmat ko'rsatadigan go'zallik mutaxassisi. Sochdan tortib tirnoqlargacha - barcha go'zallik ehtiyojlaringiz bir joyda."
        },
        location: {
            en: "Complete Beauty Center, Austin",
            ru: "Complete Beauty Center, Остин",
            uz: "Complete Beauty Center, Ostin"
        },
        services: [
            { name: "Hair & Makeup Package", price: "$220", duration: "150 min" },
            { name: "Full Styling Service", price: "$180", duration: "120 min" },
            { name: "Beauty Consultation", price: "$75", duration: "45 min" },
            { name: "Event Package", price: "$350+", duration: "180 min" }
        ],
        portfolio: [
            { type: "image", url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80" },
            { type: "image", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" }
        ],
        rating: 4.8,
        reviewCount: 211,
        calendar: [
            { date: "2025-12-26", availableSlots: 2 },
            { date: "2025-12-27", availableSlots: 1 },
            { date: "2025-12-28", availableSlots: 3 },
            { date: "2025-12-29", availableSlots: 2 }
        ]
    }
];

// Service categories mapping
const serviceCategories = {
    "Makeup": [2, 7],
    "Nails": [1, 6],
    "Brow Lamination": [3],
    "Eyelashes": [3],
    "Lip Augmentation": [],
    "Skincare": [5],
    "Hair Styling": [4],
    "Cosmetology": [8]
};

// Helper function to get professionals by service
function getProfessionalsByService(serviceName) {
    const professionalIds = serviceCategories[serviceName] || [];
    return professionals.filter(prof => professionalIds.includes(prof.id));
}

// Helper function to get professional by ID
function getProfessionalById(id) {
    return professionals.find(prof => prof.id === id);
}

// Helper function to get all professionals
function getAllProfessionals() {
    return professionals;
}
