const buttonAdd = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const buttonClearList = document.querySelector('#apaga-tudo');
const buttonClearCompletedTasks = document.querySelector('#remover-finalizados');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonRemove = document.querySelector('#remover-selecionado');


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

function saveList() {
    localStorage.removeItem('todolist');
    let list = orderedList.children;
    let ol = [];
    for (let i = 0; i < list.length; i += 1) {
        let li = {};
        li.class = list[i].className;
        li.task = list[i].innerHTML;
        ol.push(li);
    }
    localStorage.setItem('todolist', JSON.stringify(ol));
}

function renderSavedList () {
    const saveList = JSON.parse(localStorage.getItem('todolist'));
    for (let i = 0; i < saveList.length; i += 1) {
        const task = document.createElement('li')
        task.setAttribute('class', saveList[i].class);
        task.innerHTML = saveList[i].task;
        task.addEventListener('dblclick', markCompleted);
        task.addEventListener('click', markOnClick);
        orderedList.appendChild(task);
    }
}

function upTask() {
    if (!orderedList.firstElementChild) {
        alert('Não há tarefa(s) na lista!');
    } else if (!document.querySelector('.mark-task')) {
        alert('Marque um item da lista!');
    } else {
        let markTask = document.querySelector('.mark-task');
        if (document.querySelector('.mark-task').previousElementSibling) {
            let taskPreviousSibling = markTask.previousElementSibling;
            markTask.parentElement.removeChild(markTask);
            taskPreviousSibling.insertAdjacentElement('beforebegin', markTask);
        }
    }
}

function downTask() {
    if (!orderedList.lastElementChild) {
        alert('Não há tarefa(s) na lista!');
    } else if (!document.querySelector('.mark-task')) {
        alert('Marque um item da lista!');
    } else {
        let markTask = document.querySelector('.mark-task');
        if (document.querySelector('.mark-task').nextElementSibling) {
            let taskNextSibling = markTask.nextElementSibling;
            markTask.parentElement.removeChild(markTask);
            taskNextSibling.insertAdjacentElement("afterend", markTask);
        }
    }
}

function removeTask() {
    let markTask = document.querySelector('.mark-task');
    orderedList.removeChild(markTask);
}

buttonAdd.addEventListener('click', toDoList);
buttonClearList.addEventListener('click', clearList);
buttonClearCompletedTasks.addEventListener('click', clearCompletedTasks)
buttonSave.addEventListener('click', saveList)
buttonUp.addEventListener('click', upTask);
buttonDown.addEventListener('click', downTask);
buttonRemove.addEventListener('click', removeTask)

window.onload = function () {
    if (localStorage.length > 0) {
        renderSavedList()
    }
}