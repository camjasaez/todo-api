const { errorHandler } = require('../utils/errorHandler');
const TodosModel = require('./db/models/todos.model');

/**
 * @typedef Todo
 * @property {Number} _id
 * @property {String} task
 * @property {Boolean} completed
 */

/**
 * @typedef TodoFields
 * @property {String} task
 * @property {Boolean} completed
 */

/**
 * @name getAllTodos
 * @description Create a new instance of todo and writes it in the db
 * @return {Todo[]} res
 */
const getAllTodos = async () => {
  try {
    const todos = await TodosModel.find();
    return todos;
  } catch (error) {
    errorHandler(error);
  }
};

/**
 * @name createTodo
 * @description Create a new instance of a todo and writes it in the db
 * @param {TodoFields} todo A todo's necessary arguments
 * @return {Todo} the todo instance
 */
const createTodo = async (todo) => {
  try {
    const newTodo = new TodosModel(todo);
    await newTodo.save();
  } catch (error) {
    errorHandler(error);
  }
};

/**
 * @name deleteTodo
 * @description Eliminate todo by id
 * @param {Number} id The todo unique identifier
 */
const deleteTodo = async (id) => {
  try {
    await TodosModel.findByIdAndRemove(id);
  } catch (error) {
    errorHandler(error);
  }
};

/**
 * @name updateTodo
 * @description Update todo by id
 * @param {Number} id The todo unique identifier
 * @param {TodoFields} todo A todo's necessary arguments
 */
const updateTodo = async (id, todo) => {
  try {
    await TodosModel.findByIdAndUpdate(id, todo);
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
