import React, { useRef } from "react";

const DragAndDrop = () => {
	const dragedElement = useRef(null);

	function handleDragStar (event) {
		event.dataTransfer.setData("text/plain", event.target.id);
	}

	function handleDragOver (event) {
		event.preventDefault();
	}

	function handleDragOverStyle (event) {

	}

	function handleDrop (event) {
		const id = event.dataTransfer.getData("text/plain");
		const draggableElement = document.getElementById(id);

		const dropZone = event.target;

		dropZone.appendChild(draggableElement);
	}

	return (
		<div className="drag-and-drop-component">
			<div className="drag-and-drop-component--wrapper">
				<div id="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
					<h1>DropZone</h1>
				</div>
				<br />
				<br />
				<br />
				<div id="drop-element--1" ref={dragedElement} onDragStart={handleDragStar} draggable>Drop Element 1</div>
			</div>
		</div>
	);
};

export default DragAndDrop;

/*
const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOrder);

















const DragAndDrop = () => {
	const dragedElement = React.useRef(null);

	function handleDragStar (event) {
		event.dataTransfer.setData("text/plain", event.target.id);
	}

	function handleDragOver (event) {
		event.preventDefault();
	}

	function handleDragOverStyle (event) {

	}

	function handleDragOverItem (event) {
		console.log("drag over");
		event.preventDefault();
	}

	function handleDragEntersItem (event) {
		console.log("drag enters");
		event.currentTarget.style.backgroundColor = "red";
	}

	function handleDragLeavesItem (event) {
		console.log("drag Leaves");
		event.currentTarget.style.backgroundColor = "blue";
	}

	function handleDrop (event) {
		const id = event.dataTransfer.getData("text/plain");
		const draggableElement = document.getElementById(id);

		const dropZone = event.target;

		dropZone.appendChild(draggableElement);
	}

	return (
		<div className="drag-and-drop-component">
			<div className="drag-and-drop-component--wrapper">
				<div id="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
					<h1>DropZone</h1>
				</div>
				<br />
				<br />
				<br />
				<div id="drop-element--1"
					ref={dragedElement}
					onDragStart={handleDragStar}
					onDragEnter={handleDragEntersItem}
					onDragLeave={handleDragLeavesItem}
					onDragOver={handleDragOverItem}
					draggable>
						Drop Element 1
				</div>
				<div id="drop-element--2"
					ref={dragedElement}
					onDragStart={handleDragStar}
					onDragEnter={handleDragEntersItem}
					onDragLeave={handleDragLeavesItem}
					onDragOver={handleDragOverItem}
					draggable>
						Drop Element 2
				</div>
				<div id="drop-element--3"
					ref={dragedElement}
					onDragStart={handleDragStar}
					onDragEnter={handleDragEntersItem}
					onDragLeave={handleDragLeavesItem}
					onDragOver={handleDragOverItem}
					draggable>
						Drop Element 3
				</div>
				<div id="drop-element--4"
					ref={dragedElement}
					onDragStart={handleDragStar}
					onDragEnter={handleDragEntersItem}
					onDragLeave={handleDragLeavesItem}
					onDragOver={handleDragOverItem}
					draggable>
						Drop Element 4
				</div>
			</div>
		</div>
	);
};
*/