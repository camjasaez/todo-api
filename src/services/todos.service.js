const TodosModel = require('./db/models/todos.model');

const getAllTodos = async () => {
  try {
    const todos = await TodosModel.find();
    return todos;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTodos };
