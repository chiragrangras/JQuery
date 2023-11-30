$(document).ready(function () {
  // $(".child-two").parent().css("border", "2px solid red");
  $(".child-two").parents().css("border", "2px solid blue");
  // $( ".child-two" ).parentsUntil(".great-grand-parent").css( "border", "2px solid teal" );
  // $( ".child-two" ).parentsUntil(".grand-parent").css( "border", "2px solid teal" );
});
