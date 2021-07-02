

const list = document.getElementById('list');
const elements = document.getElementById('contener');
const form = document.querySelector('form');
const item = document.getElementById('textAdd');


//add element
form.addEventListener('submit', (event) => {
  const inputValue = document.getElementById("textAdd").value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    event.preventDefault();
    list.innerHTML += '<div id="parent-rect"><div id="text-without-task"><p>' + `${item.value}` + '</p></div><div id="rectangle"></div></div>';
    elements.innerHTML += '<div id="parent-rect"><div id="parent-align"><svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1" fill="white"><path d="M0 5C0 2.23858 2.23858 0 5 0H12C14.7614 0 17 2.23858 17 5V12C17 14.7614 14.7614 17 12 17H5C2.23858 17 0 14.7614 0 12V5Z"/></mask><path d="M5 2H12V-2H5V2ZM15 5V12H19V5H15ZM12 15H5V19H12V15ZM2 12V5H-2V12H2ZM5 15C3.34315 15 2 13.6569 2 12H-2C-2 15.866 1.13401 19 5 19V15ZM15 12C15 13.6569 13.6569 15 12 15V19C15.866 19 19 15.866 19 12H15ZM12 2C13.6569 2 15 3.34315 15 5H19C19 1.13401 15.866 -2 12 -2V2ZM5 -2C1.13401 -2 -2 1.13401 -2 5H2C2 3.34315 3.34315 2 5 2V-2Z" fill="#FB77A1" mask="url(#path-1-inside-1)"/></svg><div id="rectangle"></div></div>';
    storage();
    item.value = '';
  }
});


//remove element
list.addEventListener('click', (event) => {
  if(event.target.classList.contains('checked')) {
    event.target.remove();
  }else {
    event.target.classList.add('checked');
    event.target.style.textDecoration = "line-through";
  }
  storage();
})




//storage part

function storage() {
  localStorage.todoList = list.innerHTML;
  localStorage.listOfElements = elements.innerHTML;
}

function getValues() {
  let storageContent = window.localStorage.todoList;
  list.innerHTML = storageContent;

  let storageContentTwo = window.localStorage.listOfElements;
  elements.innerHTML = storageContentTwo;
}

getValues()

