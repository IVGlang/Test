window.onload = function() {
    //logo
    var logo = document.getElementById("logo");
    logo.onclick = function() {
        var title = getComputedStyle(document.getElementById("title")).fontSize;
        var p = getComputedStyle(document.getElementById("p")).fontSize;
        alert("logo: " + getComputedStyle(logo).fontSize + "\ntitle: " + title + "\np: " + p);
    }

    //info about company
    var infoaboutcompany = document.getElementById("infoaboutcompany");
    infoaboutcompany.onclick = function() {
        alert("Незарегистрированный компания \"IVGlang\"");
    }

    //version
    var version = document.getElementById("version");
    version.onclick = function() {
        document.getElementById("block").style.display = "block";
        document.getElementById("window").style.display = "block";
        document.getElementById("block").style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }

    //inside window
    var insidewindow = document.getElementById("insidewindow");
    insidewindow.onclick = function() {
        document.getElementById("block").style.display = "none";
        document.getElementById("window").style.display = "none";
    }

    //drop down
    var open = false;
    var dropdown = document.getElementById("dropdown");
    dropdown.onclick = function() {
        document.getElementById("block").style.display = "block";
        document.getElementById("list").style.display = "block";
        document.getElementById("block").style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        open=true;
    }
    document.getElementById("block").onclick = function() {
        if (open) {
            document.getElementById("block").style.display = "none";
            document.getElementById("list").style.display = "none";
            open=false;
        }
    }
};