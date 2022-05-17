import { out } from "../script.js";

export default class showContentSauce {
  constructor() {
    const content = document.querySelector(".content.content-sauce");

    for (let i = 0; i < out.sauce.length; i++) {
      const div = document.createElement("div");
      div.className = "content-card";

      function contentLabel() {
        if (out.sauce[i].hit) {
          return (div.innerHTML = `<div class="content-card__label">New</div>`);
        } else if (out.sauce[i].new) {
          return (div.innerHTML = `<div class="content-card__label">Хит</div>`);
        } else return "";
      }

      function contentImg() {
        return (div.innerHTML = `<img loading="lazy" src=${out.sauce[i].image}>`);
      }

      function contentDescription() {
        return `<div class="content-card_description">
        ${descriptionH3()}
        ${descriptionP()}
        ${contentSelect()}
        </div>`;

        function descriptionH3() {
          return (div.innerHTML = `<h3>${out.sauce[i].title}</h3>`);
        }

        function descriptionP() {
          if (out.sauce[i].ingredients == "") return ""
          else return div.innerHTML = `<p>${out.sauce[i].ingredients}</p>`
        }

        function contentSelect() {
            if (window.innerWidth < 960) {
              return `<div class="content-card_select">
                      <button class="button button-select" uk-toggle="target: #modal-menu">
                        <span>${out.sauce[i].price + " ₽"}</span>
                      </button>
                    </div>`;
            } else {
              return `<div class="content-card_select">
                      <button class="button button-select" uk-toggle="target: #modal-menu">Выбрать</button>
                        <span>${out.sauce[i].price + " ₽"}</span>
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
