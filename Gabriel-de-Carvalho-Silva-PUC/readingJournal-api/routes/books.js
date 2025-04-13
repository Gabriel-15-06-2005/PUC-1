const express = require('express');
const router = express.Router();

// Simulação de um banco de dados em memória
let books = [
  { id: 1, title: 'Livro 1', author: 'Autor 1' },
  { id: 2, title: 'Livro 2', author: 'Autor 2' },
];

// GET: Lista todos os livros
router.get('/', (req, res) => {
  res.json(books);
});

// GET: Retorna um livro por ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Livro não encontrado' });
  }
  res.json(book);
});

// POST: Cadastra um novo livro
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Título e autor são obrigatórios' });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT: Atualiza os dados de um livro
router.put('/:id', (req, res) => {
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: 'Livro não encontrado' });
  }
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
});

// DELETE: Remove um livro por ID
router.delete('/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Livro não encontrado' });
  }
  books.splice(bookIndex, 1);
  res.status(204).send();
});

module.exports = router;
