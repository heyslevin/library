let myLibrary = [];

// Selectors
let add = document.querySelector("#add");
let submit = document.querySelector("#submit");
let popupWindow = document.querySelector(".pop-container");
let table = document.querySelector(".table");
let checker = document.querySelector("#checker");

let input = document.querySelector("#bookquery");
let message = document.querySelector("#message");

// Book creator
class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		if (checker.checked == true) {
			this.status = true;
		} else {
			this.status = false;
		}
	}

	addtoLibrary() {
		myLibrary.push(this);
		cleartable();
		generateTable(myLibrary);
	}
}

function addIndex() {
	i = 0;
	myLibrary.map(function (e) {
		e["id"] = i;
		i++;
	});
}

// Button Generator

// Delete Button

function buttonGenerator(row, id) {
	let rowId = id;
	let buttonCell = document.createElement("td");
	let newButton = document.createElement("button");
	newButton.setAttribute("id", "delete");
	newButton.innerHTML = "Delete";
	newButton.addEventListener("click", deleteBook);
	newButton.setAttribute("data-rowId", rowId);

	buttonCell.appendChild(newButton);
	row.appendChild(buttonCell);
}

// Read Button

function buttonGeneratorRead(row, status) {
	let buttonCell = document.createElement("td");
	let newButton = document.createElement("button");
	newButton.setAttribute("id", "reader");

	newButton.addEventListener("click", function () {
		if (status == true) {
			status = false;
		} else if (status == false) {
			status = true;
		}
		buttonStatus(status, newButton);
	});

	buttonStatus(status, newButton);
	buttonCell.appendChild(newButton);
	row.appendChild(buttonCell);
}

function buttonStatus(status, newButton) {
	if (status == true) {
		newButton.innerHTML = "Read";
	} else if (status == false) {
		newButton.innerHTML = "Not Read";
	}
}

// Add to library array + table **********************

// Demo books

let book1 = new Book("Dick tales 2, bigger", "Richard Hawkins", 2500, "No");
let book2 = new Book("Dick tales 3, the revenge", "Richard Hawkins", 300, "No");
let book3 = new Book("Dick tales 4, coming up", "Richard Hawkins", 210, "No");

// Table generator ****************

function generateTable(arr) {
	arr.forEach(function (e) {
		let row = document.createElement("tr");

		for (var key in e) {
			let rowData = document.createElement("td");
			obj = e[key];
			rowData.innerHTML = obj;
			row.appendChild(rowData);
			table.appendChild(row);
		}

		addIndex();
		let rowId = e["id"];
		let status = e["status"];

		row.setAttribute("id", rowId);
		buttonGenerator(row, rowId);
		buttonGeneratorRead(row, status);
	});
}

//Clear table

function cleartable() {
	table.innerHTML = "";
}

//Button actions

function deleteBook(arr) {
	index = this.dataset.rowid;
	myLibrary.splice(index, 1);
	cleartable();
	generateTable(myLibrary);
}

// Add new book actions

function popup() {
	popupWindow.style.visibility = "visible";
}

// Read Toggle

// Submit actions
function checkForm(e) {
	e.preventDefault(); // prevent the form from being submitted

	//Check Validity
	if (!input.checkValidity()) {
		message.innerHTML = "You done fucked up";
	} else {
		popupWindow.style.visibility = "hidden";
		let name = document.querySelector('input[name="title"]').value;
		let author = document.querySelector('input[name="author"]').value;
		let pages = document.querySelector('input[name="pages"]').value;
		let read = document.querySelector('input[name="read"]').checked;
		let newbook = new Book(name, author, pages, read);
		newbook.addtoLibrary();
	}
}

//Event Listeners

add.addEventListener("click", popup);
submit.addEventListener("click", checkForm);
