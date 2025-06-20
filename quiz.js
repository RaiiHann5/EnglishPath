// Translation data
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Test Your English! Level Up Your Skills",
    hero_description: "Answer carefully, learn quickly, and have fun while leveling up your English skills!\nTake on each quiz to discover your strengths, improve your weaknesses, and enjoy the journey to fluency.",
    learn_more_btn: "Learn more..",
    
    // Timeline
   timeline_ann: "Announcement",
    timeline_adv: "Advertisement",
    timeline_opi: "Opinion",
    
    // Announcement Steps
    announcement_step1_title: "Announcement Step 1",
    announcement_step1_desc: "Identify parts of an announcement.",
    announcement_step2_title: "Announcement Step 2",
    announcement_step2_desc: "Choose the best response or detail.",
    announcement_step3_title: "Announcement Step 3",
    announcement_step3_desc: "Test your skills.",
    
    // Advertisement Steps
    ad_step1_title: "Ad Step 1",
    ad_step1_desc: "Spot persuasive words in ads.",
    ad_step2_title: "Ad Step 2",
    ad_step2_desc: "Choose the main message or goal.",
    ad_step3_title: "Ad Step 3",
    ad_step3_desc: "Test your ad analysis skills.",
    
    // Opinion Steps
    opinion_step1_title: "Opinion Step 1",
    opinion_step1_desc: "Pick strong opinion statements.",
    opinion_step2_title: "Opinion Step 2",
    opinion_step2_desc: "Support ideas with clear reasons.",
    opinion_step3_title: "Opinion Step 3",
    opinion_step3_desc: "Test your opinion logic.",
    
    // Common
    start_reading_btn: "Start Reading",
    
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
    contact_us: "Contact Us",
    phone_label: "Phone: +62 878-4407-8413",
    email_label: "Email: englishpath@email.com",
    copyright: "© 2025 EnglishPath. All Rights Reserved."
  },
  id: {
    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_contact: "Kontak",
    
    // Hero Section
    hero_title: "Uji Bahasa Inggris Anda! Tingkatkan Kemampuan Anda",
    hero_description: "Jawab dengan hati-hati, belajar dengan cepat, dan bersenang-senang sambil meningkatkan kemampuan bahasa Inggris Anda!\nIkuti setiap kuis untuk menemukan kekuatan Anda, memperbaiki kelemahan Anda, dan nikmati perjalanan menuju kefasihan.",
    learn_more_btn: "lebih lanjut..",
    
    // Timeline
    timeline_ann: "Pengumuman",
    timeline_adv: "Iklan",
    timeline_opi: "Pendapat",
    
    // Announcement Steps
    announcement_step1_title: "Pengumuman Langkah 1",
    announcement_step1_desc: "Identifikasi bagian-bagian pengumuman.",
    announcement_step2_title: "Pengumuman Langkah 2",
    announcement_step2_desc: "Pilih respons atau detail terbaik.",
    announcement_step3_title: "Pengumuman Langkah 3",
    announcement_step3_desc: "Uji kemampuan Anda.",
    
    // Advertisement Steps
    ad_step1_title: "Iklan Langkah 1",
    ad_step1_desc: "Temukan kata-kata persuasif dalam iklan.",
    ad_step2_title: "Iklan Langkah 2",
    ad_step2_desc: "Pilih pesan utama atau tujuan.",
    ad_step3_title: "Iklan Langkah 3",
    ad_step3_desc: "Uji kemampuan analisis iklan Anda.",
    
    // Opinion Steps
    opinion_step1_title: "Opini Langkah 1",
    opinion_step1_desc: "Pilih pernyataan opini yang kuat.",
    opinion_step2_title: "Opini Langkah 2",
    opinion_step2_desc: "Dukung ide dengan alasan yang jelas.",
    opinion_step3_title: "Opini Langkah 3",
    opinion_step3_desc: "Uji logika opini Anda.",
    
    // Common
    start_reading_btn: "Mulai Membaca",
    
    // Footer
    about_footer: "Tentang EnglishPath",
    footer_desc: "EnglishPath adalah platform pembelajaran yang dirancang untuk meningkatkan kemampuan bahasa Inggris Anda secara interaktif dan efektif.",
    quick_links: "Tautan Cepat",
    home: "Beranda",
    aboutus: "Tentang Kami",
    contact: "Kontak",
    material: "Materi",
    video: "Video",
    quiz: "Kuis",
    exercise: "Latihan",
    contact_us: "Hubungi Kami",
    phone_label: "Telepon: +62 878-4407-8413",
    email_label: "Email: englishpath@email.com",
    copyright: "© 2025 EnglishPath. Hak Cipta Dilindungi."
  }
};

// Current language state
let currentLanguage = 'en';

// Function to translate page
function translatePage() {
  // Toggle language
  currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
  
  // Get all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  
  // Update each element's text content
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update document language attribute
  document.documentElement.lang = currentLanguage;
  
  // Save language preference
  localStorage.setItem('preferredLanguage', currentLanguage);
}

// Function to scroll to cards (existing functionality)
function scrollToCards() {
  const timelineContainer = document.querySelector('.timeline-container');
  if (timelineContainer) {
    timelineContainer.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Load saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== 'en') {
    currentLanguage = 'en';
    translatePage();
  }
  
  // Hamburger menu functionality (if needed)
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when clicking on a link
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }
});

  // Material Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  if (slides[n]) {
    slides[n].classList.add('active');
  }
}

// Auto-slide setiap 5 detik
if (slides.length > 0) {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);
}

// Level Selection
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Timeline title updater
const titleEl = document.getElementById('timelineTitle');
const slider = document.getElementById('timelineSlider');
const sections = slider.querySelectorAll('.timeline');

slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft;
  const sectionWidth = slider.offsetWidth;

  const index = Math.round(scrollLeft / sectionWidth);
  const currentSection = sections[index];

  if (currentSection) {
    const newTitle = currentSection.getAttribute('data-title');
    titleEl.textContent = newTitle;
  }
});

// Scroll to cards function
function scrollToCards() {
  const timelineContainer = document.querySelector('.timeline-container');
  if (timelineContainer) {
    timelineContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
