$(document).ready(function(){

  $.get("html/navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
  });

});
