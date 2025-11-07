// navbar fixed
window.onscroll = function () {
  const header = this.document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = this.document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Humburger
const humburger = document.querySelector("#humburger");
const navMenu = document.querySelector("#nav-menu");

humburger.addEventListener("click", function () {
  humburger.classList.toggle("humburger-active");
  navMenu.classList.toggle("hidden");
});

// click di luar humburger
window.addEventListener("click", function (e) {
  if (e.target != humburger && e.target != navMenu) {
    humburger.classList.remove("humburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// posisi toggle yang sesuai
if (localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}