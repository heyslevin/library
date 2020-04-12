let myLibrary = []

function Book(title,author,pages,read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addtoLibrary(title,author,pages,read) {
	let book = new Book(title,author,pages,read)
	myLibrary.push(book)
	generatetable(book)
}


let table = document.querySelector(".table");

let book1 = addtoLibrary("Dick tales 2, bigger","Richard Hawkins",2500,"No")
let book2 = addtoLibrary("Dick tales 3, the revenge","Richard Hawkins",300,"No")
let book3 = addtoLibrary("Dick tales 4, coming up","Richard Hawkins",210,"No")

function generatetable(e) {
	table.innerHTML += `<tr><td>${e.title}</td>
							<td>${e.author}</td>
							<td>${e.pages}</td>
							<td>${e.read}</td>
						</tr>
						`
}



//Button actions
function addBook() {
	alert("Working")
}


// Selectors
let add = document.querySelector("#add")
let submit = document.querySelector("#submit")
let popupWindow = document.querySelector(".pop-container")

// Add new book actions

function popup() {
	popupWindow.style.visibility = "visible";
}


// Submit actions
function checkForm(e) {
  e.preventDefault(); // prevent the form from being submitted
  popupWindow.style.visibility = "hidden";
  let name = document.querySelector('input[name="title"]').value
  let author = document.querySelector('input[name="author"]').value
  let pages = document.querySelector('input[name="pages"]').value
  let read = document.querySelector('input[name="read"]').checked
  addtoLibrary(name, author, pages, read)


}

//Event Listeners

add.addEventListener("click", popup)
submit.addEventListener("click", checkForm);

// add.addEventListener("click",addBook)


// HTML Template

// Render function
