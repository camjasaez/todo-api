const { errorHandler } = require('../utils/errorHandler');
const TodosModel = require('./db/models/todos.model');

const getAllTodos = async () => {
  try {
    const todos = await TodosModel.find();
    return todos;
  } catch (error) {
    errorHandler(error);
  }
};

const createTodo = async (todo) => {
  try {
    const newTodo = new TodosModel(todo);
    await newTodo.save();
  } catch (error) {
    errorHandler(error);
  }
};

const deleteTodo = async (id) => {
  try {
    await TodosModel.findByIdAndRemove(id);
  } catch (error) {
    errorHandler(error);
  }
};

const updateTodo = async (id, todo) => {
  try {
    await TodosModel.findByIdAndUpdate(id, todo);
  } catch (error) {
    errorHandler(error);
  }
};

module.exports = { getAllTodos, createTodo, deleteTodo, updateTodo };
