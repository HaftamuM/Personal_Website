$(window).resize(function() { 
  
  if ($(window).width() > 928) {
    $('aside').height($('section').height())
  } else {
    $('aside').height('auto')
  }
   
});