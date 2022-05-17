import { out } from "../script.js";

export default class showContentDeserts {
  constructor() {
    const content = document.querySelector(".content.content-deserts");

    for (let i = 0; i < out.deserts.length; i++) {
      const div = document.createElement("div");
      div.className = "content-card";

      function contentLabel() {
        if (out.deserts[i].hit) {
          return (div.innerHTML = `<div class="content-card__label">New</div>`);
        } else if (out.deserts[i].new) {
          return (div.innerHTML = `<div class="content-card__label">Хит</div>`);
        } else return "";
      }

      function contentImg() {
        return (div.innerHTML = `<img loading="lazy" src=${out.deserts[i].image}>`);
      }

      function contentDescription() {
        return `<div class="content-card_description">
        ${descriptionH3()}
        ${descriptionP()}
        ${contentSelect()}
        </div>`;

        function descriptionH3() {
          return (div.innerHTML = `<h3>${out.deserts[i].title}</h3>`);
        }

        function descriptionP() {
          if (out.deserts[i].ingredients == "") return ""
          else return div.innerHTML = `<p>${out.deserts[i].ingredients}</p>`
        }

        function contentSelect() {
          if (window.innerWidth < 960) {
            return `<div class="content-card_select">
                    <button class="button button-select" uk-toggle="target: #modal-menu">
                      <span>${out.deserts[i].price + " ₽"}</span>
                    </button>
                  </div>`;
          } else {
            return `<div class="content-card_select">
                    <button class="button button-select" uk-toggle="target: #modal-menu">Выбрать</button>
                      <span>${out.deserts[i].price + " ₽"}</span>
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
