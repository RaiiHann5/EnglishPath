    // Translation data
        const translations = {
            en: {
                // Navigation
                home: "Home",
                about_us: "About Us",
                contact: "Contact",
                
                // Hero Section
                hero_title: "Discover The Joy of Learning",
                hero_description: "Dive into fun and interesting reading content that helps you build strong reading skills, expand your vocabulary, and enjoy learning English one page at a time.",
                learn_more: "Learn more..",
                
                // Sections
                advertisement: "Advertisement",
                announcement: "Announcement",
                opinion: "Opinion",
                
                // Skills
                reading: "Reading",
                listening: "Listening",
                writing: "Writing",
                
                // Descriptions
                read_and_learn: "Read and learn",
                test_knowledge: "Test your knowledge",
                learn_through_play: "Learn through play",
                visual_learning: "Visual learning",
                track_success: "Track your success",
                join_discussion: "Join the discussion",
                practice_with_peers: "Practice with peers",
                understand_better: "Understand better",
                get_certified: "Get certified",
                
                // Footer
                about_footer: "About EnglishPath",
                footer_desc: "EnglishPath is a learning platform designed to improve your English skills interactively and effectively.",
                quick_links: "Quick Links",
                contact_us: "Contact Us",
                phone_label: "Phone: +62 878-4407-8413",
                email_label: "Email: englishpath@email.com",
                copyright: "© 2025 EnglishPath. All Rights Reserved.",
                
                // Menu items
                material: "Material",
                video: "Video",
                quiz: "Quiz",
                exercise: "Exercise"
            },
            id: {
                // Navigation
                home: "Beranda",
                about_us: "Tentang Kami",
                contact: "Kontak",
                
                // Hero Section
                hero_title: "Temukan Kegembiraan Belajar",
                hero_description: "Menyelami konten bacaan yang menyenangkan dan menarik yang membantu Anda membangun keterampilan membaca yang kuat, memperluas kosakata, dan menikmati belajar bahasa Inggris satu halaman demi satu halaman.",
                learn_more: "Pelajari lebih lanjut..",
                
                // Sections
                advertisement: "Iklan",
                announcement: "Pengumuman",
                opinion: "Opini",
                
                // Skills
                reading: "Membaca",
                listening: "Mendengar",
                writing: "Menulis",
                
                // Descriptions
                read_and_learn: "Baca dan pelajari",
                test_knowledge: "Uji pengetahuan Anda",
                learn_through_play: "Belajar melalui bermain",
                visual_learning: "Pembelajaran visual",
                track_success: "Lacak kesuksesan Anda",
                join_discussion: "Bergabung dalam diskusi",
                practice_with_peers: "Berlatih dengan rekan",
                understand_better: "Memahami lebih baik",
                get_certified: "Dapatkan sertifikat",
                
                // Footer
                about_footer: "Tentang EnglishPath",
                footer_desc: "EnglishPath adalah platform pembelajaran yang dirancang untuk meningkatkan keterampilan bahasa Inggris Anda secara interaktif dan efektif.",
                quick_links: "Tautan Cepat",
                contact_us: "Hubungi Kami",
                phone_label: "Telepon: +62 878-4407-8413",
                email_label: "Email: englishpath@email.com",
                copyright: "© 2025 EnglishPath. Semua Hak Dilindungi.",
                
                // Menu items
                material: "Materi",
                video: "Video",
                quiz: "Kuis",
                exercise: "Latihan"
            }
        };

        // Current language state
        let currentLanguage = localStorage.getItem('language') || 'en';

        // Function to translate page
        function translatePage() {
            // Toggle language
            currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
            
            // Save language preference
            localStorage.setItem('language', currentLanguage);
            
            // Apply translations
            applyTranslations();
        }

        // Function to apply translations
        function applyTranslations() {
            const elements = document.querySelectorAll('[data-translate]');
            
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    element.textContent = translations[currentLanguage][key];
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = currentLanguage;
        }

        // Function to scroll to cards (existing functionality)
        function scrollToCards() {
            const cardsSection = document.querySelector('.slider-section');
            if (cardsSection) {
                cardsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Initialize page with saved language preference
        document.addEventListener('DOMContentLoaded', function() {
            applyTranslations();
        });