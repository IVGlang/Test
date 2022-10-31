function close_window() {
    var wine = document.getElementById("window");
    var panel = document.getElementById("panel");
    wine.style.display = "none";
    panel.style.display = "none";
}

function wine() {
    var wine = document.getElementById("window");
    wine.removeChild(document.getElementById("insideWindow"));
    wine.style.display =  "block";

    var panel = document.getElementById("panel");
    panel.style.display = "block";

    var insideWindow = document.createElement("div");
    insideWindow.id = "insideWindow";
    
    var p = document.createElement("p");
    p.id = "div";
    p.style.textAlign = "center";
    p.style.textDecoration = "underline";
    p.style.cursor = "pointer";
    p.setAttribute("onclick", "close_window();");
    p.appendChild(document.createTextNode("Закрыть"));
    insideWindow.appendChild(p);

    wine.appendChild(insideWindow);
}

window.onload = function() {
    var button2 = document.getElementById("button2");
    button2.setAttribute("onclick", "wine();");
};