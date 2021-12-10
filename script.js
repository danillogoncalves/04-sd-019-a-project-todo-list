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
            const haveTheClass = toDoList[i].classList;
            console.log('Oi')
            // e.target.classList.add('completed');
            for (let s = 0; s < haveTheClass.length; s += 1) {
                console.log("for");
                if (haveTheClass[s] === 'completed') {
                    console.log("r");
                    e.target.classList.remove('completed');
                } else {
                    console.log("a");
                    e.target.classList.add('completed');
                }
            }
        })
    }
}