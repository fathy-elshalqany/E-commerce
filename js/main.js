let bar = document.querySelector("#bar");
let navbar = document.querySelector("#navbar");
let closes = document.querySelector(".close");
let mainImg = document.querySelector(".MainImg");
let smallimg = document.querySelectorAll(".small-img");


if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
if (closes) {
  closes.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}


smallimg[0].onclick = function () {
  mainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function () {
  mainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function () {
  mainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function () {
  mainImg.src = smallimg[3].src;
}

