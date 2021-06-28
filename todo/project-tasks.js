// let elements = [];
// function addElement() {
//     if(document.querySelector(".addTxt").value.trim() != ""){
//     elements.push(document.querySelector(".addTxt").value.trim());
//     alert(elements);
//     display;
//     }
// }

// function display() {
//     document.querySelector("#addParent").innerHTML = "";
//     for(var i = 0; i < elements.length; i++)
//     document.querySelector("#addParent").innerHTML += 
//     "<center><div class='element'>" + elements[i] + 
//     "<div class ='task-empty' onclick='empty("+i+")'><div class ='task-complete' onclick='completed("+i+")'></div></div></div></center>";

// }






let btnRed = document.querySelector('#btnRed');
let content= document.querySelector('p');
btnRed.addEventListener('click', () => content.style.textDecoration = "line-through");
btnRed.addEventListener('click', () => content.style.opacity = "1");







// let myIconComplete = '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V12C0 14.7614 2.23858 17 5 17H12C14.7614 17 17 14.7614 17 12V5C17 2.23858 14.7614 0 12 0H5ZM6.875 11.2083L13.375 4.70834L12.6113 3.94459L6.875 9.67542L4.65958 7.46542L3.89583 8.22917L6.875 11.2083ZM3.625 12.2917V13.375H13.375V12.2917H3.625Z" fill="#FB77A1"/></svg>';
// let myIconComplete64 = window.btoa(myIconComplete);
// document.getElementById('myIconComplete').style.backgroundImage = "url('data:image/svg+xml;base64," + myIconComplete64 + "')";



// let myIconEmpty = '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1" fill="white"><path d="M0 5C0 2.23858 2.23858 0 5 0H12C14.7614 0 17 2.23858 17 5V12C17 14.7614 14.7614 17 12 17H5C2.23858 17 0 14.7614 0 12V5Z"/></mask><path d="M5 2H12V-2H5V2ZM15 5V12H19V5H15ZM12 15H5V19H12V15ZM2 12V5H-2V12H2ZM5 15C3.34315 15 2 13.6569 2 12H-2C-2 15.866 1.13401 19 5 19V15ZM15 12C15 13.6569 13.6569 15 12 15V19C15.866 19 19 15.866 19 12H15ZM12 2C13.6569 2 15 3.34315 15 5H19C19 1.13401 15.866 -2 12 -2V2ZM5 -2C1.13401 -2 -2 1.13401 -2 5H2C2 3.34315 3.34315 2 5 2V-2Z" fill="#FB77A1" mask="url(#path-1-inside-1)"/></svg>';
// let myIconEmpty64 = window.btoa(myIconEmpty);
// document.getElementById('myIconEmpty').style.backgroundImage = "url('data:image/svg+xml;base64," + myIconEmpty64 + "')";



























// function change(changed) {
//     changed.className = (changed.className == "task-empty-test") ? "task-complete-test" : "task-empty-test";
//     }


// function changePosition(td) {
//     td.className = (td.className == "task-complete") ? "task-empty" : "task-complete";
// }

// function changePosition1(td) {
// td.className = (td.className == "egg-smallchanged") ? "egg-smallchanged2" : "egg-smallchanged";
// }









//une variable que tu charges au lancement de la page pour avoir la liste des tâches 
//qui sont faites ou pas, leur date de création et leur titre
//leur mettre un id
//quand tu cliques sur un élément il faudra modifier le state

//c'est dynamique -> si aujourd'hui tu ajoutes une tache 
// ça va créer un groupe 22/06/2020 et si demain tu fais une tache ça sera 23/06/2020

//gérer la persistence des données dans le naviguateur (sans base de donnée et sans backend)
// url pas obligé de la connaître, tu peux mettre une URL relative vers ton svg
