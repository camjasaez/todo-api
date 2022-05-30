const TodosController = require('../controllers/todos.controller');
const { Router } = require('express');
const router = Router();

router.get('/', TodosController.getAllTodos);

module.exports = router;
