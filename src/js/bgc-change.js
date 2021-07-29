var color = ["black", "yellow", "white", "red", "blue", "orange", "aqua"];
var i = 0;
document.querySelector(".bgc-change").addEventListener("click",
    function () {
        i = i < color.length ? ++i : 0;
        document.querySelector(".section-hero").style.background = color[i]
})

var color = ["black", "aqua", "white", "red", "blue", "orange", "yellow"];
var i = 0;
document.querySelector(".bgc-change").addEventListener("click",
    function () {
        i = i < color.length ? ++i : 0;
        document.querySelector(".bg-circle").style.background = color[i]
})