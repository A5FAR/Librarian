var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  { title: "The Alchemist", year: "1988", author: "Paulo Coelho", publisher: "HarperTorch" }
  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
}

console.log(getBookTitle(5));

/* Task 3 */
function addBook( book ){
  library.push(book);
  return library;
}

var newBook = {
  title: "The Da Vinci Code", year: "2003", author: "Dan Brown", publisher: "Doubleday"
};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  var n = library.length;
  var temp;
  for (var i = 0; i <= n-1; i++) {
  	for (var j = 0; j <= n-1; j++) {
  		if (library[i].author < library[j].author) {
  			temp = library[i];
  			library[i] = library[j];
  			library[j] = temp;
  		}
  	}
  }
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  var x;
  
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
