 // Hamburger menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Scroll to cards section
function scrollToCards() {
    document.getElementById('cards').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Translation functionality
let currentLanguage = 'en';

const translations = {
    en: {
        // Hero section
        video_hero_title: "No books? No problem just press play!",
        video_hero_desc: "Boost your English with videos that explain real conversations, everyday expressions, and key vocabulary clearly.",
        learn_more: "Learn more..",
        
        // Section titles
        advertisement_section: "Advertisement",
        announcement_section: "Announcement",
        opinion_section: "Opinion",
        
        // Advertisement videos
        adv_video_1_title: "Advertisement Learning Video 1",
        adv_video_1_desc: "Discover how advertisements persuade and influence people in everyday life.",
        adv_video_2_title: "Advertisement Learning Video 2",
        adv_video_2_desc: "Learn to create catchy slogans, taglines, and promotional messages.",
        adv_video_3_title: "Advertisement Learning Video 3",
        adv_video_3_desc: "Analyze how brands use words and visuals to sell products or services.",
        adv_video_4_title: "Advertisement Learning Video 4",
        adv_video_4_desc: "Practice writing your own ads to develop creative and persuasive skills.",
        
        // Announcement videos
        anc_video_1_title: "Announcement Learning Video 1",
        anc_video_1_desc: "Learn how to write clear and formal announcements for school and public events.",
        anc_video_2_title: "Announcement Learning Video 2",
        anc_video_2_desc: "Master the structure, tone, and purpose of effective English announcements.",
        anc_video_3_title: "Announcement Learning Video 3",
        anc_video_3_desc: "Explore real-life examples of announcements and practice making your own.",
        anc_video_4_title: "Announcement Learning Video 4",
        anc_video_4_desc: "Understand how to inform people politely, accurately, and quickly.",
        
        // Opinion videos
        opi_video_1_title: "Expressing Opinion Learning Video 1",
        opi_video_1_desc: "Learn how to express your thoughts clearly and respectfully in English.",
        opi_video_2_title: "Expressing Opinion Learning Video 2",
        opi_video_2_desc: "Explore useful phrases to agree, disagree, and share personal opinions.",
        opi_video_3_title: "Expressing Opinion Learning Video 3",
        opi_video_3_desc: "Practice writing and speaking your opinion with strong supporting reasons.",
        opi_video_4_title: "Expressing Opinion Learning Video 4",
        opi_video_4_desc: "Develop confidence in discussing topics through structured opinion texts.",
        
        // Learning steps
        how_to_learn_title: "How To Learn English Properly",
        step_1: "Watch & Listen",
        step_2: "Repeat & Imitate",
        step_3: "Practice & Apply",
        
        // Common buttons
        start_reading: "Start Reading",
        
        // Footer
        about_footer: "About EnglishPath",
        footer_desc: "EnglishPath is a learning platform designed to improve your English skills interactively and effectively.",
        quick_links: "Quick Links",
        home: "Home",
        aboutus: "About Us",
        contact: "Contact",
        material: "Material",
        video: "Video",
        quiz: "Quiz",
        exercise: "Exercise",
        contact_us: "Contact Us"
    },
    id: {
        // Hero section
        video_hero_title: "Tidak ada buku? Tidak masalah, tekan play saja!",
        video_hero_desc: "Tingkatkan bahasa Inggris Anda dengan video yang menjelaskan percakapan nyata, ekspresi sehari-hari, dan kosakata penting dengan jelas.",
        learn_more: "Pelajari lebih lanjut..",
        
        // Section titles
        advertisement_section: "Iklan",
        announcement_section: "Pengumuman",
        opinion_section: "Opini",
        
        // Advertisement videos
        adv_video_1_title: "Video Pembelajaran Iklan 1",
        adv_video_1_desc: "Temukan bagaimana iklan membujuk dan mempengaruhi orang dalam kehidupan sehari-hari.",
        adv_video_2_title: "Video Pembelajaran Iklan 2",
        adv_video_2_desc: "Pelajari cara membuat slogan menarik, tagline, dan pesan promosi.",
        adv_video_3_title: "Video Pembelajaran Iklan 3",
        adv_video_3_desc: "Analisis bagaimana merek menggunakan kata-kata dan visual untuk menjual produk atau layanan.",
        adv_video_4_title: "Video Pembelajaran Iklan 4",
        adv_video_4_desc: "Berlatih menulis iklan Anda sendiri untuk mengembangkan keterampilan kreatif dan persuasif.",
        
        // Announcement videos
        anc_video_1_title: "Video Pembelajaran Pengumuman 1",
        anc_video_1_desc: "Pelajari cara menulis pengumuman yang jelas dan formal untuk acara sekolah dan publik.",
        anc_video_2_title: "Video Pembelajaran Pengumuman 2",
        anc_video_2_desc: "Kuasai struktur, nada, dan tujuan dari pengumuman bahasa Inggris yang efektif.",
        anc_video_3_title: "Video Pembelajaran Pengumuman 3",
        anc_video_3_desc: "Jelajahi contoh nyata pengumuman dan berlatih membuat pengumuman Anda sendiri.",
        anc_video_4_title: "Video Pembelajaran Pengumuman 4",
        anc_video_4_desc: "Pahami cara menginformasikan orang dengan sopan, akurat, dan cepat.",
        
        // Opinion videos
        opi_video_1_title: "Video Pembelajaran Mengekspresikan Opini 1",
        opi_video_1_desc: "Pelajari cara mengekspresikan pemikiran Anda dengan jelas dan hormat dalam bahasa Inggris.",
        opi_video_2_title: "Video Pembelajaran Mengekspresikan Opini 2",
        opi_video_2_desc: "Jelajahi frasa berguna untuk setuju, tidak setuju, dan berbagi pendapat pribadi.",
        opi_video_3_title: "Video Pembelajaran Mengekspresikan Opini 3",
        opi_video_3_desc: "Berlatih menulis dan berbicara opini Anda dengan alasan pendukung yang kuat.",
        opi_video_4_title: "Video Pembelajaran Mengekspresikan Opini 4",
        opi_video_4_desc: "Kembangkan kepercayaan diri dalam mendiskusikan topik melalui teks opini terstruktur.",
        
        // Learning steps
        how_to_learn_title: "Cara Belajar Bahasa Inggris dengan Benar",
        step_1: "Tonton & Dengarkan",
        step_2: "Ulangi & Tiru",
        step_3: "Berlatih & Terapkan",
        
        // Common buttons
        start_reading: "Mulai Membaca",
        
        // Footer
        about_footer: "Tentang EnglishPath",
        footer_desc: "EnglishPath adalah platform pembelajaran yang dirancang untuk meningkatkan keterampilan bahasa Inggris Anda secara interaktif dan efektif.",
        quick_links: "Tautan Cepat",
        home: "Beranda",
        aboutus: "Tentang Kami",
        contact: "Kontak",
        material: "Materi",
        video: "Video",
        quiz: "Kuis",
        exercise: "Latihan",
        contact_us: "Hubungi Kami"
    }
};

function toggleTranslate() {
    currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
    translatePage();
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = currentLanguage;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
        currentLanguage = savedLanguage;
        translatePage();
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Card hover effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.card, .step-horizontal, .hero-content, .hero-image');
    animateElements.forEach(el => observer.observe(el));
});
    
    // Close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.getElementById('navMenu');
        const hamburger = document.querySelector('.hamburger');
        
        nav.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const nav = document.getElementById('navMenu');
      const hamburger = document.querySelector('.hamburger');
      
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });