const Book = require('../models/Book');
const { body, validationResult } = require("express-validator");

// Listar todos os livros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

// Buscar livro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado com o ID fornecido." });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Erro interno ao buscar o livro." });
  }
};

// Criar novo livro
exports.createBook = [
  body("title").notEmpty().withMessage("O título é obrigatório."),
  body("author").notEmpty().withMessage("O autor é obrigatório."),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(400).json({ error: "Erro ao criar livro" });
    }
  },
];

// Atualizar livro
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ error: "Livro não encontrado" });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar livro" });
  }
};

// Excluir livro
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: "Livro não encontrado" });
    res.json({ message: "Livro excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir livro" });
  }
};