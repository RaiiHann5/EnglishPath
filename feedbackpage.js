 // Translation Data
        const translations = {
            en: {
                home: "Home",
                about: "About Us",
                contact: "Contact",
                about_title: "About EnglishPath",
                about_footer: "About EnglishPath",
                footer_desc: "EnglishPath is a learning platform designed to improve your English skills interactively and effectively.",
                quick_links: "Quick Links",
                contact_us: "Contact Us",
                contact_title: "Share Your Feedback",
                contact_subtitle: "Help us improve your learning experience",
                username_label: "Username",
                contact_label: "Email / Phone",
                rating_label: "Rate Your Experience",
                feedback_label: "Your Feedback & Suggestions",
                submit_btn: "Send Feedback",
                success_title: "Feedback Sent!",
                success_message: "Thank you for your valuable feedback. We'll review it shortly.",
                close_btn: "Close",
                learn_more: "Learn more.."
            },
            id: {
                home: "Beranda",
                about: "Tentang Kami",
                contact: "Kontak",
                about_title: "Tentang EnglishPath",
                about_footer: "Tentang EnglishPath",
                footer_desc: "Platform pembelajaran interaktif untuk meningkatkan kemampuan bahasa Inggris Anda.",
                quick_links: "Tautan Cepat",
                contact_us: "Hubungi Kami",
                contact_title: "Bagikan Masukan Anda",
                contact_subtitle: "Bantu kami meningkatkan pengalaman belajar Anda",
                username_label: "Nama Pengguna",
                contact_label: "Email / Telepon",
                rating_label: "Nilai Pengalaman Anda",
                feedback_label: "Masukan & Saran Anda",
                submit_btn: "Kirim Masukan",
                success_title: "Masukan Terkirim!",
                success_message: "Terima kasih atas masukan berharga Anda. Kami akan memeriksanya segera.",
                close_btn: "Tutup",
                learn_more: "Pelajari lebih.."
            }
        };

        // Current Language State
        let currentLang = 'en';
        let selectedRating = 0;

        // Page Translation Function
        function translatePage() {
            currentLang = currentLang === 'en' ? 'id' : 'en';
            const elements = document.querySelectorAll('[data-translate]');

            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                const translation = translations[currentLang][key];

                if (!translation) return;

                // Fade out transition
                element.style.opacity = 0;

                setTimeout(() => {
                    element.textContent = translation;
                    // Fade in transition
                    element.style.opacity = 1;
                }, 300);
            });

            // Update translate button color
            const btn = document.querySelector('.floating-translate-btn');
            btn.style.backgroundColor = currentLang === 'en' ? '#3b82f6' : '#1e293b';
        }

        // Star Rating Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const stars = document.querySelectorAll('.star');
            const starContainer = document.querySelector('.star-rating');
            
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    selectedRating = parseInt(this.dataset.rating);
                    updateStars();
                });
                
                star.addEventListener('mouseover', function() {
                    const rating = parseInt(this.dataset.rating);
                    highlightStars(rating);
                });
            });
            
            starContainer.addEventListener('mouseout', function() {
                updateStars();
            });
        });

        function highlightStars(rating) {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                const starRating = parseInt(star.dataset.rating);
                star.classList.toggle('active', starRating <= rating);
            });
        }

        function updateStars() {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                const starRating = parseInt(star.dataset.rating);
                star.classList.toggle('selected', starRating <= selectedRating);
                star.classList.remove('active');
            });
        }

        // Form Submission
        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const contact = document.getElementById('contact').value;
            const feedback = document.getElementById('feedback').value;
            
            if (!username || !contact || !feedback || selectedRating === 0) {
                alert('Please fill all fields and select a rating!');
                return;
            }
            
            // Simulate form submission
            showSuccessAlert();
            
            // Reset form
            setTimeout(() => {
                document.getElementById('feedbackForm').reset();
                selectedRating = 0;
                updateStars();
            }, 1000);
        });

        // Success Alert Functions
        function showSuccessAlert() {
            document.getElementById('alertOverlay').classList.add('show');
            document.getElementById('successAlert').classList.add('show');
        }

        function closeSuccessAlert() {
            document.getElementById('alertOverlay').classList.remove('show');
            document.getElementById('successAlert').classList.remove('show');
        }

        // Mobile Menu Functions
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

        // Close success alert when clicking overlay
        document.getElementById('alertOverlay').addEventListener('click', closeSuccessAlert);

        // Scroll to cards function (placeholder)
        function scrollToCards() {
            window.scrollTo({
                top: document.querySelector('.contact-section').offsetTop,
                behavior: 'smooth'
            });
        }