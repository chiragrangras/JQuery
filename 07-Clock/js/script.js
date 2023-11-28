$(document).ready(function () {
  function showDate(){
    const today = new Date();
    const day = today.toLocaleString('default', {weekday: 'long'});
    const month = today.toLocaleString('default', { month: 'long'});
    const date = today.getDate();
    const year = today.getFullYear();
    const dateStr = `${day}, ${month} ${date}, ${year}`;
    document.getElementById("MyDateDisplay").innerText = dateStr;
  }

  showDate();  

  function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = `${h}:${m}:${s} ${session}`;
    document.getElementById("MyClockDisplay").innerText = time;

    setTimeout(showTime, 1000);
  }

  showTime();
 
});