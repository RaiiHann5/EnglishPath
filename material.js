 const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Us",
    nav_contact: "Contact",
    
    // Hero section
    hero_title: "Discover The Joy of Learning",
    hero_description: "Dive into fun and interesting reading content that helps you build strong reading skills, expand your vocabulary, and enjoy learning English one page at a time.",
    hero_button: "Learn more..",
    
    // Material section
    material_title: "Material Snippet",
    announcement_title: "Announcement",
    announcement_description: "An announcement is a short, clear statement made to inform people about important news or events. It usually includes key details like what is happening, when and where it will take place, and why it matters. Announcements help ensure everyone stays updated and aware of any changes or upcoming activities in their community",
    advertisement_title: "Advertisement",
    advertisement_description: "An advertisement is a message designed to promote a product or service and attract customers effectively. It uses catchy words, clear images, and persuasive language to encourage people to buy or try something successfully. Advertisements are important tools for businesses to reach their target audience and increase sales rapidly.",
    read_more: "read more..",
    category_practical: "Practical",
    difficulty_beginner: "Beginner",
    
    // Topics section
    topics_title: "EnglishPath Topics",
    card_advertisement: "Advertisement",
    card_advertisement_desc: "Learn how to express and respond to opinions in English.",
    card_announcement: "Announcement",
    card_announcement_desc: "Test your knowledge through interactive quizzes.",
    card_opinion: "Expressing Opinion",
    card_opinion_desc: "Sharpen your skills with English practice questions.",
    start_reading: "Start Reading",
    
    // Learning steps
    learning_steps_title: "How To Learn English Properly",
    step1: "Read Actively",
    step2: "Highlight New Keywords",
    step3: "Review & Practice",
    
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
    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_contact: "Kontak",
    
    // Hero section
    hero_title: "Temukan Kegembiraan Belajar",
    hero_description: "Menyelami konten bacaan yang menyenangkan dan menarik yang membantu Anda membangun keterampilan membaca yang kuat, memperluas kosakata, dan menikmati belajar bahasa Inggris satu halaman dalam satu waktu.",
    hero_button: "Pelajari lebih lanjut..",
    
    // Material section
    material_title: "Cuplikan Materi",
    announcement_title: "Pengumuman",
    announcement_description: "Pengumuman adalah pernyataan singkat dan jelas yang dibuat untuk memberitahu orang tentang berita atau acara penting. Biasanya mencakup detail penting seperti apa yang terjadi, kapan dan di mana akan berlangsung, dan mengapa itu penting. Pengumuman membantu memastikan semua orang tetap terupdate dan menyadari perubahan atau kegiatan mendatang di komunitas mereka",
    advertisement_title: "Iklan",
    advertisement_description: "Iklan adalah pesan yang dirancang untuk mempromosikan produk atau layanan dan menarik pelanggan secara efektif. Menggunakan kata-kata menarik, gambar yang jelas, dan bahasa persuasif untuk mendorong orang membeli atau mencoba sesuatu dengan sukses. Iklan adalah alat penting bagi bisnis untuk menjangkau target audiens dan meningkatkan penjualan dengan cepat.",
    read_more: "baca selengkapnya..",
    category_practical: "Praktis",
    difficulty_beginner: "Pemula",
    
    // Topics section
    topics_title: "Topik EnglishPath",
    card_advertisement: "Iklan",
    card_advertisement_desc: "Pelajari cara mengekspresikan dan merespons pendapat dalam bahasa Inggris.",
    card_announcement: "Pengumuman",
    card_announcement_desc: "Uji pengetahuan Anda melalui kuis interaktif.",
    card_opinion: "Mengekspresikan Pendapat",
    card_opinion_desc: "Asah keterampilan Anda dengan soal latihan bahasa Inggris.",
    start_reading: "Mulai Membaca",
    
    // Learning steps
    learning_steps_title: "Cara Belajar Bahasa Inggris dengan Benar",
    step1: "Membaca Secara Aktif",
    step2: "Soroti Kata Kunci Baru",
    step3: "Tinjau & Berlatih",
    
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
    contact_us: "Hubungi Kami"
  }
};

// Current language state
let currentLanguage = 'en';

// Function to translate the page
function translatePage() {
  // Toggle language
  currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
  
  // Get all elements with data-translate attribute
  const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;
  
  // Store language preference
  localStorage.setItem('preferredLanguage', currentLanguage);
}

// Function to load saved language preference
function loadLanguagePreference() {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== currentLanguage) {
    translatePage();
  }
}

// Sidebar toggle functions
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

// Scroll to cards function
function scrollToCards() {
  document.getElementById('cards').scrollIntoView({
    behavior: 'smooth'
  });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  loadLanguagePreference();
});