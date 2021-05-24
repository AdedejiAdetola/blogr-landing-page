
//on click company, product, connect : sub -links should be displayed ---- on click main-li, display js-menu

/*
onclick 'one', display:block
onclick 'two', display:block and add js-menu, remove js-menu from others 
onclick 'three' display:block add js-menu, remove from others*/

document.querySelector('.one').addEventListener('click',function(){
  document.querySelector('.product').classList.add('js-menu');
})

//adding and removing class list .js-menu
// else onclick anywhere else display returns to none