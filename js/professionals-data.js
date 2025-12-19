/* ===================================
   Mock Professionals Data
   Beauty Services Platform
   =================================== */

const professionals = [
    {
        id: 1,
        name: "Sofia Martinez",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        specializations: ["Nails", "Nail Art"],
        bio: "Certified nail artist with 8+ years of experience. Specializing in intricate nail art designs and long-lasting gel applications.",
        location: "Downtown Beauty Studio, NYC",
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
        reviewCount: 127
    },
    {
        id: 2,
        name: "Isabella Chen",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        specializations: ["Makeup", "Bridal Makeup"],
        bio: "Professional makeup artist specializing in bridal and special occasion makeup. Creating timeless, elegant looks that enhance natural beauty.",
        location: "Luxury Beauty Lounge, LA",
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
        reviewCount: 203
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        specializations: ["Brow Lamination", "Eyelashes"],
        bio: "Brow and lash specialist. Expert in brow lamination, tinting, and eyelash extensions. Enhancing your natural features with precision.",
        location: "Beauty Bar, Miami",
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
        reviewCount: 156
    },
    {
        id: 4,
        name: "Olivia Thompson",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
        specializations: ["Hair Styling", "Hair Coloring"],
        bio: "Creative hair stylist and colorist. Specializing in balayage, vivid colors, and modern cuts. Let's bring your hair dreams to life!",
        location: "Chic Hair Studio, Chicago",
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
        reviewCount: 184
    },
    {
        id: 5,
        name: "Mia Anderson",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        specializations: ["Skincare", "Facial Treatments"],
        bio: "Licensed esthetician passionate about skincare. Specializing in anti-aging treatments, acne solutions, and radiant skin maintenance.",
        location: "Serenity Spa, Seattle",
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
        reviewCount: 142
    },
    {
        id: 6,
        name: "Ava Williams",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
        specializations: ["Nails", "Pedicure"],
        bio: "Nail care specialist with a focus on nail health and beautiful designs. Creating art on your fingertips with care and precision.",
        location: "Polished Nails Salon, Boston",
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
        reviewCount: 98
    },
    {
        id: 7,
        name: "Lily Parker",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
        specializations: ["Makeup", "Special Effects"],
        bio: "Makeup artist specializing in editorial, fashion, and special effects makeup. Pushing creative boundaries to create stunning looks.",
        location: "Artistry Makeup Studio, NYC",
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
        reviewCount: 167
    },
    {
        id: 8,
        name: "Chloe Davis",
        photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
        specializations: ["Cosmetology", "Full Beauty Services"],
        bio: "Full-service beauty professional offering comprehensive beauty care. From hair to nails, providing all your beauty needs in one place.",
        location: "Complete Beauty Center, Austin",
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
        reviewCount: 211
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
