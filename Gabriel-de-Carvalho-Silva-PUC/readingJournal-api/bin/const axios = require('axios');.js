const axios = require('axios');

// URL da API
const url = 'https://jsonplaceholder.typicode.com/posts';

axios.get(url)
  .then(response => {
    console.log('Dados recebidos:', response.data);
  })
  .catch(error => {
    console.error('Erro ao realizar a requisição:', error);
  });