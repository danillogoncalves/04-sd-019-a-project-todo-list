const buttonAdd = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
const buttonClearList = document.querySelector('#apaga-tudo');
const buttonClearCompletedTasks = document.querySelector('#remover-finalizados');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonRemove = document.querySelector('#remover-selecionado');
const emptyNotice = 'Não há tarefa(s) na lista!';
const classMarkTask = '.mark-task';
const classCompleted = '.completed';

function markOnClick(e) {
  if (document.querySelector(classMarkTask) !== null) {
    document.querySelector(classMarkTask).classList.remove('mark-task');
  }
  e.target.classList.add('mark-task');
}
// Quem me ensino a fazer a função dessa forma e como funciona o event.target foi a Luá Octaviano - Turma 19 - Tribo A
function markCompleted(e) {
  e.target.classList.toggle('completed');
}

function toDoList() {
  const task = document.createElement('li');
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

function clearList() {
  if (!orderedList.firstElementChild) {
    alert(emptyNotice);
  } else {
    for (let i = orderedList.children.length - 1; i >= 0; i -= 1) {
      const itemToBeRemoved = orderedList.children[i];
      orderedList.removeChild(itemToBeRemoved);
    }
  }
}

function clearCompletedTasks() {
  if (!document.querySelector(classCompleted)) {
    alert('Não há tarefa(s) marcadas como completada(s)!');
  } else {
    const listOfCompleted = document.querySelectorAll(classCompleted);
    for (let i = listOfCompleted.length - 1; i >= 0; i -= 1) {
      const itemToBeRemoved = document.querySelectorAll(classCompleted)[i];
      listOfCompleted[i].parentElement.removeChild(itemToBeRemoved);
    }
  }
}

// https://trybecourse.slack.com/archives/C017W4EDD4K/p1600300442399700
function saveList() {
  localStorage.removeItem('todolist');
  const list = orderedList.children;
  const ol = [];
  for (let i = 0; i < list.length; i += 1) {
    const li = {
      class: list[i].className,
      task: list[i].innerHTML,
    };
    ol.push(li);
  }
  localStorage.setItem('todolist', JSON.stringify(ol));
}

function renderSavedList() {
  const getSavedList = JSON.parse(localStorage.getItem('todolist'));
  for (let i = 0; i < getSavedList.length; i += 1) {
    const task = document.createElement('li');
    task.setAttribute('class', getSavedList[i].class);
    task.innerHTML = getSavedList[i].task;
    task.addEventListener('dblclick', markCompleted);
    task.addEventListener('click', markOnClick);
    orderedList.appendChild(task);
  }
}

// Tive ajuda da Lalá Nametala - Turma 19 - Tribo A
function upTask() {
  if (!orderedList.firstElementChild) {
    alert(emptyNotice);
  } else if (!document.querySelector(classMarkTask)) {
    alert('Marque um item da lista!');
  } else {
    const markTask = document.querySelector(classMarkTask);
    if (document.querySelector(classMarkTask).previousElementSibling) {
      const taskPreviousSibling = markTask.previousElementSibling;
      markTask.parentElement.removeChild(markTask);
      taskPreviousSibling.insertAdjacentElement('beforebegin', markTask);
    }
  }
}

function downTask() {
  if (!orderedList.lastElementChild) {
    alert(emptyNotice);
  } else if (!document.querySelector(classMarkTask)) {
    alert('Marque um item da lista!');
  } else {
    const markTask = document.querySelector(classMarkTask);
    if (document.querySelector(classMarkTask).nextElementSibling) {
      const taskNextSibling = markTask.nextElementSibling;
      markTask.parentElement.removeChild(markTask);
      taskNextSibling.insertAdjacentElement('afterend', markTask);
    }
  }
}

function removeTask() {
  const markTask = document.querySelector(classMarkTask);
  orderedList.removeChild(markTask);
}

buttonAdd.addEventListener('click', toDoList);
buttonClearList.addEventListener('click', clearList);
buttonClearCompletedTasks.addEventListener('click', clearCompletedTasks);
buttonSave.addEventListener('click', saveList);
buttonUp.addEventListener('click', upTask);
buttonDown.addEventListener('click', downTask);
buttonRemove.addEventListener('click', removeTask);

// Tive ajuda do Gabriel Melo - Turma 19 - Tribo A
window.onload = function loadThePage() {
  if (localStorage.length > 0) {
    renderSavedList();
  }
};
