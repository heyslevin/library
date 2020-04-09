let myLibrary = []

function Book(title,author,pages,read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`

	myLibrary.push(this)

	console.log(this)
}

Book.prototype.sayName = function() {
	console.log(this)
}

function addBookToLibrary() {

}

book1 = new Book("Dick tales 2","Richard Hawkins",200,"No")

myrender = "<p>Hello there<p>"


// Selector
const world = document.querySelector(".world");

// HTML Template
const html = `<table style="width:100%">
			<tr>
				<th>Title</th>
				<th>Author</th>
				<th>Pages</th>
				<th>Read</th>
			</tr>
			<tr>
				<td>${book1.title}</td>
				<td>${book1.author}</td>
				<td>${book1.pages}</td>
				<td>${book1.read}</td>
			</ul>
			`


// Render function
function render(template,selector) {
	world.innerHTML = html;
}

render()
