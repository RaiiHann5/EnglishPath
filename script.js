 const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    contact: "Contact",
    material: "Material",
    video: "Video",
    quiz: "Quiz",
    exercise: "Exercise",
    
    // Quote/Banner
    quote: `Each word we learn, a step we take,
To cross the seas, to build, to make,
New bonds that time can never break.`,
    
    // About section
    about_title: "About EnglishPath",
    about_description: `English Path is a web-based learning platform designed to help students learn English in an interactive, engaging, and structured way. This platform features a variety of educational tools, including learning materials, interactive quizzes, educational games, instructional videos, and progress tracking.

With a user-friendly and visually appealing interface, English Path is suitable for learners at elementary to intermediate levels. All content is organized by level and theme, allowing users to study step by step according to their abilities.`,
    
    // Feature cards
    material_desc: "Read and learn",
    video_desc: "Watch and learn",
    quiz_desc: "Test Your Knowledge",
    exercise_desc: "Practice and improve",
    
    // Why choose us section
    why_choose_title: "Why Choose EnglishPath?",
    personalized_learning: "Personalized Learning",
    personalized_learning_desc: "AI-powered lessons adapt to your skill level and goals",
    expert_tutors: "Expert Tutors",
    expert_tutors_desc: "Learn from certified English teachers",
    proven_results: "Proven Results",
    proven_results_desc: "92% of students improve within 3 months",
    
    // Features section
    features_title: "EnglishPath Feature",
    interactive_materials: "Interactive Materials",
    interactive_materials_desc: "Simple and clear English lessons for easy understanding.",
    fun_quizzes: "Fun Quizzes",
    fun_quizzes_desc: "Test your knowledge after each topic with quick quizzes.",
    practice_exercises: "Practice Exercises",
    practice_exercises_desc: "Do various exercises to improve your skills.",
    self_paced_learning: "Self Paced Learning",
    self_paced_learning_desc: "Learn anytime and anywhere at your own pace.",
    
    // Footer
    about_footer: "About EnglishPath",
    footer_desc: "EnglishPath is a learning platform designed to improve your English skills interactively and effectively.",
    quick_links: "Quick Links",
    contact_us: "Contact Us",
    phone: "Phone: +62 878-4407-8413",
    email: "Email: englishpath@email.com",
    copyright: "© 2025 EnglishPath. All Rights Reserved."
  },
  
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang Kami",
    contact: "Kontak",
    material: "Materi",
    video: "Video",
    quiz: "Kuis",
    exercise: "Latihan",
    
    // Quote/Banner
    quote: `Setiap kata yang kita pelajari, langkah yang kita ambil,
Untuk menyeberangi lautan, membangun, dan menciptakan,
Ikatan baru yang waktu tak akan pernah putuskan.`,
    
    // About section
    about_title: "Tentang EnglishPath",
    about_description: `English Path adalah platform pembelajaran berbasis web yang dirancang untuk membantu siswa belajar bahasa Inggris dengan cara yang interaktif, menarik, dan terstruktur. Platform ini menampilkan berbagai alat pendidikan, termasuk materi pembelajaran, kuis interaktif, permainan edukatif, video instruksional, dan pelacakan kemajuan.

Dengan antarmuka yang ramah pengguna dan menarik secara visual, English Path cocok untuk pembelajar tingkat dasar hingga menengah. Semua konten diatur berdasarkan level dan tema, memungkinkan pengguna untuk belajar langkah demi langkah sesuai dengan kemampuan mereka.`,
    
    // Feature cards
    material_desc: "Baca dan pelajari",
    video_desc: "Tonton dan pelajari",
    quiz_desc: "Uji Pengetahuan Anda",
    exercise_desc: "Berlatih dan tingkatkan",
    
    // Why choose us section
    why_choose_title: "Mengapa Memilih EnglishPath?",
    personalized_learning: "Pembelajaran Personal",
    personalized_learning_desc: "Pelajaran bertenaga AI yang menyesuaikan dengan tingkat keterampilan dan tujuan Anda",
    expert_tutors: "Tutor Ahli",
    expert_tutors_desc: "Belajar dari guru bahasa Inggris bersertifikat",
    proven_results: "Hasil Terbukti",
    proven_results_desc: "92% siswa meningkat dalam 3 bulan",
    
    // Features section
    features_title: "Fitur EnglishPath",
    interactive_materials: "Materi Interaktif",
    interactive_materials_desc: "Pelajaran bahasa Inggris yang sederhana dan jelas untuk pemahaman yang mudah.",
    fun_quizzes: "Kuis Menyenangkan",
    fun_quizzes_desc: "Uji pengetahuan Anda setelah setiap topik dengan kuis cepat.",
    practice_exercises: "Latihan Praktik",
    practice_exercises_desc: "Lakukan berbagai latihan untuk meningkatkan keterampilan Anda.",
    self_paced_learning: "Pembelajaran Mandiri",
    self_paced_learning_desc: "Belajar kapan saja dan di mana saja sesuai kecepatan Anda.",
    
    // Footer
    about_footer: "Tentang EnglishPath",
    footer_desc: "EnglishPath adalah platform pembelajaran yang dirancang untuk meningkatkan kemampuan bahasa Inggris Anda secara interaktif dan efektif.",
    quick_links: "Tautan Cepat",
    contact_us: "Hubungi Kami",
    phone: "Telepon: +62 878-4407-8413",
    email: "Email: englishpath@email.com",
    copyright: "© 2025 EnglishPath. Semua Hak Dilindungi."
  }
};

let currentLang = 'en';

function translatePage() {
  currentLang = currentLang === 'en' ? 'id' : 'en';

  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[currentLang][key];

    if (!translation) return;

    // Mulai transisi fade out
    element.style.opacity = 0;

    setTimeout(() => {
      if (element.id === 'quote-text' || key === 'quote') {
        element.innerHTML = translation.replace(/\n/g, '<br>');
      } else if (key === 'about_description') {
        // Handle multi-paragraph text
        element.innerHTML = translation.replace(/\n\n/g, '<br><br>');
      } else {
        element.textContent = translation;
      }

      // Setelah ganti teks, fade in
      element.style.opacity = 1;
    }, 300);
  });

  const btn = document.querySelector('.floating-translate-btn');
  btn.style.backgroundColor = currentLang === 'en' ? '#3b82f6' : '#1e293b';
}

// Add CSS for smooth transitions
const style = document.createElement('style');
style.textContent = `
  [data-translate] {
    transition: opacity 0.3s ease-in-out;
  }
  
  .floating-translate-btn {
    transition: background-color 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);


// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const mobileSidebar = document.getElementById('mobileSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
  hamburger.classList.toggle('active');
  mobileSidebar.classList.toggle('active');
  sidebarOverlay.classList.toggle('active');
}

function closeSidebar() {
  hamburger.classList.remove('active');
  mobileSidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
}

hamburger.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking on a link
document.querySelectorAll('.mobile-sidebar a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

// Optional: Smooth horizontal scroll
const container = document.querySelector('.section-container');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

container.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2;
  container.scrollLeft = scrollLeft - walk;
});

// Close sidebar on window resize if screen becomes large
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
});