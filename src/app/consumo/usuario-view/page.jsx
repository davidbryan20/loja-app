// Exemplo básico usando React
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importe os ícones conforme necessário

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os usuários da API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []); // Executa uma vez no carregamento

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            {/* Adicione mais colunas conforme necessário */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              {/* Adicione mais colunas conforme necessário */}
              <td>
                <Link to={`/users/${user.id}`}>
                  <FaEdit />
                </Link>
                <Link to={`/users/${user.id}/delete`}>
                  <FaTrash />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
