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