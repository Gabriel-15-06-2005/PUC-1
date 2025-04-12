import React from "react";
import { List, ListItem, ListItemText, Button, Box, Typography } from "@mui/material";

const BookList = ({ books, onDelete }) => {
  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Livros
      </Typography>
      <List>
        {books.map((book, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onDelete(index)}
              >
                Excluir
              </Button>
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