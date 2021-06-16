
//document.click.body{ if one clicked..... else.....}

var forProduct = document.querySelector('.product').classList;
var forCompany = document.querySelector('.company').classList;
var forConnect = document.querySelector('.connect').classList;

var forFas0 = document.querySelector('.fas0').classList;
var forFas1 = document.querySelector('.fas1').classList;
var forFas2 = document.querySelector('.fas2').classList;

var forFas4 = document.querySelector('.fas4').classList;

document.querySelector('body').addEventListener('click', function(event){
  if (event.target === document.querySelector('.one')) {
    //On click product
    
      forProduct.toggle('js-menu');
      forCompany.remove('js-menu');
      forConnect.remove('js-menu');
  
      forFas0.toggle('fa-chevron-up');
      forFas0.toggle('fa-chevron-down');
  
      forFas1.remove('fa-chevron-up');
      forFas1.add('fa-chevron-down');
  
      forFas2.remove('fa-chevron-up');
      forFas2.add('fa-chevron-down');
    
  } else if (event.target === document.querySelector('.two')) {
    
    //On click company
    
      forCompany.toggle('js-menu');
      forConnect.remove('js-menu');
      forProduct.remove('js-menu');
  
      forFas1.toggle('fa-chevron-up');
      forFas1.toggle('fa-chevron-down');
  
      forFas0.remove('fa-chevron-up');
      forFas0.add('fa-chevron-down');
  
      forFas2.remove('fa-chevron-up');
      forFas2.add('fa-chevron-down');

  } else if (event.target === document.querySelector('.three')) {
    //On click connect
    
      forConnect.toggle('js-menu');
      forProduct.remove('js-menu');
      forCompany.remove('js-menu');
  
      forFas2.toggle('fa-chevron-up');
      forFas2.toggle('fa-chevron-down');
  
      forFas0.remove('fa-chevron-up');
      forFas0.add('fa-chevron-down');
  
      forFas1.remove('fa-chevron-up');
      forFas1.add('fa-chevron-down');

  } else {
    forFas0.remove('fa-chevron-up');
    forFas0.add('fa-chevron-down');
  
    forFas1.remove('fa-chevron-up');
    forFas1.add('fa-chevron-down');
  
    forFas2.remove('fa-chevron-up');
    forFas2.add('fa-chevron-down');
  
    forConnect.remove('js-menu');
    forProduct.remove('js-menu');
    forCompany.remove('js-menu');
  }
})

document.querySelector('.bar-icon').addEventListener('click', function(){

  var elements = document.querySelectorAll('.main-list');
  var elements2 = document.querySelectorAll('.buttons');

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].style.display == 'none') {
      elements[i].style.display = 'block';
      forFas4.remove('fa-bars');
      forFas4.add('fa-times');
    } else {
      elements[i].style.display = 'none';
      forFas4.add('fa-bars');
      forFas4.classList.remove('fa-times');
    }
  }

  for (var j = 0; j < elements2.length; j++){
    if(elements2[j].style.display == 'none') {
      elements2[j].style.display = 'block';
    }else{
      elements2[j].style.display = 'none';
    }    
  }
})













