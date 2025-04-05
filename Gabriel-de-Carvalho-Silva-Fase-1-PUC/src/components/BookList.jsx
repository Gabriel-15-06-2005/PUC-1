import React from "react";

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author}
            <button onClick={() => onDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;