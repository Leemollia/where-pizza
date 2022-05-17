import { out } from "../script.js";

export default class showContentSushi {
  constructor() {
    const content = document.querySelector(".content.content-sushi");

    for (let i = 0; i < out.sushi.length; i++) {
      const div = document.createElement("div");
      div.className = "content-card";

      function contentLabel() {
        if (out.sushi[i].hit) {
          return (div.innerHTML = `<div class="content-card__label">New</div>`);
        } else if (out.sushi[i].new) {
          return (div.innerHTML = `<div class="content-card__label">Хит</div>`);
        } else return "";
      }

      function contentImg() {
        return (div.innerHTML = `<img loading="lazy" src=${out.sushi[i].image}>`);
      }

      function contentDescription() {
        return `<div class="content-card_description">
        ${descriptionH3()}
        ${descriptionP()}
        ${contentSelect()}
        </div>`;

        function descriptionH3() {
          return (div.innerHTML = `<h3>${out.sushi[i].title}</h3>`);
        }

        function descriptionP() {
          return (div.innerHTML = `<p>${out.sushi[i].ingredients}</p>`);
        }

        function contentSelect() {
            if (window.innerWidth < 960) {
              return `<div class="content-card_select">
                      <button class="button button-select" uk-toggle="target: #modal-menu">
                        <span>${out.sushi[i].price + " ₽"}</span>
                      </button>
                    </div>`;
            } else {
              return `<div class="content-card_select">
                      <button class="button button-select" uk-toggle="target: #modal-menu">Выбрать</button>
                        <span>${out.sushi[i].price + " ₽"}</span>
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
