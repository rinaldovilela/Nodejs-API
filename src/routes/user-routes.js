const express = require('express');
const router = express.Router();
const clients = require('../models/clients')
const controller = require('../controllers/user-controller')

router.get('/', (req, res) => {
    res.json(clients);
});

// Rota para buscar cliente por ID
router.get('/:id', controller.getUser );

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser)

router.delete('/:id', controller.deleteUser)

module.exports = router
