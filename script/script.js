import modalMenu from "./components/modalMenu.js";
import showContentDeserts from "./components/showContentDeserts.js";
import showContentDrinks from "./components/showContentDrinks.js";
import showContentPizza from "./components/showContentPizza.js";
import showContentSauce from "./components/showContentSauce.js";
import showContentSnacks from "./components/showContentSnacks.js";
import showContentSushi from "./components/showContentSushi.js";

export const out = await fetch("https://leemollia.github.io/where-pizza/database.json")
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((err) => console.error(err));

new showContentPizza;
new showContentSushi;
new showContentSnacks;
new showContentDeserts;
new showContentDrinks;
new showContentSauce;
new modalMenu;