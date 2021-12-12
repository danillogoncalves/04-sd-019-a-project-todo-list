const buttonAdd = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const buttonClearList = document.querySelector('#apaga-tudo');
const buttonClearCompletedTasks = document.querySelector('#remover-finalizados');

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
    e.target.classList.toggle('completed');
}

function clearList() {
    if (!orderedList.firstElementChild) {
        alert('Não há tarefa(s) na lista!');
    } else {
        for (let i = orderedList.children.length - 1; i >= 0; i -= 1) {
            let itemToBeRemoved = orderedList.children[i];
            orderedList.removeChild(itemToBeRemoved);
        }
    }

}

function clearCompletedTasks() {
    if (!document.querySelector('.completed')) {
        alert('Não há tarefa(s) marcadas como completada(s)!');
    } else {
        let listOfCompleted = document.querySelectorAll('.completed');
        for (let i = listOfCompleted.length -1; i >= 0; i -= 1) {
            let itemToBeRemoved = document.querySelectorAll('.completed')[i];
            listOfCompleted[i].parentElement.removeChild(itemToBeRemoved);
        }
    }
}

buttonAdd.addEventListener('click', toDoList);
buttonClearList.addEventListener('click', clearList);
buttonClearCompletedTasks.addEventListener('click', clearCompletedTasks)