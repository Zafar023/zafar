const btn = document.querySelector(".btn-pod");
const box = document.querySelector(".box-pod");

btn.addEventListener("click", () => {
  box.classList.toggle("active");
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
$('.single-item').slick();