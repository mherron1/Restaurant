(()=>{"use strict";const e=function(){let e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);n();let t=document.createElement("h1");t.textContent="Menu",e.appendChild(t);let l=document.createElement("img");l.src="../src/menu.jpg",e.appendChild(l)},t=function(){let e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);n();let t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t);let l=document.createElement("h4");l.textContent="Order by phone:  (84748) 48485 5452 45646 552",l.classList="description",e.appendChild(l);let d=document.createElement("div");d.classList="map",d.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8010.624639266285!2d-6.262091871668049!3d53.35090027850706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1612805939682!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',e.appendChild(d)},n=function(){let n=document.querySelector("#content"),d=document.createElement("ul");n.appendChild(d);let o=document.createElement("li");o.textContent="Home",d.appendChild(o),o.addEventListener("click",l);let c=document.createElement("li");c.textContent="Menu",d.appendChild(c),c.addEventListener("click",e);let a=document.createElement("li");a.textContent="Contact",d.appendChild(a),a.addEventListener("click",t)},l=function(){let e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.lastChild);n();let t=document.createElement("h1");t.textContent="Welcome!";let l=document.createElement("img");l.src="../src/foodImage.jpg",l.classList="homeImage";let d=document.createElement("h3");d.textContent="Congratulations, you have found the greatest rural burger joint within a 2km radius! Take a look at out amazing menu!",d.classList="description",e.appendChild(t),e.appendChild(d),e.appendChild(l)};l()})();