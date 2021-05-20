
//on click company, product, connect : sub -links should be displayed ---- on click main-li, display js-menu

/*document.querySelectorAll(".main-a").forEach(el => el.addEventListener("click", function(){
  const menu = document.querySelectorAll(".js-menu");
  menu.forEach(content => content.style.display = "block");
}))*/

document.querySelector(".main-a").addEventListener("click", function(){
  document.querySelector(".js-menu").style.display = "block";
})

//adding and removing class list .js-menu
// else onclick anywhere else display returns to none