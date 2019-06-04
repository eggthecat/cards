$(document).ready(function(){

  $(".show").click(function() {

    $(".text").parent("").show();
  });

  $(".hide").click(function() {
    $(".text").hide();
  });

});
