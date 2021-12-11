const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', toDoList);
function toDoList() {
    const orderedList = document.querySelector('#lista-tarefas');
    const task = document.createElement('li')
    task.classList.add('task');
    const inputTask = document.querySelector('#texto-tarefa').value;
    const clearInput = document.querySelector('#texto-tarefa');
    if (inputTask === '') {
        alert('Não foi digitado nenhuma tarefa!');
    } else {
        task.innerHTML = inputTask;
        orderedList.appendChild(task);
    }
    clearInput.value = '';
    markOnClick()
    markCompleted()
}

function markOnClick() {
    const toDoList = document.querySelectorAll('.task');
    for (let i = 0; i < toDoList.length; i += 1) {
        toDoList[i].addEventListener('click', function(e) {
            if (document.querySelector('.mark-task') !== null) {
                document.querySelector('.mark-task').classList.remove('mark-task');
            }
            e.target.classList.add('mark-task');
        })
    }
}

function markCompleted() {
    const toDoList = document.querySelectorAll('.task');
    for (let i = 0; i < toDoList.length; i += 1) {
        toDoList[i].addEventListener('dblclick', function(e) {
            e.target.classList.toggle('completed');
        })
    }
}