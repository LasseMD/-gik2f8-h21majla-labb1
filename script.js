'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));



  const element = document.querySelectorAll(".book-list__item"); // Mouse target

  for (let i = 0; i < element.length; i++) {

    element[i].addEventListener("mouseenter", (e) => {
      let book = getBookDetails(e.target.id)
      // console.log(id);
      book.then(function (result){
        renderBookDetail(result);
      })
    });


}
}

function renderBookDetail(bookDetail){
  const existElement = document.getElementById("bookDetail");
  const root = document.getElementById("root");
  existElement && existElement.remove();
  let html = BookDetail(bookDetail);
  root.insertAdjacentHTML("afterend", html);
}


  
  // // Här så renderar rutan när vi hoovrar 
  // const element = document.getElementById("box1");  
  // window.onload = element.addEventListener("mouseenter", event => {
    
  //   console.log("Mouse in");
  //   event.target.insertAdjacentHTML("beforeend",BookDetail())

  // });
  
  // element.addEventListener("mouseleave", event => {
  //   console.log("Mouse out");
    
  //   const existElement = document.getElementById("BookDetail");
  //   existElement && existElement.remove();
  // });



  
  // // Här så renderar rutan när vi hoovrar 
  // window.onload = element.addEventListener("mouseenter", event => {
    
  //   console.log("Mouse in");
  //   event.target.insertAdjacentHTML("beforeend",BookDetail())

  // });
  
  // element.addEventListener("mouseleave", event => {
  //   console.log("Mouse out");

  //   const existElement = document.getElementById("BookDetail");
  //   existElement && existElement.remove();
  // });
