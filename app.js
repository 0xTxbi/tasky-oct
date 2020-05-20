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

	// DOM Load Event
	document.addEventListener('DOMContentLoaded', getTasks);

	//Add task
	form.addEventListener('submit', addTask);

	//Remove task
	taskList.addEventListener('click', removeTask);

	//Clear all tasks
	clearBtn.addEventListener('click', clearAllTasks);

	//Filter through tasks
	filter.addEventListener('keyup', filterTasks);

}

// Function to restore tasks from local storage
function getTasks(e) {

	let tasks;

	if (localStorage.getItem('tasks') === null) {

		tasks = [];

	} else {

		tasks = JSON.parse(localStorage.getItem('tasks'));

	}

	tasks.forEach(function (task) {

		//Create li elements once triggered

		const li = document.createElement('li');
		//Add class
		li.className = 'collection-item';
		//Add text and append to the list item
		li.appendChild(document.createTextNode(task));

		//Create a link element
		const link = document.createElement('a');
		link.className = 'delete-item secondary-content';
		//Add icon
		link.innerHTML = '<i class="fa fa-remove"></i>';

		//Append link to list item
		li.appendChild(link);


		//Finally append the list item to the task list
		taskList.appendChild(li);

	});

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

	// Store in local storage
	storeTaskInLocalStorage(taskInput.value);

	//Clear the task input
	taskInput.value = null;


	e.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task) {

	let tasks;

	if (localStorage.getItem('tasks') === null) {

		tasks = [];

	} else {

		tasks = JSON.parse(localStorage.getItem('tasks'));

	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));

}


//Function to remove task using event delegation
function removeTask(e) {

	if (e.target.parentElement.classList.contains('delete-item')) {

		if (confirm('Do you wish to delete this task?')) {

			e.target.parentElement.parentElement.remove();

			// Remove task from local storage
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);

		}

	}

	e.preventDefault();
}

// Function to remove task from local storage
function removeTaskFromLocalStorage(taskItem) {

	let tasks;

	if (localStorage.getItem('tasks') === null) {

		tasks = [];

	} else {

		tasks = JSON.parse(localStorage.getItem('tasks'));

	}

	tasks.forEach( function (task, index) {
		
		if (taskItem.textContent === task) {
			
			tasks.splice(index, 1);

		}

	});

	localStorage.setItem('tasks', JSON.stringify('tasks'));


}


//Function to clear all tasks
function clearAllTasks(e) {

	while (taskList.firstChild) {

		taskList.removeChild(taskList.firstChild);

	}

	// Clear all tasks from Local Storage
	clearAllTasksFromLocalStorage();

	e.preventDefault();
}

// Function to clear all tasks from Local Storage
function clearAllTasksFromLocalStorage() {
	
	localStorage.clear();

}


//Function to filter through tasks
function filterTasks(e) {

	const text = e.target.value.toLowerCase();

	document.querySelectorAll('.collection-item').forEach(

		function (task) {

			const item = task.firstChild.textContent;

			if (item.toLowerCase().indexOf(text) !== -1) {
				task.style.display = 'block';
			} else {
				task.style.display = 'none';
			}

		}

	);

	e.preventDefault();
}

// Testing New Functionalities
let addTaskBtn;
let modalTrigger;
let alertTrigger;