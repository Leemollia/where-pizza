export default class showContentPizza {
  constructor() {
    for (let i = 0; i < out.pizza.length; i++) {

      const div = document.createElement("div");
      div.className = "content-card";

      function contentLabel() {
        if (out.pizza[i].hit) {
          return (div.innerHTML = `<div class="content-card__label">New</div>`);
        } else return "";
      }

      function contentImg() {
        return (div.innerHTML = `<img src=${out.pizza[i].image}>`);
      }

      function contentDescription() {
        return `<div class="content-card_description">
        ${descriptionH3()}
        ${descriptionP()}
        ${contentSelect()}
        </div>`;

        function descriptionH3() {
          return (div.innerHTML = `<h3>${out.pizza[i].title}</h3>`);
        }

        function descriptionP() {
          return (div.innerHTML = `<p>${out.pizza[i].ingredients}</p>`);
        }

        function contentSelect() {
          return `<div class="content-card_select">
        <button class="button button-select" uk-toggle="target: #modal-menu">Выбрать</button>
        <span>${"от " + out.pizza[i].price + " ₽"}</span>
        </div>`;
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
