const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Permite que o Express leia JSON do corpo da requisição
app.use(cors()); // Habilita o CORS para permitir requisições do frontend

// Rota para receber dados do formulário de contato
app.post('/api/contacts', (req, res) => {
    const { name, email, message } = req.body;

    // Apenas para demonstração, mostre os dados no console
    console.log('--- Novo Contato Recebido ---');
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${message}`);

    // Aqui você pode adicionar lógica para salvar os dados em um banco de dados
    // ou enviar um e-mail.

    // Envie uma resposta de sucesso ao frontend
    res.status(200).json({ message: 'Mensagem recebida com sucesso!' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});