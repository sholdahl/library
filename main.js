let library = []
let submitBtn = document.querySelector('#submit')
let bookData = {};
let libraryDisplay = document.querySelector('#library-display')
let formToggler = document.querySelector(".plus")
let form = document.querySelector(".formWrapper")
let minusToggler = document.querySelector(".minus")
let removeBtns = document.querySelectorAll(".card-btn")

submitBtn.addEventListener("click", processForm);
formToggler.addEventListener("click", toggleForm);
addListeners()

function removeCard() {
    this.parentElement.parentElement.remove()
}

// Functions
function addListeners() {
    removeBtns = document.querySelectorAll(".card-btn");
    removeBtns.forEach(button => {
        button.addEventListener("click", removeCard)
    });
}

function toggleForm(){
    form.classList.toggle("hidden");
    formToggler.classList.toggle("btn-shadow");
    formToggler.classList.toggle("hidden");
    minusToggler.classList.toggle("hidden");
};

function addBookCard(title, author, numPages, readBefore){
    const wrapperDiv = document.createElement("div"); 
    const bookDiv = document.createElement("div");
    const titleElement = document.createElement("h3"); 
    const authorElement = document.createElement("h5"); 
    const pagesElement = document.createElement("h5"); 
    const readElement = document.createElement("h5");
    const removeBtn = document.createElement("button")
    const box = document.createElement("input")

    box.setAttribute("type", "checkbox")
    if(readBefore){
        box.checked = true
    } else {
        box.checked = false
    }
    readElement.appendChild(box)

    let bookTitle = document.createTextNode(title);
    titleElement.appendChild(bookTitle);
    let bookAuthor = document.createTextNode(author);
    authorElement.appendChild(bookAuthor);
    let bookPages = document.createTextNode("Pages: " + numPages);
    pagesElement.appendChild(bookPages);
    readStatus = " Finished Reading"
    let bookRead = document.createTextNode(readStatus);
    readElement.appendChild(bookRead);
    let removeText = document.createTextNode("Remove");
    removeBtn.appendChild(removeText);

    wrapperDiv.classList.add("bookWrapper");
    wrapperDiv.classList.add("col-4");
    bookDiv.classList.add("col");
    bookDiv.classList.add("bookCard");
    removeBtn.classList.add("btn");
    removeBtn.classList.add("card-btn");
    removeBtn.classList.add("btn-outine-danger");

    wrapperDiv.appendChild(bookDiv);
    bookDiv.appendChild(titleElement);
    bookDiv.appendChild(authorElement);
    bookDiv.appendChild(pagesElement);
    bookDiv.appendChild(readElement);  
    bookDiv.appendChild(removeBtn);

    document.querySelector(".library-display").appendChild(wrapperDiv);
};

function processForm () {
    getData();
    bookObj = new book(bookData.title, bookData.author, bookData.numPages, bookData.readBefore);
    addBookToLibrary(bookObj);
    addBookCard(bookData.title, bookData.author, bookData.numPages, bookData.readBefore);
    bookData = {};
    addListeners()
};

function getData() {
    let formDataArray = Array.from(document.querySelectorAll('#bookForm input'));
    formDataArray.forEach(input => {
        let value = null;
        if (input.type == "text") {
            value = input.value
        } else {
            value = input.checked
        }
        key = input.id;
        bookData[key] = value
    })
};

function book(title, author, numPages, readBefore) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readBefore = readBefore;
    this.info = function (readBefore) {
        readText = ""
        if (readBefore == true) {
            readText = "already read"
        } else {
            readText = "not read yet"
        }
        return title + ", by " + author + ", " + numPages + " pages , " + readText
    }
};

function addBookToLibrary(book) {
    library.push(book);
    console.log(library)
};