const express = require('express');
const dataGenerator = require('data-generator');

const app = express();
const PORT = 3001;

// Gerar dados de exemplo
const users = [
  { id: 1, name: 'David Bryan', email: 'davidbryan@example.com' },
  { id: 2, name: 'Igor Ribeiro', email: 'igor.ribeiro@example.com' },
  { id: 3, name: 'Carlos Oliveira', email: 'carlos.oliveira@example.com' },
  { id: 4, name: 'Ana Costa', email: 'ana.costa@example.com' },
  { id: 5, name: 'Rafael Pereira', email: 'rafael.pereira@example.com' },
  // Adicione mais usuários conforme necessário
];

export default users;

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

