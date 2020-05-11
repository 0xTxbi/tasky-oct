// Declare necessary variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listeners
loadEventListeners();

// Load all Event Listeners
function loadEventListeners() {

	//Add task
	form.addEventListener('submit', addTask);

	//Remove task
	taskList.addEventListener('click', removeTask);

	//Clear all tasks
	clearBtn.addEventListener('click', clearAllTasks);

}


//Function to add task
function addTask(e) {

	if (taskInput.value == '') {
		alert('Add a task');
	}

	//Create li elements once triggered

	const li = document.createElement('li');
	//Add class
	li.className = 'collection-item';
	//Add text and append to the list item
	li.appendChild(document.createTextNode(taskInput.value));

	//Create a link element
	const link = document.createElement('a');
	link.className = 'delete-item secondary-content';
	//Add icon
	link.innerHTML = '<i class="fa fa-remove"></i>';

	//Append link to list item
	li.appendChild(link);


	//Finally append the list item to the task list
	taskList.appendChild(li);

	//Clear the task input
	taskInput.value = '';


	e.preventDefault();
}


//Function to remove task using event delegation
function removeTask(e) {

	if (e.target.parentElement.classList.contains('delete-item')) {

		if (confirm('Do you wish to delete this task?')) {

			e.target.parentElement.parentElement.remove();

		}

	}

	e.preventDefault();
}


//Function to clear all tasks
function clearAllTasks(e) {

	while (taskList.firstChild) {

		taskList.removeChild(taskList.firstChild);

	}

	e.preventDefault();
}