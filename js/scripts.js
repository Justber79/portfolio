alert("Welcome on Bereza Design page");
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
    x.className = 'navtoggle';
    }
    }