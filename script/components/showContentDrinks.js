import { out } from "../script.js";

export default class showContentDrinks {
  constructor() {
    const content = document.querySelector(".content.content-drinks");

    for (let i = 0; i < out.drinks.length; i++) {
      const div = document.createElement("div");
      div.className = "content-card";

      function contentLabel() {
        if (out.drinks[i].hit) {
          return (div.innerHTML = `<div class="content-card__label">New</div>`);
        } else if (out.drinks[i].new) {
          return (div.innerHTML = `<div class="content-card__label">Хит</div>`);
        } else return "";
      }

      function contentImg() {
        return (div.innerHTML = `<img loading="lazy" src=${out.drinks[i].image}>`);
      }

      function contentDescription() {
        return `<div class="content-card_description">
        ${descriptionH3()}
        ${descriptionP()}
        ${contentSelect()}
        </div>`;

        function descriptionH3() {
          return (div.innerHTML = `<h3>${out.drinks[i].title}</h3>`);
        }

        function descriptionP() {
          if (out.drinks[i].ingredients == "") return ""
          else return div.innerHTML = `<p>${out.drinks[i].ingredients}</p>`
        }

        function contentSelect() {
            if (window.innerWidth < 960) {
              return `<div class="content-card_select">
                      <button class="button button-select" uk-toggle="target: #modal-menu">
                        <span>${out.drinks[i].price + " ₽"}</span>
                      </button>
                    </div>`;
            } else {
              return `<div class="content-card_select">
                      <button class="button button-select" uk-toggle="target: #modal-menu">Выбрать</button>
                        <span>${out.drinks[i].price + " ₽"}</span>
                    </div>`;
            }
            
          }
      }

      div.innerHTML = `
    ${contentLabel()}
    ${contentImg()}
    ${contentDescription()}`;

      content.append(div);
    }
  }
}
