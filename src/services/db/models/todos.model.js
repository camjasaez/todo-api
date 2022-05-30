const mongoose = require('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
  task: String,
  completed: Boolean,
  createdAt: { type: Date, default: new Date() },
});

const TodosModel = mongoose.model('TodosModel', todosSchema);
module.exports = TodosModel;
