const hamburgerBtn = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamburgerBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.addEventListener("click", (e) => {
  if (e.target.tagName !== "A") {
    mainNav.classList.remove("open");
  }
});
