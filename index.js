var sectionL = document.getElementById('task-list');
var form = document.querySelector('form');

var input = document.querySelector('input');
var btn = document.getElementById('bouton');
var audio = document.querySelector('audio');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    audio.play();
    var result = input.value;
    input.value = "";

    var divT = document.createElement('div');
    divT.setAttribute("class", "task");
    var texte = document.createElement("input");
    texte.setAttribute("class", "text");
    texte.value = result;
    texte.disabled = true;
    var btnE = document.createElement("button");
    btnE.setAttribute("class", "edit");
    btnE.textContent = "";
    var btnD = document.createElement("button");
    btnD.setAttribute("class", "delete");
    btnD.textContent = "";

    btnD.addEventListener('click', function(e) {
        var confirmed = window.confirm("=^.^=  Êtes-vous sûr de vouloir supprimer cette tâche?  =^.^=");
        if (confirmed) {
            e.target.parentElement.remove();
        }
    });

    btnE.addEventListener('click', function() {
        if (texte.disabled) {
            texte.disabled = false;
            btnE.setAttribute("class", "save");
        } else {
            texte.disabled = true;
            btnE.setAttribute("class", "edit");
        }
    });

    sectionL.append(divT);
    divT.appendChild(texte);
    divT.appendChild(btnE);
    divT.appendChild(btnD);
});
