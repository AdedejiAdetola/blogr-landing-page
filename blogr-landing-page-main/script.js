
//document.click.body{ if one clicked..... else.....}


document.querySelector('body').addEventListener('click', function(event){
  if (event.target === document.querySelector('.one')) {
    //On click product
    
      document.querySelector('.product').classList.toggle('js-menu');
      document.querySelector('.company').classList.remove('js-menu');
      document.querySelector('.connect').classList.remove('js-menu');
  
      document.querySelector('.fas0').classList.toggle('fa-chevron-up');
      document.querySelector('.fas0').classList.toggle('fa-chevron-down');
  
      document.querySelector('.fas1').classList.remove('fa-chevron-up');
      document.querySelector('.fas1').classList.add('fa-chevron-down');
  
      document.querySelector('.fas2').classList.remove('fa-chevron-up');
      document.querySelector('.fas2').classList.add('fa-chevron-down');
    
  } else if (event.target === document.querySelector('.two')) {
    
    //On click company
    
      document.querySelector('.company').classList.toggle('js-menu');
      document.querySelector('.connect').classList.remove('js-menu');
      document.querySelector('.product').classList.remove('js-menu');
  
      document.querySelector('.fas1').classList.toggle('fa-chevron-up');
      document.querySelector('.fas1').classList.toggle('fa-chevron-down');
  
      document.querySelector('.fas0').classList.remove('fa-chevron-up');
      document.querySelector('.fas0').classList.add('fa-chevron-down');
  
      document.querySelector('.fas2').classList.remove('fa-chevron-up');
      document.querySelector('.fas2').classList.add('fa-chevron-down');

  } else if (event.target === document.querySelector('.three')) {
    //On click connect
    
      document.querySelector('.connect').classList.toggle('js-menu');
      document.querySelector('.product').classList.remove('js-menu');
      document.querySelector('.company').classList.remove('js-menu');
  
      document.querySelector('.fas2').classList.toggle('fa-chevron-up');
      document.querySelector('.fas2').classList.toggle('fa-chevron-down');
  
      document.querySelector('.fas0').classList.remove('fa-chevron-up');
      document.querySelector('.fas0').classList.add('fa-chevron-down');
  
      document.querySelector('.fas1').classList.remove('fa-chevron-up');
      document.querySelector('.fas1').classList.add('fa-chevron-down');

  } else {
    document.querySelector('.fas0').classList.remove('fa-chevron-up');
    document.querySelector('.fas0').classList.add('fa-chevron-down');
  
    document.querySelector('.fas1').classList.remove('fa-chevron-up');
    document.querySelector('.fas1').classList.add('fa-chevron-down');
  
    document.querySelector('.fas2').classList.remove('fa-chevron-up');
    document.querySelector('.fas2').classList.add('fa-chevron-down');
  
    document.querySelector('.connect').classList.remove('js-menu');
    document.querySelector('.product').classList.remove('js-menu');
    document.querySelector('.company').classList.remove('js-menu');
  }
})

document.querySelector('.bar-icon').addEventListener('click', function(){
  document.querySelector('.fas4').classList.toggle('fa-times');
})













