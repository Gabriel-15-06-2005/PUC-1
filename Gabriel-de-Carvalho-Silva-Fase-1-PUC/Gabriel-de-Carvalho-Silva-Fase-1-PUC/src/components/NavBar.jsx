import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Adicionar Livro
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Sobre
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contato
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;