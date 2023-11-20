$(document).ready(function () {
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
  );

  $("#themes-selector").change(function () {
    switch (this.value) {
      case "white":
        console.log("You selected white theme");
        $("body").attr("class", "theme-white");
        $("#main-container").attr("class", "theme-white");
        break;
      case "orange":
        console.log("You selected orange theme");
        $("body").attr("class", "theme-orange");
        $("#main-container").attr("class", "theme-orange");
        break;
      case "green":
        console.log("You selected green theme");
        $("body").attr("class", "theme-green");
        $("#main-container").attr("class", "theme-green");
        break;
      case "blue":
        console.log("You selected blue theme");
        $("body").attr("class", "theme-blue");
        $("#main-container").attr("class", "theme-blue");
        break;
      case "purple":
        console.log("You selected purple theme");
        $("body").attr("class", "theme-purple");
        $("#main-container").attr("class", "theme-purple");
        break;
      case "black":
        console.log("You selected black theme");
        $("body").attr("class", "theme-black");
        $("#main-container").attr("class", "theme-black");
        break;
      default:
        console.log("Invalid theme selection.");
    }
  });
});
