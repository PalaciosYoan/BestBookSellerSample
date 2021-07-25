import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
function BookList() {
  return (
    <section className='booklist'>
      {/* The job='dev' is the arguement passing to book props */}
      {books.map((book) => {
        // {...book} = img=book.img title=book.title etc. but one line
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
