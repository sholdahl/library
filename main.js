function Book(title, author, numPages, readBefore){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.readBefore = readBefore;
    this.info = function(readBefore) {
        readText = ""
        if (readBefore == true) { 
            readText = "already read"
        } else {
            readText = "not read yet"
        }
        return title + ", by " + author + ", " + numPages + " pages , " + readText
    }
}


function addBookToLibrary() {
    // do stuff here
  }