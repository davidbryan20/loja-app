const express = require('express');
const dataGenerator = require('data-generator');

const app = express();
const PORT = 3001;

// Gerar dados de exemplo
const users = dataGenerator.generateUsers(10);

// Rota para obter todos os usuários
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Rota para obter um usuário pelo ID
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === userId);
  res.json(user);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
