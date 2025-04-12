import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Button, Box, Typography, TextField } from "@mui/material";
import { getBooks } from "../services/api";

const BookList = ({ onEdit, onDelete }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Livros
      </Typography>
      <TextField
        fullWidth
        label="Buscar Livro"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
      />
      <List>
        {filteredBooks.map((book) => (
          <ListItem
            key={book.id}
            secondaryAction={
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(book)}
                  sx={{ marginRight: 1 }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(book.id)}
                >
                  Excluir
                </Button>
              </>
            }
          >
            <ListItemText primary={book.title} secondary={book.author} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BookList;