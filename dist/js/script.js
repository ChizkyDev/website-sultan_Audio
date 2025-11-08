// dist/js/script.js - KODE LENGKAP DAN TERSTRUKTUR

document.addEventListener('DOMContentLoaded', function() {
    
    // Semua Deklarasi Elemen
    const header = document.querySelector("header"); // Elemen <header>
    const humburger = document.querySelector("#humburger"); // Tombol hamburger
    const navMenu = document.querySelector("#nav-menu"); // Navigasi menu
    const darkToggle = document.querySelector("#dark-toggle"); // Checkbox Dark Mode
    const html = document.querySelector("html"); // Tag <html>
    const toTop = document.querySelector("#to-top"); // Tombol Back to Top

    // --- 1. Fungsionalitas Navbar Fixed (Scroll Event) ---
    if (header) {
        // Ambil posisi awal header (jarak dari atas)
        const fixedNav = header.offsetTop;

        window.onscroll = function () {
            // Logika untuk Navbar Fixed
            if (window.scrollY > fixedNav) {
                header.classList.add("navbar-fixed");
                
                // Logika untuk Tombol To Top
                if (toTop) { 
                    toTop.classList.remove("hidden"); 
                    toTop.classList.add("flex"); 
                }
            } else {
                header.classList.remove("navbar-fixed");
                
                // Logika untuk Tombol To Top
                if (toTop) { 
                    toTop.classList.remove("flex"); 
                    toTop.classList.add("hidden"); 
                }
            }
        };
    }

    // --- 2. Fungsionalitas Hamburger Menu ---
    if (humburger && navMenu) { 
        humburger.addEventListener("click", function (e) {
            e.stopPropagation(); 
            humburger.classList.toggle("humburger-active"); 
            navMenu.classList.toggle("hidden"); 
        });
        
        // Menutup menu jika klik di luar
        window.addEventListener("click", function (e) {
            if (!humburger.contains(e.target) && !navMenu.contains(e.target)) {
                humburger.classList.remove("humburger-active");
                navMenu.classList.add("hidden");
            }
        });

        // Menutup menu saat link diklik (untuk mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                humburger.classList.remove("humburger-active");
                navMenu.classList.add("hidden");
            });
        });
    }

    // --- 3. Fungsionalitas Dark Mode ---
    if (darkToggle && html) { 
        
        // 3.1. Inisialisasi posisi Dark Mode
        const isDark = localStorage.theme === "dark" || 
                       (!("theme" in localStorage) && 
                        window.matchMedia("(prefers-color-scheme: dark)").matches);

        if (isDark) {
            darkToggle.checked = true;
            html.classList.add("dark");
        } else {
            darkToggle.checked = false;
            html.classList.remove("dark");
        }

        // 3.2. Listener saat toggle di-klik
        darkToggle.addEventListener("click", function () {
            if (darkToggle.checked) {
                html.classList.add("dark");
                localStorage.theme = "dark";
            } else {
                html.classList.remove("dark");
                localStorage.theme = "light";
            }
        });
    }
});