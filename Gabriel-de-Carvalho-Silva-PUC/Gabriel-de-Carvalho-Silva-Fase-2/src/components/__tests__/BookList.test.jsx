import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { getBooks } from "../../services/api";
import BookList from "../BookList";

jest.mock("../../services/api");

describe("BookList Component", () => {
  const mockBooks = [
    { id: 1, title: "Livro 1", author: "Autor 1" },
    { id: 2, title: "Livro 2", author: "Autor 2" },
  ];

  beforeEach(() => {
    getBooks.mockResolvedValue(mockBooks);
  });

  it("deve renderizar a lista de livros", async () => {
    render(<BookList />);

    // Verifica se os livros são renderizados
    const book1 = await screen.findByText("Livro 1");
    const book2 = await screen.findByText("Livro 2");

    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
  });

  it("deve filtrar os livros com base na busca", async () => {
    render(<BookList />);

    // Aguarda os livros serem renderizados
    await screen.findByText("Livro 1");

    // Simula a busca
    const searchInput = screen.getByLabelText("Buscar Livro");
    fireEvent.change(searchInput, { target: { value: "Livro 1" } });

    // Verifica se apenas o livro correspondente aparece
    expect(screen.getByText("Livro 1")).toBeInTheDocument();
    expect(screen.queryByText("Livro 2")).not.toBeInTheDocument();
  });
});