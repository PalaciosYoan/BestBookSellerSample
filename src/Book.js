import React from "react";

const Book = (props) => {
  //const Book = ({img, title, author}) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("helloworld");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author } = props;
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}>
      <img src={img} alt=''></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        2nd button
      </button>
    </article>
  );
};

export default Book;
