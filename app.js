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
	
	form.addEventListener('submit', addTask);

}

function addTask(e) {
	
	if (taskInput.value == '') {
		alert('Add a task');
	}

	//Create li elements once triggered

	e.preventDefault();
}