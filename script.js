const buttonAdd = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');

function toDoList() {
    const task = document.createElement('li')
    task.classList.add('task');
    task.addEventListener('dblclick', markCompleted);
    task.addEventListener('click', markOnClick);
    const clearInput = document.querySelector('#texto-tarefa');
    if (inputTask.value === '') {
        alert('Não foi digitado nenhuma tarefa!');
    } else {
        task.innerHTML = inputTask.value;
        orderedList.appendChild(task);
    }
    clearInput.value = '';
}

function markOnClick(e) {
    if (document.querySelector('.mark-task') !== null) {
        document.querySelector('.mark-task').classList.remove('mark-task');
    }
    e.target.classList.add('mark-task');
}
// Quem me ensino a fazer a função dessa forma e como funciona o event.target foi a Luá Octaviano - Turma 19 - Tribo A
function markCompleted(e) {
    console.log(e);
    e.target.classList.toggle('completed');
}

buttonAdd.addEventListener('click', toDoList);