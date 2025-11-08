// dist/js/script.js 
document.addEventListener('DOMContentLoaded', function() {
    
    // Semua Deklarasi Elemen
    const header = document.querySelector("header");
    const humburger = document.querySelector("#humburger");
    const navMenu = document.querySelector("#nav-menu");
    const darkToggle = document.querySelector("#dark-toggle");
    const html = document.querySelector("html");
    const toTop = document.querySelector("#to-top"); 

    // --- Fungsionalitas Navbar Fixed ---
    if (header) {
        window.onscroll = function () {
            const fixedNav = header.offsetTop;

            if (window.scrollY > fixedNav) {
                header.classList.add("navbar-fixed");
                if (toTop) { toTop.classList.remove("hidden"); toTop.classList.add("flex"); }
            } else {
                header.classList.remove("navbar-fixed");
                if (toTop) { toTop.classList.remove("flex"); toTop.classList.add("hidden"); }
            }
        };
    }

    // --- Fungsionalitas Hamburger Menu ---
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

        // Menutup menu saat link di dalam nav diklik (untuk mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                humburger.classList.remove("humburger-active");
                navMenu.classList.add("hidden");
            });
        });
    }

    // --- Fungsionalitas Dark Mode ---
    if (darkToggle && html) { 
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            darkToggle.checked = true;
            html.classList.add("dark");
        } else {
            darkToggle.checked = false;
            html.classList.remove("dark");
        }

        // 2. Listener untuk mengaktifkan/menonaktifkan Dark Mode saat di-klik
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