import React, { useState } from "react";
import { TextField, Button, Typography, Box, Snackbar, Alert } from "@mui/material";
import { addBook, updateBook } from "../services/api";

const BookForm = ({ bookToEdit, onSave }) => {
  const [title, setTitle] = useState(bookToEdit?.title || "");
  const [author, setAuthor] = useState(bookToEdit?.author || "");
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError("Todos os campos são obrigatórios!");
      return;
    }

    const book = { id: bookToEdit?.id, title, author };

    try {
      if (bookToEdit) {
        await updateBook(book);
        setSnackbar({ open: true, message: "Livro atualizado com sucesso!", severity: "success" });
      } else {
        await addBook(book);
        setSnackbar({ open: true, message: "Livro cadastrado com sucesso!", severity: "success" });
      }
    } catch (error) {
      setSnackbar({ open: true, message: "Erro ao salvar livro.", severity: "error" });
    }

    setTitle("");
    setAuthor("");
    setError("");
    onSave();
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {bookToEdit ? "Editar Livro" : "Adicionar Livro"}
      </Typography>
      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          {bookToEdit ? "Salvar Alterações" : "Adicionar Livro"}
        </Button>
      </form>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BookForm;
