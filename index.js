function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    let x = fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())    //converts to json 
    .then((books) => renderBooks(books)) //takes data and feeds into renderBooks fcn. 
    return x
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

