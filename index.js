function close_window() {
    var wine = document.getElementById("window");
    var panel = document.getElementById("panel");
    wine.style.display = "none";
    panel.style.display = "none";
}

function wine(type) {
    var wine = document.getElementById("window");
    wine.removeChild(document.getElementById("insideWindow"));
    wine.style.display =  "block";

    var panel = document.getElementById("panel");
    panel.style.display = "block";

    var insideWindow = document.createElement("div");
    insideWindow.id = "insideWindow";

    if (type == "form") {
        var form = document.createElement("form");
        form.method = "POST";
        form.id = "input";
          
        inputs = [
            ["nickname", "Никнейм:", "text", true],
            ["password", "Пароль:", "text", true],
            ["email", "Email:", "email", false],
            ["tel", "Телефон:", "tel", false],
        ]

        var title = document.createElement("p");
        title.id = "title1";
        title.appendChild(document.createTextNode("Регистрация"));
        form.appendChild(title);
          
        for (_ of inputs) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(_[1]));
            
            var input = document.createElement("input");
            input.type = _[2];
            input.required = _[3];

            form.appendChild(label);
            form.appendChild(document.createElement("br"));
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
        }

        var submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Отправить";
        form.appendChild(submit);
          
        insideWindow.appendChild(form);
      } else if (type == "wine") {
          var map = document.createElement("img");
          map.src = "map.webp";
          map.style.width = "100%";
          insideWindow.appendChild(map);
      }


    var p = document.createElement("p");
    p.style.textAlign = "center";
    p.style.textDecoration = "underline";
    p.style.cursor = "pointer";
    p.setAttribute("onclick", "close_window();");
    p.appendChild(document.createTextNode("Закрыть"));
    insideWindow.appendChild(p);

    wine.appendChild(insideWindow);
}

window.onload = function() {
    var button1 = document.getElementById("button1");
    button1.setAttribute("onclick", "wine(\"form\");");
       
    var button2 = document.getElementById("button2");
    button2.setAttribute("onclick", "wine(\"wine\");");
};