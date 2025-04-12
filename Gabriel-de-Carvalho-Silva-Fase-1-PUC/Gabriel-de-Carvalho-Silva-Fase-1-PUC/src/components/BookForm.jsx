import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError("Todos os campos são obrigatórios!");
      return;
    }
    onAdd({ title, author });
    setTitle("");
    setAuthor("");
    setError("");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Adicionar Livro
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
          Adicionar
        </Button>
      </form>
    </Box>
  );
};

export default BookForm;
