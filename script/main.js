const headerSticky = document.querySelector(".header-sticky");
const headerStickyLinks = document.querySelector(".sticky__links");

document.addEventListener("DOMContentLoaded", () => {
  const allButtonFilter = document.querySelectorAll(".button-filter");
  const allButtonSelect = document.querySelectorAll(".button-select");

  allButtonFilter.forEach((button) => {
    button.setAttribute("uk-toggle", "target: #filter-menu");

    button.addEventListener("click", () => {
      button.setAttribute("uk-toggle", "target: #filter-menu");
    });
  });

  allButtonSelect.forEach((button) => {
    button.setAttribute("uk-toggle", "target: #modal-menu");

    button.addEventListener("click", () => {
      button.setAttribute("uk-toggle", "target: #modal-menu");
    });
  });
});

const allButtonBorder = document.querySelectorAll(".button-border");

allButtonBorder.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("button-border-focus");
  });
});

const allButtonModalSelect = document.querySelectorAll(".button-modal-select");

allButtonModalSelect.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("border-select");
  });
});

window.onscroll = function showHeaderSticky() {
  if (window.innerWidth > 960) {
    if (document.documentElement.scrollTop > 180) {
      headerStickyLinks.style.display = "flex";
    } else {
      headerStickyLinks.style.display = "none";
    }
  }
};

window.onscroll = function showStickyCart() {
  const buttonStickyCart = document.querySelector(".sticky-cart");
  if (window.innerWidth < 960) {
    if (document.documentElement.scrollTop > 180) {
      buttonStickyCart.style.transform = "translateY(-80px)";
    } else if (document.documentElement.scrollTop < 180) {
      buttonStickyCart.style.transform = "translateY(80px)";
    }
  }
};
