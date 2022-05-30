const TodosController = require('../controllers/todos.controller');
const { Router } = require('express');
const router = Router();

router.get('/', TodosController.getAllTodos);
router.post('/', TodosController.createTodo);
router.delete('/:id', TodosController.deleteTodo);
router.patch('/:id', TodosController.updateTodo);

module.exports = router;
