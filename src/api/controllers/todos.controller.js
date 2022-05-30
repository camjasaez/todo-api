const TodosService = require('../../services/todos.service');

const getAllTodos = async (req, res) => {
  try {
    const response = await TodosService.getAllTodos();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTodos };
