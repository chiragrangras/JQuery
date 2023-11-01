function showAcc() {
  $("#demo-acc").show();
}

function hideAcc() {
  $("#demo-acc").hide();
}

$(document).ready(function () {
  $("#dark").click(function () {
    $("#nav-bar").toggleClass("dark-theme");
    $(".nav a").toggleClass("dark-theme");
    $("#left").toggleClass("dark-theme");
    $("#right").toggleClass("dark-theme");
    $("#left-container a").toggleClass("dark-theme");
    $("#acc-container").toggleClass("dark-theme");
  });

  $("#acc-btn").hover(
    function () {
      $("#demo-acc").show();
    },
    function () {
      $("#demo-acc").hide();
    }
  );
});
