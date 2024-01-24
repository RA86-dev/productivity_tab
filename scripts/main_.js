const localTasks = [];

document.addEventListener("DOMContentLoaded", function() {
    editableElement.addEventListener('input', saveEdit);
    // Call your functions or write your JavaScript code here
    load2();
    load();
});

function load2() {
    localTasks = [];
    document.getElementById('editableElement').innerHTML = localStorage.getItem('Saved');
}

function saveEdit() {
    localTasks = [];
    const rv = document.getElementById('editableElement').innerHTML;
    localStorage.setItem('Saved', rv);
}

function clear() {
    document.getElementById('todo_obj').innerHTML = '<!-- PROVOKE -->';
    localStorage.setItem('store', '');
}

function addTasks() {
    task = prompt('Task name:');
    localTasks.push(task);
    AppendTask(task, localTasks.length - 1);
    save();
}

function save() {
    let x = document.getElementById('todo_obj').innerHTML;
    localStorage.setItem("store", x);
}

function load() {
    let xcz = localStorage.getItem("store");
    document.getElementById("todo_obj").innerHTML = xcz;
}

function AppendTask(taskName, i) {
    // Create a new list item
    let newObj = document.createElement('li');
    newObj.innerHTML = `<span>${taskName} <button onclick="removeAndComplete(this)">Finish Task</button></span>`;

    // Append the new list item to a container
    document.getElementById('todo_obj').appendChild(newObj);

    // Append the task name to the localTasks array
    localTasks.push(taskName);
}

function removeAndComplete(button) {
    // Access the task name by navigating to the previous sibling
    const taskName = button.parentNode.textContent.trim();

    // Access the parent element (list item) of the button and remove it
    const listItem = button.parentNode.parentNode;
    listItem.parentNode.removeChild(listItem);

    // Remove the task name from the localTasks array
    const taskIndex = localTasks.indexOf(taskName);
    if (taskIndex !== -1) {
        localTasks.splice(taskIndex, 1);
    }

    // Implement your logic for removing or completing the task
    console.log(`Task "${taskName}" completed or removed.`);
    save();
    // Add your logic to remove or mark the task as com
}
