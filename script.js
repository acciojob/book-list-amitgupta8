//your JS code here. If required.
const form = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const bookList = document.getElementById('book-list');

form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook);

function addBook(e) {
	e.preventDefault();
	const title = titleInput.value;
	const author = authorInput.value;
	const isbn = isbnInput.value;

	if (title === '' || author === '' || isbn === '') {
		alert('Please fill in all fields');
		return;
	}

	const book = {
		title,
		author,
		isbn
	};

	addBookToList(book);
	clearFields();
}

function addBookToList(book) {
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><button class="btn btn-danger btn-sm delete">X</button></td>
	`;
	bookList.appendChild(row);
}

function clearFields() {
	titleInput.value = '';
	authorInput.value = '';
	isbnInput.value = '';
}

function deleteBook(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure?')) {
			const row = e.target.parentElement.parentElement;
			row.remove();
		}
	}
}
