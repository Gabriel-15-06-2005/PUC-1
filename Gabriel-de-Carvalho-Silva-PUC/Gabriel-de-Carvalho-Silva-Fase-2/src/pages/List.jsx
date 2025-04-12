import React, { useEffect, useState } from "react";
import api from "../services/api";

const List = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      alert("Erro ao carregar livros.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      alert("Livro excluído com sucesso!");
      fetchBooks();
    } catch (error) {
      alert("Erro ao excluir livro.");
    }
  };

  const handleEdit = (id) => {
    const newTitle = prompt("Digite o novo título:");
    const newAuthor = prompt("Digite o novo autor:");
    if (newTitle && newAuthor) {
      api.put(`/books/${id}`, { title: newTitle, author: newAuthor })
        .then(() => {
          alert("Livro atualizado com sucesso!");
          fetchBooks();
        })
        .catch(() => alert("Erro ao atualizar livro."));
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Listagem de Livros</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
            <button onClick={() => handleEdit(book.id)}>Editar</button>
            <button onClick={() => handleDelete(book.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;