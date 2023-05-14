let inputItems = document.getElementById('input-item');
let listItems = document.getElementById('list-items');
let clearBtn = document.getElementById('clearBtn');
// clearBtn.addEventListener('click', clearCompleted);


let listArr = [];


function renderTodo(){
    let todoListHtml = '';
    let trash = document.createElement('span');
    trash.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`
    for(let i = 0; i < listArr.length; i++){
        let todoTaskList = listArr[i];
        let html = `
        <div>${todoTaskList}</div>
        <div><input type="checkbox"></div>
        <div
        onclick = "
        listArr.splice(${i}, 1)
        renderTodo();"
        > <img src="images.png" alt="" class="task-img"></div>
        `

        todoListHtml += html;
    }
    listItems.innerHTML = todoListHtml;
}

function addTodo(){
    let inputText = inputItems.value;
    listArr.push(inputText);

    inputItems.value = '';
    console.log(listArr)

    renderTodo();
}



























 
//  function taskList() {
//      listArr.forEach(element => {
//          element += 's'
//         });
//     }
// function inputVal(){    
//     let listDiv = document.createElement('div');
//     listDiv.classList.add('listDiv')
//     let listCheckboxInput = document.createElement('input');
//     let listP = document.createElement('p');
//     listCheckboxInput.setAttribute('type', 'checkbox');
//     let listInput = document.createElement('input');
//     listInput.classList.add('inputList')
//     let trashBtn = document.createElement('span');
//     trashBtn.innerHTML = 'X';
    
//     listArr = listItems ;

//     localItem = JSON.parse(localStorage.getItem('tasks'));
//     listP.textContent = localItem;
//     listInput.value = inputItems.value;
//     listDiv.appendChild(listCheckboxInput);
//     listDiv.appendChild(listP);
//     listDiv.appendChild(listInput);
//     listDiv.appendChild(trashBtn);
//     listItems.appendChild(listDiv);
//     listArr.appendChild(listDiv);

//     clearInput();
//     localStorage.setItem('tasks', JSON.stringify(listInput.value))
// }
// // inputVal()

// function clearInput(){
//     inputItems.value = '';
// }

