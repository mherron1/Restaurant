import { makeNav } from "./navBar";

const displayContact = function () {
  let content = document.querySelector("#content");
  while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
  }

  makeNav();

  let contactHeading = document.createElement("h1");
  contactHeading.textContent = "Contact Us";
  content.appendChild(contactHeading);

  let details = document.createElement("h4");
  details.textContent = "Order by phone:  (84748) 48485 5452 45646 552";
  details.classList = "description";
  content.appendChild(details);

  let map = document.createElement("div");
  map.classList = "map";
  map.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8010.624639266285!2d-6.262091871668049!3d53.35090027850706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1612805939682!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  content.appendChild(map);
};

export { displayContact };
