const express = require('express');
const router = express.Router();
const connection = require('../database/connection')
const controller = require('../controllers/user-controller')

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM clients';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});


// // Rota para buscar cliente por ID
router.get('/:id', controller.getUser );

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser)

router.delete('/:id', controller.deleteUser)

module.exports = router
