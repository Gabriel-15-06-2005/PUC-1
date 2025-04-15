import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
});

// Função para obter todos os livros
export const getBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
};

// Função para obter um livro por ID
export const getBookById = async (id) => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o livro com ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo livro
export const createBook = async (book) => {
  try {
    const response = await api.post("/books", book);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    throw error;
  }
};

// Função para atualizar um livro
export const updateBook = async (id, book) => {
  try {
    const response = await api.put(`/books/${id}`, book);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar o livro com ID ${id}:`, error);
    throw error;
  }
};

// Função para deletar um livro
export const deleteBook = async (id) => {
  try {
    await api.delete(`/books/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar o livro com ID ${id}:`, error);
    throw error;
  }
};

export default api;