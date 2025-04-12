import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Aplicação</h1>
      <nav>
        <Link to="/info">Página Informativa</Link> |{" "}
        <Link to="/register">Cadastro</Link> |{" "}
        <Link to="/list">Listagem</Link>
      </nav>
    </div>
  );
};

export default Home;