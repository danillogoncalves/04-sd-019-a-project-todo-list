const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', toDoList);
function toDoList() {
    const orderedList = document.querySelector('#lista-tarefas');
    const task = document.createElement('li')
    task.classList.add('task');
    task.addEventListener('dblclick', markCompleted);
    task.addEventListener('click', markOnClick);
    const inputTask = document.querySelector('#texto-tarefa').value;
    const clearInput = document.querySelector('#texto-tarefa');
    if (inputTask === '') {
        alert('Não foi digitado nenhuma tarefa!');
    } else {
        task.innerHTML = inputTask;
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