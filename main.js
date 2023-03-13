// var divT = document.getElementsByClassName("task");
// var btnE = document.getElementsByClassName("edit");
// var btnD = document.getElementsByClassName("delete");



var sectionL = document.getElementById('task-list');
var form = document.querySelector('form');

var input = document.querySelector('input');
var btn = document.getElementById('bouton');
// var texte = document.getElementById('text');
var audio = document.querySelector('audio');


form.addEventListener('submit', function (e) {
    e.preventDefault(); //permet de ne pas effacer le resultat du submit
    
    audio.play();
    var result = input.value; // il faut déclarer cette variable DANS la fnct car elle dépend du submit
    input.value = ""; // permet de réinitialiser le texte dans l'input 

    var divT = document.createElement('div'); // permet de créer une Div
    divT.setAttribute("class", "task"); //  permet d'ajouter une class
    var texte = document.createElement("input");
    texte.setAttribute("class", "text");
    texte.value = result;
    texte.disabled=true;  //permet d'empêcher l'écriture sur l'input
    var btnE = document.createElement("button");
    btnE.setAttribute("class", "edit");

    var btnD = document.createElement("button");
    btnD.setAttribute("class", "delete");

    btnD.addEventListener('click', function(e){
    //   console.log(e)                              permet d'afficher les évènements liés au btnD
	//   console.log(e.target)                       dans la liste des évènements nous avons vu que la cible target correspondait à la class "delete"
	//   console.log(e.target.parentElement)         cible le parent du bouton btnD, cad la div task que nous voulons supprimer
	//   e.target.parentElement.remove               demande la suppression de la div task


    e.target.parentElement.remove()
    
    window.confirm("=^.^=  Êtes-vous sûr de vouloir supprimer cette tâche?  =^.^=")
    // return confirm ? function action()
        //  {
        //     var ok = confirm("Etes-vous sûr ?");
        //     if (ok)
        //        {
        //        alert("allons-y !");
        //        return true;
        //        }
        //     else
        //        {
        //        alert("abandon");
        //        return false;
        //        }
        //     }
     
    })


    btnE.addEventListener('click', function(){
        texte.disabled=false;
        btnE.setAttribute("class", "save");
        btnE.addEventListener('click',function(){
        texte.disabled=true; 
        btnE.setAttribute("class", "edit");

        })
        // créer un bouton class save dans css


    })

   

    sectionL.append(divT); // indique où créer la div donc dans la section
    divT.appendChild(texte); // indique où créer les éléments enfants de la div précédente
    divT.appendChild(btnE);
    divT.appendChild(btnD);
    
    
})













// btnD.addEventListener('click', function() {
    
//     console.log(divT)
// })


// function myFunction() {
//     let msg = "=^.^=  Êtes-vous sûr de vouloir supprimer cette tâche?  =^.^=";
//     if (confirm(msg) == true) {
//       msg = "You pressed OK!";
//     } else {
//       msg = "You canceled!";
//     }
//     document.getElementById("demo").innerHTML = msg;
//   }







