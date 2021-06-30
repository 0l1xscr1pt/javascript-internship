
let count = localStorage.getItem("count")

if (count === null) {
  count = -1
}

count++

localStorage.setItem("count", count)
document.getElementById("outputtext").value = count;







const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');


//add element
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  storage();
  item.value = '';
});


// function display() {
//   document.querySelector(".list").innerHTML = "";
//   for(let i = 0; i < elements.length; i++)
//   document.querySelector(".list").innerHTML += '<center><div class="element">' + elements[i] + '</div></center>';

// };


//remove element
list.addEventListener('click', (event) => {
  if(event.target.classList.contains('checked')) { //checked = icon checked
    event.target.remove();
  }else {
    event.target.classList.add('checked'); //checked = icon checked
  }
})



//storage part

function getValues() {
  let storageContent = window.localStorage.todoList;
  if (!storageContent) {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
  } else {
    list.innerHTML = storageContent;
  }
}

getValues()



//date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today);



//boolean
function trueOrFalse() {
  if (div == inconComplete) {
    return true
  } else {
    return false
  }
}


let elements = [];

const todo = {
  task: `${list.innerText}`,
  date: `${today}`,
  completed: function trueOrFalse() {
    if (div == inconComplete) {
      return true
    } else {
      return false
    }
  }
}

localStorage.setItem("task", Object.values(todo))

console.log(Object.values(todo));
//task
// const addButton = document.getElementById('iconAdd');
// const toDoContainer = document.getElementById('toDoContainer');
// const inputField = document.getElementById('textAdd');

// addButton.addEventListener('click', function addTxt() {
//   let task = document.createElement('p');
//   task.innerText = inputField.value;
//   toDoContainer.appendChild(task);
//   localStorage.setItem( 'txt', inputField.value);
//   document.getElementById("textAdd").value = "";
// });






/* 

<input type="text" id="textAdd" 
<button id="iconAdd">
<div class="rectangle-with-border"></div>
<div id="toDoContainer"></div>




<div class="containerTwo">
<h1>Todo list save</h1>
<form action="">
    <input id="item" type="text" placeholder="A faire" autocomplete="off">
    <ul id="list"></ul>
</form>
</div> */













let state = [
	{title: "....", date: new Date(), completed: false}
]





// const list = document.getElementById('list');
// // const elements = document.getElementById('rect');
// const form = document.querySelector('form');
// const item = document.getElementById('textAdd');


// //add element
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // list.innerHTML += `<p>${item.value}</p>`;
//   // list.innerHTML += '<div id="parent-rect"><div id="parent-align"><svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1" fill="white"><path d="M0 5C0 2.23858 2.23858 0 5 0H12C14.7614 0 17 2.23858 17 5V12C17 14.7614 14.7614 17 12 17H5C2.23858 17 0 14.7614 0 12V5Z"/></mask><path d="M5 2H12V-2H5V2ZM15 5V12H19V5H15ZM12 15H5V19H12V15ZM2 12V5H-2V12H2ZM5 15C3.34315 15 2 13.6569 2 12H-2C-2 15.866 1.13401 19 5 19V15ZM15 12C15 13.6569 13.6569 15 12 15V19C15.866 19 19 15.866 19 12H15ZM12 2C13.6569 2 15 3.34315 15 5H19C19 1.13401 15.866 -2 12 -2V2ZM5 -2C1.13401 -2 -2 1.13401 -2 5H2C2 3.34315 3.34315 2 5 2V-2Z" fill="#FB77A1" mask="url(#path-1-inside-1)"/></svg></div></div>';
//   list.innerHTML += '<div id="parent-rect"><div id="rectangle"></div></div>';
//   storage();
//   item.value = '';
// });

// //remove element
// list.addEventListener('click', (event) => {
//   if(event.target.classList.contains('checked')) { //checked = icon checked
//     event.target.remove();
//   }else {
//     event.target.classList.add('checked'); //checked = icon checked
//   }
// })


