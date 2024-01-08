const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// function stopscroll() {
//   var element = document.getElementById("hamburger-scroll");
//   element.classList.add("stop");
//   // document.body.classList.add(" stop");
// }

// function removescroll() {
//   var element = document.getElementById("hamburger-scroll");
//   element.classList.remove("header-scroll stop");
// }

$(".hamburger").click(function () {
  if ($(this).hasClass("current")) {
    $(this).removeClass("current");
  } else {
    $(".hamburger").removeClass("current");
    $(this).addClass("current");
  }
});
