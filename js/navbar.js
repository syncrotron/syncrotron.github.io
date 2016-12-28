$(document).ready(function(){

  $.get("navTop.html", function(data){
    $("#nav-top").replaceWith(data);
  });

});
