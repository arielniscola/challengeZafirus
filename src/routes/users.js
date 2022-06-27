const { Router } = require('express');

const api = Router();
const userControllers = require('../controllers/usuarios');

api.get('', userControllers.userList);
api.get('/:id', userControllers.getUser);
api.post('', userControllers.addUser);
api.put('/:id', userControllers.updateUser);
api.delete('/:id', userControllers.deleteUser);


module.exports = api