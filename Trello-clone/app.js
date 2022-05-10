let navData = document.querySelector(".nav__time");

navData.innerText = new Date().toLocaleTimeString().slice(0, -3);
navData.addEventListener(
  "mouseover",
  () => (navData.innerText = new Date().toLocaleDateString())
);
navData.addEventListener(
  "mouseout",
  () => (navData.innerText = new Date().toLocaleTimeString().slice(0, -3))
);

// let windowHeight = window.innerHeight;
// let headerHeight = document.querySelector(".header").ou;
// let wrapperHeight = windowHeight - headerHeight;
// document.querySelector(".wrapper").style.height = wrapperHeight;
// console.log(headerHeight);
