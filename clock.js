window.setInterval(displayTime, 1000);

function displayTime() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementsByClassName('clock')[0].innerHTML = time;
}
