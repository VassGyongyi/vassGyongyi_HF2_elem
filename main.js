import Elem from "./elem.js";


$(function () {
  let elem = $(".tarolo");
  elem.html('<div class="divElem"><p></p></div>');
  new Elem(elem);
  
  });
