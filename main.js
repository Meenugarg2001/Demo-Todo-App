var MainTodoContainer = document.getElementById('todos');
var input = document.querySelector('.todo_input');
var addingBtn = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');

addingBtn.addEventListener('click', function (e) {
    if (input.value.trim()) {

        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        var todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        var liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');

        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        var completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></li>';

        var editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = '<i class="fas fa-edit"></li>';
        editBtn.onclick = function () {
            editworking(liTag);
        }
        var trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></li>';

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);
        MainTodoContainer.appendChild(ulTag);

        todoList.addEventListener('click', function (e) {
            var items = e.target;
            if (items.classList[0] === 'completed') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through');
            }
            else if (items.classList[0] === 'trash') {
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                var todo3 = todo2.parentElement;
                todo2.classList.add('fall');
                todo3.addEventListener('transitionend', function (e) {
                    todo3.remove();
                })
            }
        });
    }
    else if (input.value === '') {
        alert('please fill the input field')
    }
})

function editworking(e) {
    var editvalue = prompt('Edit the selected item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editvalue;
}

function deleteAllElements() {
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for (var i = 0; i < gettingUlTag; i++) {
        gettingUlTag[i].remove();
    }
    input.value = "";
}