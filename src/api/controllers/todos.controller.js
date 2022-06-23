const { sucessResponse, errorResponse } = require('../../utils/responses');
const TodosService = require('../../services/todos.service');

/**
 * @name getAllTodos
 * @description A functionality for retrieving all todos
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const getAllTodos = async (req, res) => {
  try {
    const response = await TodosService.getAllTodos();
    sucessResponse(req, res, 200, 'Data successfully received', response);
  } catch (error) {
    errorResponse(req, res, 500, '[Error] error while retrieving data');
  }
};

/**
 * @name createTodo
 * @description A functionality to create a new todo
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
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

/**
 * @name deleteTodo
 * @description A functionality to delete a single todo by its id
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const deleteTodo = async (req, res) => {
  try {
    await TodosService.deleteTodo(req.params.id);
    sucessResponse(req, res, 201, 'Todo successfully deleted');
  } catch (error) {
    errorResponse(req, res, 500, '[Error] Todo not deleted');
  }
};

/**
 * @name updateTodo
 * @description A functionality to update a single todo by its id
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todoData = req.body;
    await TodosService.updateTodo(todoId, todoData);
    sucessResponse(req, res, 200, 'Todo successfully updated');
  } catch (error) {
    errorResponse(req, res, 500, '[Error] Todo not updated');
  }
};

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
