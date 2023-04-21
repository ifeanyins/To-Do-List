let inputItems = document.getElementById('input-item');
let listItems = document.getElementById('list-items');
let clearBtn = document.getElementById('clearBtn');
// clearBtn.addEventListener('click', clearCompleted);


 listArr = [];
 
//  function taskList() {
//      listArr.forEach(element => {
//          element += 's'
//         });
//     }
function inputVal(){    
    let listDiv = document.createElement('div');
    listDiv.classList.add('listDiv')
    let listCheckboxInput = document.createElement('input');
    let listP = document.createElement('p');
    listCheckboxInput.setAttribute('type', 'checkbox');
    let listInput = document.createElement('input');
    listInput.classList.add('inputList')
    let trashBtn = document.createElement('span');
    trashBtn.innerHTML = 'X';
    
    listArr = listItems ;

    localItem = JSON.parse(localStorage.getItem('tasks'));
    listP.textContent = localItem;
    listInput.value = inputItems.value;
    listDiv.appendChild(listCheckboxInput);
    listDiv.appendChild(listP);
    listDiv.appendChild(listInput);
    listDiv.appendChild(trashBtn);
    listItems.appendChild(listDiv);
    listArr.appendChild(listDiv);

    clearInput();
    localStorage.setItem('tasks', JSON.stringify(listInput.value))
}
// inputVal()

function clearInput(){
    inputItems.value = '';
}

