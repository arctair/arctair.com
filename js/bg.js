$(document).ready(function() {
    var hour = (new Date()).getHours();
    if (hour >= 8 && hour <= 20) 
        setDay();
    else 
        setNight();
});

function setDay() {
    $(document.body).removeClass('night');
    $(document.body).addClass('day');
}

function setNight() {
    $(document.body).removeClass('day');
    $(document.body).addClass('night');
}

function toggleMode() {
  if ($(document.body).hasClass('day')) {
    setNight();
  } else {
    setDay();
  }
}