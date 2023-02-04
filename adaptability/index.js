window.onload = function() {
    var logo = document.getElementById("logo");
    var infoaboutcompany = document.getElementById("infoaboutcompany");
    var version = document.getElementById("version");
    var insidewindow = document.getElementById("insidewindow");
    logo.onclick = function() {
        var title = getComputedStyle(document.getElementById("title")).fontSize;
        var p = getComputedStyle(document.getElementById("p")).fontSize;
        alert("logo: " + getComputedStyle(logo).fontSize + "\ntitle: " + title + "\np: " + p);
    }
    infoaboutcompany.onclick = function() {
        alert("Незарегистрированный компания \"IVGlang\"");
    }
    version.onclick = function() {
        document.getElementById("block").style.display = "block";
        document.getElementById("window").style.display = "block";
    }
    insidewindow.onclick = function() {
        document.getElementById("block").style.display = "none";
        document.getElementById("window").style.display = "none";
    }
};