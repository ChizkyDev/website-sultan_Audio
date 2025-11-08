// dist/js/script.js - KODE LENGKAP DAN TERKOREKSI

document.addEventListener('DOMContentLoaded', function() {
    
    // Semua Deklarasi Elemen (Pastikan ID/Selector Sesuai HTML Anda)
    const header = document.querySelector("header"); // Elemen <header> utama
    const humburger = document.querySelector("#humburger"); // Tombol hamburger
    const navMenu = document.querySelector("#nav-menu"); // Navigasi menu
    const darkToggle = document.querySelector("#dark-toggle"); // Checkbox Dark Mode
    const html = document.querySelector("html"); // Tag <html>
    const toTop = document.querySelector("#to-top"); // Tombol Back to Top

    // --- 1. Fungsionalitas Navbar Fixed ---
    if (header) {
        // Ambil posisi awal header (jarak dari atas)
        const fixedNav = header.offsetTop;

        window.onscroll = function () {
            // Jika posisi scroll lebih besar dari posisi header
            if (window.scrollY > fixedNav) {
                // Tambahkan class untuk membuat navbar fixed (navbar-fixed harus ada di input.css/final.css Anda)
                header.classList.add("navbar-fixed");
                
                // Tampilkan tombol To Top
                if (toTop) { 
                    toTop.classList.remove("hidden"); 
                    toTop.classList.add("flex"); 
                }
            } else {
                // Hapus class agar navbar kembali normal
                header.classList.remove("navbar-fixed");
                
                // Sembunyikan tombol To Top
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
            // Mengganti class humburger (untuk animasi)
            humburger.classList.toggle("humburger-active"); 
            // Menampilkan/menyembunyikan menu navigasi
            navMenu.classList.toggle("hidden"); 
        });
        
        // Menutup menu jika klik di luar hamburger DAN di luar menu
        window.addEventListener("click", function (e) {
            if (!humburger.contains(e.target) && !navMenu.contains(e.target)) {
                humburger.classList.remove("humburger-active");
                navMenu.classList.add("hidden");
            }
        });

        // Menutup menu saat link di dalamnya diklik (biasanya untuk mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                humburger.classList.remove("humburger-active");
                navMenu.classList.add("hidden");
            });
        });
    }

    // --- 3. Fungsionalitas Dark Mode ---
    if (darkToggle && html) { 
        
        // 3.1. Inisialisasi posisi Dark Mode Toggle dan class <html> saat halaman dimuat
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

        // 3.2. Listener untuk mengaktifkan/menonaktifkan Dark Mode saat di-klik
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