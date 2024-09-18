const express = require('express');
const route = require('./src/routes/user-routes');
const connection = require('./src/database/connection');
const port = 3000;

const app = express();

app.use(express.json());

// Usando a rota de clientes
app.use('/', route);

app.listen(port, () => {
    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados: ', err.stack);
            return;
        }
        console.log('Conectado ao banco de dados com ID', connection.threadId);
    });

    console.log(`O servidor está rodando na porta ${port}`);
});
