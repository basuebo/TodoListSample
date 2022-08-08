'use strict';

const addButton = document.getElementById('add-button');
const inputTask = document.getElementById('input-task');
const tasksList = document.getElementById('tasks-list');
const completeList = document.getElementById('complete-list');


addButton.addEventListener('click', () => {

	const text = inputTask.value.trim();
	if (text === '') return;

	createTask(text);

	inputTask.value = '';
});

const createTask = (text) => {

	const li = document.createElement('li');
	li.innerText = text;

	const span = document.createElement('span');

	const completeButton = document.createElement('button');
	completeButton.classList.add('complete-button');
	completeButton.innerText = '済';
	completeButton.addEventListener('click', (e) => {
		tasksList.removeChild(e.target.closest('li'));
		completeTask(text);
	});

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	deleteButton.innerText = '消';
	deleteButton.addEventListener('click', (e) => {
		tasksList.removeChild(e.target.closest('li'));
	});

	span.appendChild(completeButton);
	span.appendChild(deleteButton);
	li.appendChild(span);

	tasksList.appendChild(li);
}


const completeTask = (text) => {

	const li = document.createElement('li');
	li.innerText = text;

	const span = document.createElement('span');

	const undoButton = document.createElement('button');
	undoButton.classList.add('undo-button');
	undoButton.innerText = '戻';
	undoButton.addEventListener('click', (e) => {
		completeList.removeChild(e.target.closest('li'));
		createTask(text);
	});

	const deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	deleteButton.innerText = '消';
	deleteButton.addEventListener('click', (e) => {
		completeList.removeChild(e.target.closest('li'));
	});

	span.appendChild(undoButton);
	span.appendChild(deleteButton);
	li.appendChild(span);

	completeList.appendChild(li);
};
