$(document).ready(function(){

  $.get("navTop.html", function(data){
    $("#nav-top").replaceWith(data);
  });

});

$(document).ready(function(){

  $.get("navBottom.html", function(data){
    $("#nav-bot").replaceWith(data);
  });

});
