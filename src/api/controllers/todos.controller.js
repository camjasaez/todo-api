const { sucessResponse, errorResponse } = require('../../utils/responses');
const TodosService = require('../../services/todos.service');

const getAllTodos = async (req, res) => {
  try {
    const response = await TodosService.getAllTodos();
    sucessResponse(req, res, 200, 'Data successfully received', response);
  } catch (error) {
    errorResponse(req, res, 500, '[Error] error while retrieving data');
  }
};

const createTodo = async (req, res) => {
  try {
    const request = {
      task: req.body.task,
      completed: req.body.completed,
    };
    await TodosService.createTodo(request);
    sucessResponse(req, res, 201, 'Todo successfully created', request);
  } catch (error) {
    errorResponse(req, res, 500, '[Error] Todo not created');
  }
};

const deleteTodo = async (req, res) => {
  try {
    await TodosService.deleteTodo(req.params.id);
    sucessResponse(req, res, 201, 'Todo successfully deleted');
  } catch (error) {
    errorResponse(req, res, 500, '[Error] Todo not deleted');
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todoData = req.body;

    await TodosService.updateTodo(todoId, todoData);
    sucessResponse(req, res, 201, 'Todo successfully updated');
  } catch (error) {
    errorResponse(req, res, 500, '[Error] Todo not updated');
  }
};

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
