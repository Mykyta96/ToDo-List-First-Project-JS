
var btn = document.getElementById('addButton');
var inputText = document.getElementById('inputValue');
var list = document.getElementById('addList');

btn.addEventListener('click', addElement);

var todos =[];

// if(localStorage.getItem('list')){
//     todos = JSON.parse(localStorage.getItem('list'));
//     // list.innerHTML = todo.s
//     todos.forEach(function(item){
//         list.innerHTML += `<li class="list-item">${item.todo}<button type="button" id="deleteBtn" class="delete">X</button></li>`;
//     });

// }

function addElement(){ 

    if(inputText.value === ''){

        return;

    }else{

    todoList = {
        todo: inputText.value
    };
    todos.push(todoList);

   var li = document.createElement('li');
   li.className = 'list-item';
   li.textContent = inputText.value;
   list.appendChild(li);
   inputText.value = '';

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'X';
    li.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', deleteElement);
                function deleteElement(){
                    list.removeChild(li);
                    localStorage.removeItem('todo');
                }
    }

    li.addEventListener('click', fatto);
        function fatto(){
            li.classList.toggle("fatto");
        }

    localStorage.setItem('list', JSON.stringify(todos));

   
    
}




// PROVA NUMERO UNO CHE NON É ANDATA A BUON FINE
//!!!!!!!!!!!!!!


// var todos = [];

// if (localStorage.getItem('Elemento')) {
//     todos = JSON.parse(localStorage.getItem('Elemento'));
//     displayMessagge();
// }

// function addElement() {


//     if (inputText.value == '') {
//         return;
//     } else {

//         newTodos = {
//             todo: inputText.value,
//             checked: false,
//             important: false
//         };

//         todos.push(newTodos);
//         inputText.value = '';


//     }
//     displayMessagge();
//     localStorage.setItem('Elemento', JSON.stringify(todos));
// }
// // FINE DELLA FUNZIONE DI ADD ELEMENT!!!!!!!!!!!!!!!!

// function displayMessagge() {

//     let messagge = '';

//     todos.forEach(function (item, i) {

//         messagge += `
//          <li class="list-item">
//         <input type="checkbox" id="item_${i}" ${item.checked ? 'checked' : ''}>
//         <label for="item_${i}" class="${item.important ? 'important' : ''} ${item.checked ? 'checked' : ''}" >${item.todo}</label>
//         <button type="button" id="${i}" class="delete">X</button>
//         </li>
//         `;
//         // <button type="button" id="btnDelete" class="delete">X</button>

//         list.innerHTML = messagge;

//         var btnDelete = document.getElementById(`${i}`);
//         list.addEventListener('click', function (event) {
//             let idBtn = event.target.getAttribute('id');
//             // console.log(idBtn);
                
//         })
//     });


// }



// list.addEventListener('change', function (event) {
//     let idInput = event.target.getAttribute('id');
//     let valueLabel = list.querySelector('[for =' + idInput + ']').innerHTML;
//     // console.log(valueLabel);
//     todos.forEach(function (item) {
//         if (item.todo === valueLabel) {
//             item.checked = !item.checked;
//             localStorage.setItem('Elemento', JSON.stringify(todos));
//         }
//     });
// });

// list.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
//     todos.forEach(function (item) {
//         if (item.todo === event.target.innerHTML) {
//             item.important = !item.important;
//             displayMessagge();
//             localStorage.setItem('Elemento', JSON.stringify(todos));
//         }
//     });
// });



// var btnDelete = document.getElementById('btnDelete');
    // btnDelete.addEventListener('click', function deleteElement(){
    //    for(let i in todos){
    //        console.log(i)
    //    }
    // });















 // var li = 
        // `<li class="list-item">${inputText.value}<button class="delete" id="deleteButton" type="button">X</button></li>`;
        // list.innerHTML += li;

        //<button class="delete" id="deleteButton" type="button">X</button></li>`
//!!!!!!!!!!!!!
        //getItem localStorage
// if(localStorage.getItem('Elemento')){
//     el = JSON.parse(localStorage.getItem('Elemento'));
//     for(let item in el){
//         var show = `<li class="list-item">${item}</li>`;
//         list.innerHTML += show;

//     }
//}//getItem localStorage