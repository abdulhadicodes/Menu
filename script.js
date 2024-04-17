//FUNCTIONALITY
const mobile_nav = document.querySelector(".mobileNavBtn");
const nav_header = document.querySelector(".header");
const nav_Links = document.querySelector(".navLinks");
const toggleNav = () => {
    nav_header.classList.toggle("active");
    
};
const closeNav = () => {
    nav_header.classList.remove("active");
};

mobile_nav.addEventListener("click", () => toggleNav());

nav_Links.addEventListener("click", () => closeNav());