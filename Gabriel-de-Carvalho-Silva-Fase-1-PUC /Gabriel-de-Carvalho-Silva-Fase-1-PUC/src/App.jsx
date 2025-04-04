import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList books={books} onDelete={handleDeleteBook} />} />
        <Route path="/add" element={<BookForm onAdd={handleAddBook} />} />
      </Routes>
    </Router>
  );
};

export default App;