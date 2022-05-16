const contentCard = document.querySelectorAll(".content-card img");
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

const database = fetch("https://github.com/Leemollia/where-pizza/blob/a92ec15e43859ae27ed8e121a965d751d63de1cb/database.json")
  .then((res) => res.json())
  .then((out) => {
    //console.log(out);

    //Берем всю информацию из объекта JSON и вставляем в HTML (пицца)
    for (let i = 0; i < out.pizza.length; i++) {
      let div = document.createElement("div");
      div.className = "content-card";
      div.innerHTML = `
            <div class="content-card__label">New</div>
            <img src="${out.pizza[i].image}">
            <div class="content-card_description">
                <h3>${out.pizza[i].title}</h3>
                <p>${out.pizza[i].ingredients}</p>

                <div class="content-card_select">
                    <button class="button button-select" uk-toggle="target: #modal-menu">Выбрать</button>
                    <span>${"от " + out.pizza[i].price + " ₽"}</span>
                </div>
            </div>
            `;
      content.append(div);
    }
  })
  .catch((err) => console.error(err));