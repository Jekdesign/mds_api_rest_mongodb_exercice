/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TodoItemSchema = new Schema({
    name: {type: String, required: true},
    status: {type: String, enum: ['todo', 'inProgress', 'done'], default: 'todo', required: true}
  },
  {timestamps: true}
);


module.exports = TodoItemSchema;*/

const mongoose = require('mongoose')

const TodoItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['todo', 'inProgress', 'done'],
    default: 'todo',
    required: true
  }
}, {
  collection: 'posts',
  minimize: false,
  versionKey: false,
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

module.exports = TodoItemSchema