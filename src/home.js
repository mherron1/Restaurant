import { makeNav } from "./navBar";

const displayHome = function () {
  let content = document.querySelector("#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  makeNav();

  let heading = document.createElement("h1");
  heading.textContent = "Welcome!";
  let image1 = document.createElement("img");
  image1.src = "../src/foodImage.jpg";
  image1.classList = "homeImage";
  let descr = document.createElement("h3");
  descr.textContent =
    "Congratulations, you have found the greatest rural burger joint within a 2km radius! Take a look at out amazing menu!";
  descr.classList = "description";
  content.appendChild(heading);
  content.appendChild(descr);
  content.appendChild(image1);
};

export { displayHome };
