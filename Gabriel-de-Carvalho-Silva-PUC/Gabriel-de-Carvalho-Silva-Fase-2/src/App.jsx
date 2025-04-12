import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEditBook = (book) => {
    setBookToEdit(book);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList onEdit={handleEditBook} />} />
        <Route
          path="/add"
          element={<BookForm bookToEdit={bookToEdit} onSave={() => setBookToEdit(null)} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;