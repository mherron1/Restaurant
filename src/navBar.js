import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";

const makeNav = function () {
  let content = document.querySelector("#content");

  let nav = document.createElement("ul");
  content.appendChild(nav);

  let home = document.createElement("li");
  home.textContent = "Home";
  nav.appendChild(home);
  home.addEventListener("click", displayHome);

  let menu = document.createElement("li");
  menu.textContent = "Menu";
  nav.appendChild(menu);
  menu.addEventListener("click", displayMenu);

  let contact = document.createElement("li");
  contact.textContent = "Contact";
  nav.appendChild(contact);
  contact.addEventListener("click", displayContact);
};

export { makeNav };