// //storage part

// function getValues() {
//   let storageContent = window.localStorage.todoList;
//   if (!storageContent) {
//     list.innerHTML = `<p>Cliquez sur une tache pour la supprimer</p>`
//     list.innerHTML += '<div id="parent-rect"><div id="rectangleFirst"></div></div>';
//   } else {
//     list.innerHTML = storageContent;
//   }
// }

// getValues()











// let btn = document.querySelector('#myBtn');

// btn.onclick = function () {
//   let nameIcon = myBtn.getAttribute('id');
//   if(nameIcon === "icon-complete"){
//     btn.setAttribute("div", "icon-empty");
//   }
//  else {
//     btn.setAttribute("div", "icon-complete");
//  }
// }


// let myIconComplete = '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V12C0 14.7614 2.23858 17 5 17H12C14.7614 17 17 14.7614 17 12V5C17 2.23858 14.7614 0 12 0H5ZM6.875 11.2083L13.375 4.70834L12.6113 3.94459L6.875 9.67542L4.65958 7.46542L3.89583 8.22917L6.875 11.2083ZM3.625 12.2917V13.375H13.375V12.2917H3.625Z" fill="#FB77A1"/></svg>';
// let myIconComplete64 = window.btoa(myIconComplete);
// document.getElementById('myIconComplete').style.backgroundImage = "url('data:image/svg+xml;base64," + myIconComplete64 + "')";



// let myIconEmpty = '<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1" fill="white"><path d="M0 5C0 2.23858 2.23858 0 5 0H12C14.7614 0 17 2.23858 17 5V12C17 14.7614 14.7614 17 12 17H5C2.23858 17 0 14.7614 0 12V5Z"/></mask><path d="M5 2H12V-2H5V2ZM15 5V12H19V5H15ZM12 15H5V19H12V15ZM2 12V5H-2V12H2ZM5 15C3.34315 15 2 13.6569 2 12H-2C-2 15.866 1.13401 19 5 19V15ZM15 12C15 13.6569 13.6569 15 12 15V19C15.866 19 19 15.866 19 12H15ZM12 2C13.6569 2 15 3.34315 15 5H19C19 1.13401 15.866 -2 12 -2V2ZM5 -2C1.13401 -2 -2 1.13401 -2 5H2C2 3.34315 3.34315 2 5 2V-2Z" fill="#FB77A1" mask="url(#path-1-inside-1)"/></svg>';
// let myIconEmpty64 = window.btoa(myIconEmpty);
// document.getElementById('myIconEmpty').style.backgroundImage = "url('data:image/svg+xml;base64," + myIconEmpty64 + "')";











// const list = document.getElementById('list');
// const form = document.querySelector('form');
// const item = document.getElementById('item');


// //add element
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   list.innerHTML += `<li>${item.value}</li>`;
//   storage();
//   item.value = '';
// });

// //remove element
// list.addEventListener('click', (event) => {
//   if(event.target.classList.contains('checked')) { //checked = icon checked
//     event.target.remove();
//   }else {
//     event.target.classList.add('checked'); //checked = icon checked
//   }
//   storage();
// })


// //storage part

// function storage() {
//   window.localStorage.todoList = list.innerHTML;
// }


// function getValues() {
//   let storageContent = window.localStorage.todoList;
//   if (!storageContent) {
//     list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`
//   } else {
//     list.innerHTML = storageContent;
//   }
// }

// getValues()










//date
// let today = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0');
// let yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;
// document.write(today);



// //boolean
// function trueOrFalse() {
//   if () {

//   } else {
  
//   }
// }




// let elements = [
//   {
//   task: `${task.innerHTML}`,
//   date: `${today}`
//   // completed: `${trueOrFalse()}`
// }
// ];


// console.log(Object.values(elements));



// JSON.stringify(paragraph)

// localStorage.setItem("currentUser",JSON.stringify(userList[i]));



// localStorage.setItem( 'items', elements);



