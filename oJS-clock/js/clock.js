function askName() {
    var name = prompt("Your Name");
    document.getElementById("myName").innerText = name;
}

function showTime() {
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = date.getDay();

if (session == 1) {
    session = "Monday";
} else if (session == 2) {
    session = "Tuesday";
} else if (session == 3) {
    session = "Wednesday";
} else if (session == 4) {
    session = "Thursday";
} else if (session == 5) {
    session = "Friday";
} else if (session == 6) {
    session = "Saturday";
} else if (session == 7) {
    session = "Sunday";
}

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementById("myClock").innerText = time;
document.getElementById("myClock").textContent = time;

setTimeout(showTime, 1000);
}

askName();
showTime(); 