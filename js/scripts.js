$(document).ready(function() {
  $(".panel-heading").hover(function() {
  	$(".panel-body").slideDown("slow");
  	$(".panel-body").slideUp("slow");
  });
});