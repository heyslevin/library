let myLibrary = []

// Selectors
let add = document.querySelector("#add")
let submit = document.querySelector("#submit")
let popupWindow = document.querySelector(".pop-container")
let table = document.querySelector(".table");

// Book creator
function Book(title,author,pages,read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addIndex() {
	i = 0
	myLibrary.map(function(e,){
		e['id'] = i
		i++
	})

}

// Button Generator 

function buttonGenerator(row,id) {

	let rowId = id
	let buttonCell = document.createElement("td")
	let newButton = document.createElement("button")
	newButton.setAttribute("id","delete")
	newButton.innerHTML = "Delete"
	newButton.addEventListener("click",deleteBook)
	newButton.setAttribute("data-rowId",rowId)

	buttonCell.appendChild(newButton)
	row.appendChild(buttonCell)
}


// Add to library array + table
function addtoLibrary(title,author,pages,read) {
	let book = new Book(title,author,pages,read)
	myLibrary.push(book)
	cleartable()
	generateTable(myLibrary)
	// delButton = document.querySelectorAll('button[id="delete"]')
	// delButton.forEach(e => e.addEventListener("click",deleteBook));
}


// Demo books

let book1 = addtoLibrary("Dick tales 2, bigger","Richard Hawkins",2500,"No")
let book2 = addtoLibrary("Dick tales 3, the revenge","Richard Hawkins",300,"No")
let book3 = addtoLibrary("Dick tales 4, coming up","Richard Hawkins",210,"No")



// Table generator ****************

function generateTable(arr) {


	arr.forEach(function(e) { 

	let row = document.createElement("tr")

		
		for (var key in e) {
			let rowData = document.createElement("td")

			obj = e[key]
			rowData.innerHTML = obj
			row.appendChild(rowData)
			table.appendChild(row)
		}
	

	addIndex()
	let rowId = e['id']
	row.setAttribute("id",arr['id'])
	buttonGenerator(row,rowId)

	});


}

//Clear table

function cleartable() {
	table.innerHTML = ""
}

//Button actions

function deleteBook(arr) {
	index = this.dataset.rowid
	myLibrary.splice(index,1)
	cleartable()
	generateTable(myLibrary)
}

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

