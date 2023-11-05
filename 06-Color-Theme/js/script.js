function showAcc() {
  $("#demo-acc").show();
}

function hideAcc() {
  $("#demo-acc").hide();
}

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
});
