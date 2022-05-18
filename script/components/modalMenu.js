import { out } from "../script.js";

export default class modalMenu {
  constructor() {
    const button = document.querySelectorAll(".button.button-select");
    const ccImg = document.querySelectorAll(".content-card img");
    const ccTitle = document.querySelectorAll(".content-card h3");
    const ccPrice = document.querySelectorAll(".content-card .button.button-select span");
    const ccIngredients = document.querySelectorAll(".content-card .content-card_description p");
    const modalImg = document.querySelector(".modal-menu .modal__leftpanel img");
    const modalTitle = document.querySelector('.modal-menu .modal__rightpanel h4');
    const modalIngredients = document.querySelector('.modal-menu .modal__rightpanel .rightpanel__ingredients');
    const modalPrice = document.querySelector('.modal-menu .modal__rightpanel .price__price');


// Доделать ингредиенты, дать проверку на параграф
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", () => {
        modalImg.setAttribute("src", `${ccImg[i].src}`);
        modalTitle.innerHTML = `${ccTitle[i].innerHTML}`;
        console.log(ccIngredients[i]);
        modalIngredients.innerHTML = `<div class="ingredients__block">${ccIngredients[i].innerHTML}</div>`;
        modalPrice.innerHTML = `${ccPrice[i].innerHTML.replace('от ', '')}`;
      });
    }
  }
}
