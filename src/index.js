document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  const sortButton = document.getElementById('sort-button');

  // Add event listener for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const taskInput = document.getElementById('new-task-description');
    const prioritySelect = document.getElementById('priority-level');

    const taskValue = taskInput.value.trim();
    const priorityValue = prioritySelect.value;

    if (taskValue !== "") {
      addTaskToList(taskValue, priorityValue);
      taskInput.value = ""; // Clear the input field
    }
  });

  // Add event listener for sorting
  sortButton.addEventListener('click', sortTasks);

  // Function to add a task to the list
  function addTaskToList(task, priority) {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Set the color based on priority
    switch (priority) {
      case 'high':
        listItem.style.color = 'red';
        break;
      case 'medium':
        listItem.style.color = 'orange';
        break;
      case 'low':
        listItem.style.color = 'green';
        break;
    }

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton); // Add the delete button to the task
    taskList.appendChild(listItem); // Add the task to the list
  }

  // Function to sort tasks by priority
  function sortTasks() {
    const tasks = Array.from(taskList.children);

    tasks.sort((a, b) => {
      const priorityOrder = { 'red': 1, 'orange': 2, 'green': 3 };
      return priorityOrder[a.style.color] - priorityOrder[b.style.color];
    });

    tasks.forEach(task => taskList.appendChild(task)); // Re-append in sorted order
  }
});
