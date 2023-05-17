let inputItems = document.getElementById('input-item');
let listItems = document.getElementById('list-items');
let clearBtn = document.getElementById('clearBtn');
// clearBtn.addEventListener('click', clearCompleted);


let listArr = [];


function renderTodo(){
    let todoListHtml = '';
    
    for(let i = 0; i < listArr.length; i++){
        let todoTaskList = listArr[i];
        let html = `
        <div>${todoTaskList}</div>
        <div><input type="checkbox" class="inputCheckbox"; onclick ="lis()";></div>
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

function lis(){
   if( document.querySelector('inputCheckbox').checked ==  true){
    console.log('ns')
   }e
}

