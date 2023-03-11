const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuItems = document.querySelectorAll(".menu__link");

if (menuIcon) {
  menuIcon.addEventListener("click", function (e) {
    body.classList.toggle("_lock");
    menu.classList.toggle("_active");
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    
    e.stopPropagation();
    body.addEventListener("click", (elm) => {
      if (!elm.target.closest(".menu__body")) closeMenu();
    });
  });

  menuItems.forEach(function(el) {
    el.addEventListener("click", closeMenu);
  });
}

function closeMenu() {
  body.classList.remove("_lock");
  menu.classList.remove("_active");
  menuIcon.classList.remove("_active");
  menuBody.classList.remove("_active");
}
