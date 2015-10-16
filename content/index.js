function checkTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var per = checkPeriod(h);
  h = h % 8;
  m = addZeros(m);
  s = addZeros(s);
  document.getElementById('hours').innerHTML = h;
  document.getElementById('minutes').innerHTML = m;
  document.getElementById('seconds').innerHTML = s;
  document.getElementById('period').innerHTML = per;
  var t = setTimeout(function() {checkTime()}, 500);
}

function checkPeriod(x) {
  var period;
  if (x<8) {
    period = "&#1071;&#1043;";
  } else if (x<16) {
    period = "L&#1071;";
  } else {
    period = "&#1071;&#1057;";
  }
  return period;
}

function addZeros(x) {
  if (x < 10) {
    x = "0" + x.toString();
  }
  return x;
}

document.addEventListener('DOMContentLoaded', function () {
  checkTime();
});
