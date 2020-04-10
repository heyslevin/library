let myLibrary = []

function Book(title,author,pages,read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	myLibrary.push(this)
}

function addBookToLibrary() {

}

let table = document.querySelector(".table");

book1 = new Book("Dick tales 2, bigger","Richard Hawkins",2500,"No")
book2 = new Book("Dick tales 3, the revenge","Richard Hawkins",300,"No")
book3 = new Book("Dick tales 4, coming up","Richard Hawkins",210,"No")

myLibrary.forEach(function(e) {
	table.innerHTML += `<tr><td>${e.title}</td>
							<td>${e.author}</td>
							<td>${e.pages}</td>
							<td>${e.read}</td>
						</tr>
						`
});


// Selector

// HTML Template

// Render function
