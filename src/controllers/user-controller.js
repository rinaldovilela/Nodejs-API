const clients = require('../models/clients');
const connection = require('../database/connection')



// function createUser (req, res) {
//     const {name, age, occupation } = req.body;
//     const id = clients.length + 1;
//     clients.push({id, name, age, occupation});
//     res.json(clients);
// }

// function updateUser (req, res) {
//     const { id } = req.params;                    //  Pegue o ID do cliente.
//     const { name, age, occupation } = req.body;     //  Pegue os novos dados do cliente.
//     const client = clients.find((value) => value.id === Number(id));    //Encontre o cliente na lista.
//     if(!client)  return res.send('Client not found');   //Se não achar, diga que não foi encontrado.
//     client.name = name;                         // Se achar, atualize os dados.
//     client.age = age;                           // Se achar, atualize os dados.
//     client.occupation = occupation;             // Se achar, atualize os dados.
//     res.send('Client updated');                 // Confirme que a atualização foi feita.
// }

// function deleteUser (req, res) {
//     const { id } = req.params; 
//     const index = clients.findIndex((value) => value.id === Number(id));
//     if (index === -1) return res.status(404).send('Client not found');
//     clients.splice(index, 1);
//     res.json('client deleted');
// }
function getUser (req, res) {
    const { id } = req.params;
    const sql = `SELECT * FROM clients WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    }) 
}

function createUser(req, res) {
    const { name, age, occupation } = req.body;
    const sql = 'INSERT INTO clients (name, age, occupation) VALUES (?, ?, ?)';
    connection.query(sql, [name, age, occupation], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

function updateUser (req, res) {
    const { id } = req.params;
    const { name, age, occupation } = req.body; 
    const sql = `UPDATE clients SET name='${name}', age='${age}', occupation='${occupation}'WHERE id=${id}`
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Client updated');
    })
}

function  deleteUser (req, res) {
    const {id} = req.params;
    const sql = `DELETE FROM clients WHERE id=${id}`
    connection.query(sql, (err, result) =>{
        if (err) throw err;
        res.send('Client deleted')
    })
}









module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}










