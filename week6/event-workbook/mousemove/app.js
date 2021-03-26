var box1 = document.getElementsByClassName("red-box");
var header = document.getElementsByTagName("h1");

box1[0].addEventListener("mousemove", e => {
    header[0].textContent = "x-axis " + e.x + " , " + " y-axis " + e.y;
})