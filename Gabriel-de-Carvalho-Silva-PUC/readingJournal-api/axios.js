import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // URL do backend
});

export const getBooks = async () => {
  const response = await api.get("/books");
  return response.data;
};

export const getBookById = async (id) => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await api.post("/books", book);
  return response.data;
};

export const updateBook = async (book) => {
  const response = await api.put(`/books/${book.id}`, book); // Corrigido para incluir o ID na URL
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await api.delete(`/books/${id}`);
  return response.data;
};