const express = require('express');
const route = require('./src/routes/user-routes')
const port = 3000

const app = express();

app.use(express.json());

app.use('/', route)


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})


