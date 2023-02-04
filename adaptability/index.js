window.onload = function() {
    var logo = document.getElementById("logo");
    logo.onclick = function() {
        var title = getComputedStyle(document.getElementById("title")).fontSize;
        var p = getComputedStyle(document.getElementById("p")).fontSize;
        alert("logo: " + getComputedStyle(logo).fontSize + "\ntitle: " + title + "\np: " + p);
    }
};