import { makeNav } from "./navBar";

const displayMenu = function () {
  let content = document.querySelector("#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  makeNav();

  let menuHeading = document.createElement("h1");
  menuHeading.textContent = "Menu";
  content.appendChild(menuHeading);

  let menu = document.createElement("img");
  menu.src = "../src/menu.jpg";
  content.appendChild(menu);
};

export { displayMenu };
