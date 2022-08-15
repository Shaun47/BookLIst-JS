// Represent a book
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class
class UI{
    static displayBooks(){
        const storedBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn : '25641'
            },
            {
                title: 'Book two',
                author: 'Jane Doe',
                isbn : '56412'
            }
        ];
        const books = storedBooks;
        books.forEach( (book) => UI.addBookToList(book));
    }


    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class"delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static clearFields(){
        const title = document.querySelector('#title').value = '';
        const author = document.querySelector('#author').value = '';
        const isbn = document.querySelector('#isbn').value = '';
    }

    static deleteBook(el){
        el.parentElement.parentElement.remove();
    }

    static showalert(message, classname){
        const div = document.createElement('div');
        div.className = `alert alert-${classname}`;
        div.appendChild(document.createTextNode(message)); 
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        // alert vanish in 3 seconds
        setTimeout(() => {
            document.querySelector(".alert").remove()
        },3000);
    }
}




// display book
document.addEventListener('DOMContentLoaded',UI.displayBooks);
// add a book
document.querySelector('#book-form').addEventListener('submit', (e)=>{

    e.preventDefault();
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === ''){
        UI.showalert("all fields must be filled","danger");
    }else{
        // instantiate book
        const book = new Book(title,author,isbn);
        // console.log(book);

        UI.addBookToList(book);

        //clear form fields
        UI.clearFields();
        UI.showalert("Data Inserted Successfully","success");
    }

})


// delete book
document.querySelector('#book-list').addEventListener("click",(e)=>{
    UI.deleteBook(e.target);
    // console.log(e.target);
})