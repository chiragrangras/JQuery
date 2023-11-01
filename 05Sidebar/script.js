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
    $(".nav").toggleClass("dark-theme-border-bottom");
    $("#left").toggleClass("dark-theme");
    $("#right").toggleClass("dark-theme");
    $("#left-container a").toggleClass("dark-theme");
    $("#acc-container").toggleClass("dark-theme");
    $("#content").toggleClass('dark-theme-content');
    $("#content").toggleClass('dark-theme-border-lr');
    $("body").toggleClass('dark-theme');
    $("#acc-btn").toggleClass('dark-theme');
    $("#drop-btn").toggleClass('dark-theme');
  });

  $("#acc-btn").hover(
    function () {
      $("#demo-acc").show();
    },
    function () {
      $("#demo-acc").hide();
    }
  );
  $("#drop-btn").hover(
    function () {
      $("#down-acc").show();
    },
    function () {
      $("#down-acc").hide();
    }
  )
});
