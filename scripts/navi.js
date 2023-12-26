function HamburgerMeny() {
    var x = document.getElementById("meny");
    if (x.className === "meny") {
        x.className += " responsiva-meny";
    } else {
        x.className = "meny";
    }
}
