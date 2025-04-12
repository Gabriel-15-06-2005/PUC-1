import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { addBook, updateBook } from "../../services/api";
import BookForm from "../BookForm";

jest.mock("../../services/api");

describe("BookForm Component", () => {
  it("deve exibir o formulário de adição de livro", () => {
    render(<BookForm onSave={jest.fn()} />);

    // Verifica se os campos do formulário estão presentes
    expect(screen.getByLabelText("Título")).toBeInTheDocument();
    expect(screen.getByLabelText("Autor")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("deve chamar a função addBook ao submeter o formulário", async () => {
    const mockOnSave = jest.fn();
    addBook.mockResolvedValue({ id: 1, title: "Novo Livro", author: "Novo Autor" });

    render(<BookForm onSave={mockOnSave} />);

    // Preenche os campos do formulário
    fireEvent.change(screen.getByLabelText("Título"), { target: { value: "Novo Livro" } });
    fireEvent.change(screen.getByLabelText("Autor"), { target: { value: "Novo Autor" } });

    // Submete o formulário
    fireEvent.click(screen.getByText("Adicionar"));

    // Verifica se a função addBook foi chamada
    expect(addBook).toHaveBeenCalledWith({ title: "Novo Livro", author: "Novo Autor" });
    expect(mockOnSave).toHaveBeenCalled();
  });

  it("deve chamar a função updateBook ao editar um livro", async () => {
    const mockOnSave = jest.fn();
    updateBook.mockResolvedValue({ id: 1, title: "Livro Editado", author: "Autor Editado" });

    render(<BookForm bookToEdit={{ id: 1, title: "Livro Antigo", author: "Autor Antigo" }} onSave={mockOnSave} />);

    // Edita os campos do formulário
    fireEvent.change(screen.getByLabelText("Título"), { target: { value: "Livro Editado" } });
    fireEvent.change(screen.getByLabelText("Autor"), { target: { value: "Autor Editado" } });

    // Submete o formulário
    fireEvent.click(screen.getByText("Salvar Alterações"));

    // Verifica se a função updateBook foi chamada
    expect(updateBook).toHaveBeenCalledWith({ id: 1, title: "Livro Editado", author: "Autor Editado" });
    expect(mockOnSave).toHaveBeenCalled();
  });

  it("deve exibir erro se os campos estiverem vazios", async () => {
    render(<BookForm onSave={jest.fn()} />);

    fireEvent.click(screen.getByText("Adicionar"));

    expect(screen.getByText("Todos os campos são obrigatórios!")).toBeInTheDocument();
  });
});