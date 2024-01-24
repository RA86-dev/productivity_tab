 // Use the DOMContentLoaded event to ensure the JavaScript code runs after the DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function() {
    editableElement.addEventListener('input', saveEdit);
    // Call your functions or write your JavaScript code here
    load2()
    load();
     // For example, calling your AppendTask function
});
function load2() {
    localTasks = []
 
    document.getElementById('editableElement').innerHTML = localStorage.getItem('Saved')
}
function saveEdit() {
    localTasks = []
 
    const rv = document.getElementById('editableElement').innerHTML;
    localStorage.setItem('Saved',rv);

}

const localTasks = []
function clear() {
    document.getElementById('todo_obj').innerHTML = '<!-- PROVOKE -->';
    localStorage.setItem('store','')

}
function addTasks() {
    localTasks = []
 
    task = prompt('Task name:')
    localTasks.push(task)
    AppendTask(task)
    save()

}// Assuming localTasks is an array declared somewhere in your code
function save() {
    localTasks = []
 
    let x =document.getElementById('todo_obj').innerHTML;
    localStorage.setItem("store",x)
}
function load() {
    localTasks = []
 
    let xcz = localStorage.getItem("store")
    document.getElementById("todo_obj").innerHTML = xcz;
}
function AppendTask() {
    localTasks = []
 
    let length = localTasks.length;

    for (let i = 0; i < length; i++) {
        const taskName = localTasks[i];

        // Create a new list item
        let newObj = document.createElement('li');
        newObj.innerHTML = `<span>${taskName} <button onclick="removeAndComplete(this)">Finish Task</button></span>`;

        // Append the new list item to a container (replace 'yourContainerId' with the actual container ID)
        document.getElementById('todo_obj').appendChild(newObj);

        // Append the task name to the localTasks array
        localTasks.push(taskName);
    }
}

// Example function for removing and completing a task
function removeAndComplete(button) {
    localTasks = []
 
    // Access the task name by navigating to the previous sibling (text node)
    const taskName = button.previousSibling.textContent.trim();

    // Access the parent element (list item) of the button and remove it
    const listItem = button.parentNode.parentNode; // Assuming there's a span element wrapping the text and button
    listItem.parentNode.removeChild(listItem);

    // Remove the task name from the localTasks array
    const taskIndex = localTasks.indexOf(taskName);
    if (taskIndex !== -1) {
        localTasks.splice(taskIndex, 1);
    }

    // Implement your logic for removing or completing the task
    console.log(`Task "${taskName}" completed or removed.`);
    save()
    // Add your logic to remove or mark the task as com
}
