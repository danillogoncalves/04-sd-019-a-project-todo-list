const buttonAdd = document.querySelector('#criar-tarefa');
buttonAdd.addEventListener('click', toDoList);
function toDoList() {
    const orderedList = document.querySelector('#lista-tarefas');
    const task = document.createElement('li')
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