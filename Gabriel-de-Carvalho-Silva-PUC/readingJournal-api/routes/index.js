const express = require('express');
const router = express.Router();

// Define a rota para a página inicial
router.get('/', (req, res) => {
  res.render('index'); // Renderiza a view "index"
});

module.exports = router;
