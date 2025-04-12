import React, { useState } from "react";
import api from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({ title: "", author: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/books", formData);
      alert("Livro cadastrado com sucesso!");
      setFormData({ title: "", author: "" });
    } catch (error) {
      alert("Erro ao cadastrar livro.");
    }
  };

  return (
    <div>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;