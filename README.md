## Nome: `Gabriel de Carvalho Silva`

## Introdução

Esta aplicação React permite gerenciar uma lista de livros, fornecendo funcionalidades básicas como adicionar, listar e excluir livros. O projeto foi desenvolvido utilizando React com React Router para navegação entre as páginas.

### Backend

Para executar este projeto:

1. Acesse o diretório do backend:


```
cd Gabriel-de-Carvalho-Silva-PUC/readingJournal-api
```

2. Execute npm install para instalar as dependências:


```
npm install
```

3. E em seguida, npm start, para iniciar.

``
npm start


4. Execute os endpoints listados em "API de livros".


## Componentes

- BookList:

  - Responsável por exibir a lista de livros cadastrados, recebe a lista de livros como props e possui funcionalidade de remoção de livros.

- BookForm:

  - Componente de formulário para adicionar novos livros, validação básica para garantir que os campos sejam preenchidos, e exibe mensagens de erro caso os campos não sejam preenchidos corretamente.

- NavBar:

  - Barra de navegação contendo os links para acessar a página inicial (lista de livros) e a página de adição de livros.


# API de Livros

Esta API permite gerenciar uma lista de livros com operações de criação, leitura, atualização e exclusão (CRUD).

## Endpoints

### 1. **GET** `/books`
- **Descrição**: Retorna uma lista de todos os livros cadastrados.
- **Exemplo de uso**:
  ```bash
  curl -X GET http://localhost:5000/books
  ```
- **Exemplo de resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "Livro Exemplo",
      "author": "Autor Exemplo"
    }
  ]
  ```

### 2. **GET** `/books/:id`
- **Descrição**: Retorna um livro específico por id.
- **Exemplo de uso**:
  ```bash
  curl -X GET http://localhost:5000/books/1
  ```
- **Exemplo de resposta**:
  ```json
    {
      "id": 1,
      "title": "Livro Exemplo",
      "author": "Autor Exemplo"
    }
  ```

### 3. **POST** `/books`
- **Descrição**: Cadastra um livro novo
- **Exemplo de uso**:
  ```bash
  curl -X POST http://localhost:5000/books \
  -H "Content-Type: application/json" \
  -d '{"title": "Novo Livro", "author": "Novo Autor"}'
  ```
- **Exemplo de resposta**:
  ```json
    {
    "id": 2,
    "title": "Novo Livro",
    "author": "Novo Autor"
    }
  ```

### 4. **PUT** `/books/:id`
- **Descrição**: Atualiza os dados de um livro existente.
- **Exemplo de uso**:
  ```bash
  curl -X PUT http://localhost:5000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Livro Atualizado", "author": "Autor Atualizado"}'
  ```
- **Exemplo de resposta**:
  ```json
    {
    "id": 1,
    "title": "Livro Atualizado",
    "author": "Autor Atualizado"
    }
  ```

### 5. **DELETE** `/books`
- **Descrição**: Remove o libro pelo ID.
- **Exemplo de uso**: 
  ```bash
    curl -X DELETE http://localhost:5000/books/1
  ```
- **Exemplo de resposta**:
  ```json
    {
    Status HTTP 204 No Content
    }
  ```


## Conclusão

Este projeto serve como uma introdução ao desenvolvimento de aplicações React, utilizando componentes reutilizáveis e gerenciamento de estado. Além disso, implementa conceitos básicos de roteamento e manipulação de listas.
