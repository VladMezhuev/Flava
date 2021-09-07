const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");

  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("disabled");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 100) {
    header.classList.add("is-scroll");
  } else {
    header.classList.remove("is-scroll");
  }
}
window.addEventListener("scroll", scrollHeader);
