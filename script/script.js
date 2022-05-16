import showContentPizza from "./components/showContentPizza.js";

const content = document.querySelector(".content");

window.onscroll = function showHeaderSticky() {
  if (window.innerWidth > 960) {
    if (document.documentElement.scrollTop > 180) {
      headerStickyLinks.style.display = "flex";
    } else {
      headerStickyLinks.style.display = "none";
    }
  }
};


fetch("../database.json")
  .then((res) => res.json())
  .then((out) => {

    new showContentPizza ()
  })
  .catch((err) => console.error(err));