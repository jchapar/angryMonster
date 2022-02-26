//Toggle mobile menu
const menuToggleOpen = document.querySelector(".menu-toggle-open");
const menuToggleClose = document.querySelector(".menu-toggle-close");
const navMobileElement = document.querySelector(".nav-mobile");

menuToggleOpen.addEventListener("click", () =>
  navMobileElement.classList.add("active")
);
menuToggleClose.addEventListener("click", () =>
  navMobileElement.classList.remove("active")
);
//Toggle theme

//Show dropdown menu
